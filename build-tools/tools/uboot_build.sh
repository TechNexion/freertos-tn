#!/bin/bash
#################################################################################
# Copyright 2026 Technexion Ltd.
#
# Author: Jack Lo <jack.lo@technexion.com>
#
# This program is free software; you can redistribute it and/or modify
# it under the terms of the GNU General Public License version 2 as
# published by the Free Software Foundation.
#################################################################################
script_path=$(readlink -f "${BASH_SOURCE[0]}")
script_dir=$(dirname "$script_path")
script_name=$(basename "$script_path")
. /usr/local/bin/func.sh

export CROSS_COMPILE=aarch64-none-linux-gnu-
export ARCH=arm64
export TOOLS=/opt/toolchains
DEBUG_MODE="yes"
PROJECT="edm-imx95"
PLATFORM="imx95"
SOC_TARGET="iMX95"
SOC_DIR="iMX95"
SILICON_REV="B0"
IMX_BOOT_SEEK="32"
MKIMAGE_TARGET="flash_all"
ATF_BOOT_UART_BASE="0x30890000"

FIRMWARE_DIR="${FIRMWARE_DIR:-imx-boot_generation}"
MKIMAGE_BASE_DIR="/workspace/sources/imx-mkimage"
MKIMAGE_DIR="${MKIMAGE_BASE_DIR}/${SOC_DIR}"
DDR_TYPE="${DDR_TYPE:-lpddr5_multi}"
DDR_FW_VER="8.32-1991416"
ELE_FW_VER="2.0.6-c0b284c"
DTBS="imx95-edm-evm.dtb"

declare -A appParam=(
  ["hello_world"]="dir=demo_apps/hello_world, src_bin=hello_world.bin"
  ["rpmsg_lite_pingpong"]="dir=multicore_examples/rpmsg_lite_pingpong_rtos_linux/remote, src_bin=rpmsg_lite_pingpong_rtos_linux_remote.bin"
  ["rpmsg_lite_str_echo"]="dir=multicore_examples/rpmsg_lite_str_echo_rtos/remote, src_bin=rpmsg_lite_str_echo_rtos_remote.bin"
)

is_ddr4() {
    local ddr_type=${DDR_TYPE}
    case $ddr_type in
        lpddr4x_multi | lpddr4x_2g | lpddr4x_4g | lpddr4x_8g) echo "1";;
        *) echo "0" ;;
    esac
}

get_ddr_name() {
    local _is_ddr_4=$(is_ddr4)
    local ddr_name="lpddr5"
    if [ "$_is_ddr_4" == "1" ]; then
        ddr_name="lpddr4x"
    fi
    echo "${ddr_name}"
}

install_firmware() {
    local fw_dir_base="/workspace/ddr_fw"
    mkdir -p ${fw_dir_base}
    pushd ${fw_dir_base}
        download_firmware "firmware-imx-${DDR_FW_VER}"

        local src_base_dir="firmware-imx-${DDR_FW_VER}/firmware/ddr/synopsys"
        local ddr_name=$(get_ddr_name)

        copy_file ${src_base_dir}/${ddr_name}_dmem_qb_v202409.bin "${MKIMAGE_DIR}/"
        copy_file ${src_base_dir}/${ddr_name}_dmem_v202409.bin "${MKIMAGE_DIR}/"
        copy_file ${src_base_dir}/${ddr_name}_imem_qb_v202409.bin "${MKIMAGE_DIR}/"
        copy_file ${src_base_dir}/${ddr_name}_imem_v202409.bin "${MKIMAGE_DIR}/"

        local soc_lower=$(echo $SOC_DIR | sed 's/^i//' | tr '[:upper:]' '[:lower:]')
        local rev_lower=$(echo "${SILICON_REV}" | tr '[:upper:]' '[:lower:]')
        local ahab_img="${soc_lower}${rev_lower}-ahab-container.img"
        download_firmware "firmware-ele-imx-${ELE_FW_VER}"
        copy_file firmware-ele-imx-${ELE_FW_VER}/${ahab_img} ${MKIMAGE_DIR}/
    popd
}

