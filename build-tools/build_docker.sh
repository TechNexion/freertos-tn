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

log_msg() {
  local msg=$1
  echo "${FUNCNAME[1]} $msg"
}
info_msg() {
  local msg=$1
  echo "[INFO][${FUNCNAME[1]}] $msg"
}
error_msg() {
  local msg=$1
  echo "[ERROR][${FUNCNAME[1]}] $msg"
  exit 1
}
warning_msg() {
  local msg=$1
  echo "[WARN][${FUNCNAME[1]}] $msg"
}
debug_msg() {
  local msg=$1
  if [ "$DEBUG_MODE" == "yes" ]; then
    echo "[DBG][${FUNCNAME[1]}] $msg"
  fi
}
run_cmd() {
  label=$1
  err_exit=$2
  cmd_str=$3
  info_msg "Running command: $cmd_str"
  eval "$cmd_str"
  ret=$?

  if [[ "$err_exit" != "yes" && "$err_exit" != "true" ]]; then
    return 0
  fi

  if [ "$ret" != "0" ]; then
    error_msg "[$label] Command failed: $cmd_str"
    if [[ -t 0 ]]; then
      return 1
    fi
    exit 1

  fi
  return 0
}

rm_file() {
  tag=$1
  file_path=$2
  [[ ! -e $file_path ]] && warning_msg "file:$file_path, not exist, ignore" && return
  run_cmd "$tag" "yes" "rm -f $file_path"
}

mk_dir() {
  tag=$1
  dir_path=$2

  [[ -d $dir_path ]] && return

  info_msg "${tag}, folder:$dir_path not exist, create the folder"
  mkdir -p $dir_path
  if [ "$?" != "0" ]; then
    error_msg "${tag}, create folder $dir_path , fail!!!"
  fi
}

download_gnu_file() {
    local toolchain_ver=$1
    local target_arm_type=$2

    case $target_arm_type in
        arm) target_arm_type="arm-none-eabi";;
        aarch64) target_arm_type="aarch64-none-elf";;
        # ?) error_msg "Not support arm type:$target_arm_type" ;;
    esac

    local file_name="arm-gnu-toolchain-${toolchain_ver}-x86_64-${target_arm_type}.tar.xz"
    local base_url="https://developer.arm.com/-/media/Files/downloads/gnu/${toolchain_ver}/binrel"
    if [ ! -f "$file_name" ]; then
        run_cmd "Download AARCH64 toolchain" "yes" "wget $base_url/$file_name"
    fi

}

download_toolchain() {
    info_msg "Download toolchain..."
    # download_gnu_file "14.2.rel1" "arm"
    # download_gnu_file "14.2.rel1" "aarch64"
    download_gnu_file "15.2.rel1" "arm"
    download_gnu_file "15.2.rel1" "aarch64-none-linux-gnu"
}

script_dir=$(dirname "$0")

TEST_MODE="false"
AUTO_BUILD="false"


declare -A argMap
arg_name_list_to_map() {
  echo "arg_name_list_to_map"
  argNameList=(
    "USER_NAME"
    "GIT_NAME"
    "GIT_EMAIL"
    "USER_ID"
    "GROUP_ID"
  )

  for item in "${argNameList[@]}"; do
      # echo "Current item: $item"
      argMap["${item}"]=""
  done
}

Help() {
    info_msg "-t: 設定Docker 前綴名"
}

init_arg_data() {
  echo "init_arg_data"
  GIT_NAME=$(git config --get user.name)
  GIT_EMAIL=$(git config --get user.email)
  HOST_USER_NAME=$(whoami)
  HOST_USER_ID=$(id -u)
  HOST_USER_GROUP_ID=$(id -g)

  # GIT 設定
  argMap["GIT_NAME"]="${GIT_NAME}"
  argMap["GIT_EMAIL"]="${GIT_EMAIL}"
  # Linux 環境
  argMap["USER_NAME"]="${HOST_USER_NAME}"
  argMap["USER_ID"]=${HOST_USER_ID}
  argMap["GROUP_ID"]=${HOST_USER_GROUP_ID}
  # argMap["SSH_KEY"]="$(cat  ~/.ssh/id_rsa)"
  # argMap["SSH_PUB_KEY"]="$(cat ~/.ssh/id_rsa.pub)"

}
check_and_input_data() {

  for key in "${!argMap[@]}"; do
      value="${argMap[$key]}"
      if [ "$value" == "" ]; then
        echo "請設定 ${key}:"
        read user_val
        argMap[$key]="${user_val}"
      fi
      # echo "Key: $key, Value: $value"
  done
}
dump_args_map() {
  echo "以下為目前Docker所使用的變數設定:"
  for key in "${!argMap[@]}"; do
      value="${argMap[$key]}"
      echo " [$key]=$value"
  done
}

args_map_to_cmd_str() {
  ret_str=""

  for key in "${!argMap[@]}"; do
      value="${argMap[$key]}"
      if [[ "$value" =~ [[:space:]] ]]; then
        ret_str="$ret_str --build-arg ${key}=\"$value\""
      else
        ret_str="$ret_str --build-arg ${key}=$value"
      fi
  done
  echo "${ret_str}"
}

build_docker() {
    info_msg "Start build Docker imsges..."
    args_str=$(args_map_to_cmd_str)

    cmd="docker build ${ARG_DEBUG} -f Dockerfile  ${args_str} --force-rm -t tn_rtos_builder:v1 ."
    pushd $script_dir/
    eval $cmd
    ret=$?

    popd
    if [ $ret -ne 0 ]; then
      echo "Docker build failed."
    fi
}

arg_name_list_to_map
while getopts ":hip:yP:v" option; do
  case $option in
  h)
     Help
     exit ;;
  P) QTI_PW="${OPTARG}" ;;
  v) TEST_MODE="true" ;;
  esac
done

if [ "${TEST_MODE}" == "true" ]; then
  ARG_DEBUG="--progress=plain"
fi
init_arg_data
check_and_input_data
download_toolchain
build_docker
