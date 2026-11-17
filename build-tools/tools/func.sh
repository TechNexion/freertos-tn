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
  echo "${FUNCNAME[1]} $1"
}

info_msg() {
  echo "[INFO][${FUNCNAME[1]}] $1"
}
error_msg() {
  echo "[ERROR][${FUNCNAME[1]}] $1"
  exit -1
}
warning_msg() {
  echo "[WARN][${FUNCNAME[1]}] $1"
}
debug_msg() {
    if [ "$DEBUG_MODE" == "yes" ]; then
    echo "[DBG][${FUNCNAME[1]}] $1"
    fi
}

error_check() {
    local ret=$1
    local msg=$2
    if [ "$ret" != "0" ]; then
        error_msg "${msg} FAIL!!!"
    fi
}

run_cmd() {
    local label=$1
    local err_exit=$2
    local cmd_str=$3

    info_msg "${label}, Running command: $cmd_str"
    eval "$cmd_str"
    local ret=$?
    if [ "$ret" == "0" ]; then
        return 0
    fi

    if [ "$ret" == "0" ]; then
        return 0
    fi

    if [ "$err_exit" == "yes" ]; then
        error_msg "[$label] Command failed: $cmd_str"
    else
        warning_msg "[$label] Command failed: $cmd_str"
    fi
}

copy_file() {
    local src=$1
    local dest=$2
    info_msg "Copy file $src to $dest ..."
    cp $src $dest
    if [ "$?" != "0" ]; then
        error_msg "Fails to copy ${src} to ${dest}"
    fi
    echo " success"
}



get_param_value() {
  local key=$1
  local params=$2

  IFS=',' read -ra pairs <<< "$params"

  for pair in "${pairs[@]}"; do
      pair=$(echo "$pair" | xargs)

      echo "$pair" | grep -q "$key="
      if [[ "$?" != "0" ]]; then
          continue
      fi

      local value="${pair#*=}"
      echo "$value"
      return
  done
}

get_value() {
    local type=$1
    local key=$2
    local valKey=$3

    case $type in
        app) local valStr="${appParam[${key}]}"
             local dataVal=$(get_param_value "$valKey" "${valStr}")
             echo "$dataVal"
    esac
}


download_firmware() {
    local fw_name=$1
    if [ ! -d ${fw_name} ] ; then
        run_cmd "Download DDR firmware" "yes" "wget https://www.nxp.com/lgfiles/NMG/MAD/YOCTO/${fw_name}.bin"
        run_cmd "Change mode" "yes" "chmod +x ${fw_name}.bin"
        run_cmd "Install run" "yes" "./${fw_name}.bin"
    fi
}


get_file_type() {
    local file_path=$1
    local file_type=$2

    local EXT="${file_path##*.}"
    local EXT_LOWER="${EXT,,}"
    echo "${EXT_LOWER}"
}

is_file_type() {
    local file_path=$1
    local file_type=$2

    if [[ "$(get_file_type "${file_path}")" == "$file_type" ]]; then
        echo "0"
    else
        echo "1"
    fi
}

dir() {
    local dir_name=$1

    case $dir_name in
        u-boot) echo "/workspace/sources/u-boot-tn-imx" ;;
        fw) echo "/workspace/ddr_fw" ;;
    esac
}