install_uboot_dtb() {
    pushd /workspace/sources/u-boot-tn-imx
    copy_file ./build/u-boot.bin ${MKIMAGE_DIR}/
    copy_file ./build/spl/u-boot-spl.bin ${MKIMAGE_DIR}/

    #Copy device tree file
    local dts_files="${DTBS}"
    for DTB in ${dts_files}
    do
        copy_file ./build/arch/arm/dts/${DTB} ${MKIMAGE_DIR}/
    done
    popd
}

get_ddr_type_by_project() {
    local project_name=$1
    case $project_name in
    edm-imx95)  echo "lpddr5_multi" ;;
    edm-imx95-r) echo "lpddr4x_multi" ;;
    esac
}

build_flash_bin() {
    local target_name=$1
    pushd ${MKIMAGE_BASE_DIR}
        local ddr_name=$(get_ddr_name)
        copy_file /workspace/sources/u-boot-tn-imx/build/tools/mkimage ${MKIMAGE_DIR}/mkimage_uboot
        run_cmd "Generate boot:${MKIMAGE_TARGET} image" "yes" \
            "make -j$(nproc) SOC=${SOC_TARGET} REV=${SILICON_REV} OEI=\"YES\" LPDDR_TYPE=${ddr_name} dtbs=${DTBS} ${MKIMAGE_TARGET}"
        copy_file ${MKIMAGE_DIR}/flash.bin /workspace/output/m7_${target_name}_flash.bin
    popd
}

set_project() {
    local project_name=$1
    case $project_name in
    edm-imx95)
       export PROJECT="$project_name"
       export DDR_TYPE="lpddr5_multi"
       info_msg "Set project:$PROJECT"
       ;;
    edm-imx95-r)
        export PROJECT="$project_name"
        export DDR_TYPE="lpddr4x_multi"
        info_msg "Set project:$PROJECT, DDR_TYPE:$DDR_TYPE"
        ;;
    *) PROJECT="" ;;
    esac

}

build_oei() {
    info_msg "Build OEI image.."
    pushd /workspace/sources/imx-oei/
    local ddr_conf=$(get_ddr_type_by_project "${PROJECT}")
    if [ "${ddr_conf}" == "" ]; then
        error_msg "Not support DDR type:${DDR_TYPE}"
    fi

    local board_name="edm-imx95"
    run_cmd "Build imx-oei-ddr" "yes" "make -j$(nproc) board=${board_name} oei=ddr r=B0 DDR_CONFIG=${ddr_conf} DEBUG=1"
    run_cmd "Build imx-oei-tcm" "yes" "make -j$(nproc) board=${board_name} oei=tcm r=B0 DEBUG=1"
    copy_file "build/${board_name}/ddr/oei-m33-ddr.bin" "${MKIMAGE_DIR}/"
    popd
}

build_sm() {
    info_msg "Build SM image.."
    pushd /workspace/sources/imx-sm
        local cfg_name="edm-imx95"
        run_cmd "Build imx-sm" "yes" "make -j$(nproc) config=${cfg_name} clean"
        if [ ! -d "/workspace/sources/imx-sm/configs/edm-imx95" ]; then
            run_cmd "Build imx-sm" "yes" "make -j$(nproc) config=${cfg_name} cfg"
        fi
        run_cmd "Build imx-sm" "yes" "make -j$(nproc) config=${cfg_name} all"
        copy_file "build/${cfg_name}/m33_image.bin" "${MKIMAGE_DIR}/"
    popd
}

build_atf() {
    info_msg "Build ATF image.."
    pushd /workspace/sources/imx-atf
        run_cmd "Delete bl31.bin" "no" "find -name bl31.bin -delete"
        run_cmd "Build imx-atf" "yes" "make -j$(nproc) PLAT=${PLATFORM} IMX_BOOT_UART_BASE=${ATF_BOOT_UART_BASE} bl31"
        mkdir -p "/workspace/sources/u-boot-tn-imx/build/"
        copy_file "build/imx95/release/bl31.bin" "/workspace/sources/u-boot-tn-imx/build/"
        copy_file "build/imx95/release/bl31.bin" "${MKIMAGE_DIR}/"
    popd
}

build_uboot() {
    info_msg "Build UBOOT image.."
    pushd /workspace/sources/u-boot-tn-imx
        SOC=imx95
        run_cmd "Build imx-boot ${SOC} config" "yes" "make O=./build edm-imx95_defconfig"
        run_cmd "Build imx-boot ${SOC}"        "yes" "make O=./build -j$(nproc)"
    popd
}

build_m7_app() {
    local app_name=$1
    local dir=$2
    local src_bin=$3
    pushd ${dir}
    run_cmd "Build ${app_name}" "yes" "./build_debug.sh"
    copy_file "./debug/${src_bin}" "${MKIMAGE_DIR}/m7_image.bin"
    popd
}

build_m7_flash_bin() {
    local app_name=$1
    local dir=$(get_value "app" "$app_name" "dir")
    local src_bin=$(get_value "app" "$app_name" "src_bin")

    mkdir -p /workspace/output/
    build_m7_app "${app_name}" "/workspace/sources/freertos-tn/boards/edm-imx95/${dir}/cm7/armgcc" "${src_bin}"
    build_flash_bin "${app_name}"
}

build_all() {
    build_oei
    build_sm
    build_atf
    build_uboot
    install_uboot_dtb
    install_firmware

    build_m7_flash_bin "hello_world"
    build_m7_flash_bin "rpmsg_lite_pingpong"
    build_m7_flash_bin "rpmsg_lite_str_echo"
    info_msg "Finish build M7 demo apps!!!"
}

show_help() {
    cat << EOF
Usage: $0 [OPTIONS]

Options:
  -h, --help                     Show this help message and exit.
  -c, --clean                    Clean previous build artifacts and exit.
  -p, --set-project-type <TYPE>  Specify the build project type (edm-imx95 or edm-imx95-r).
  -b, --build                    Start the build process.

Examples:
  $0 -c
  $0 -p edm-imx95 -b
  $0 --set-project-type edm-imx95-r --build
EOF
}

output_clean() {
    info_msg "Clean output files...."
    rm -rf /workspace/sources/imx-atf/build/
    rm -rf /workspace/sources/imx-oei/build/
    rm -rf /workspace/sources/imx-sm/build/
    rm -rf /workspace/sources/u-boot-tn-imx/build/
    rm -rf /workspace/boards/edm-imx95/demo_apps/hello_world/cm7/armgcc/debug/
    rm -rf /workspace/boards/edm-imx95/multicore_examples/rpmsg_lite_pingpong_rtos_linux/remote/cm7/armgcc/debug/
    rm -rf /workspace/boards/edm-imx95/multicore_examples/rpmsg_lite_str_echo_rtos/remote/cm7/armgcc/debug/
    rm -rf /workspace/output/
    info_msg "Finish clean output files!!!"
}

PARSED_OPTIONS=$(getopt -o hbcp:s --long help,build,clean,set-project-type:,shell --name "$0" -- "$@")

if [ $? -ne 0 ]; then
    echo "farser fail！" >&2
    show_help
    exit 1
fi
if [ "$#" -eq 0 ]; then
    echo "Error: No options provided." >&2
    show_help
    exit 1
fi
DO_CLEAN=false
DO_BUILD=false

eval "set -- $PARSED_OPTIONS"
while true; do
    case "$1" in
        # TODO:remote
        -s|--shell)
        /bin/bash
        shift 1
        ;;
        -h|--help)
            show_help
            shift
            exit 0
            ;;
        -b|--build)
            DO_BUILD=true
            shift 1
            ;;
        -c|--clean)
            DO_CLEAN=true
            shift 1
            ;;
        -p|--set-project-type)
            set_project $2
            shift 2
            ;;

        --) shift
            break
            ;;
        *) error_msg "parser error" >&2
            exit 1
            ;;
    esac
done

if [ "$DO_CLEAN" = true ]; then
    output_clean
fi

if [ "$DO_BUILD" = true ]; then
    if [ -z "$PROJECT" ]; then
        echo "Error: Project type is required for building. Use -p <edm-imx95|edm-imx95-r>." >&2
        exit 1
    fi
    echo "Starting build for $PROJECT..."
    build_all
fi
