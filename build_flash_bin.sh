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
SCRIPT_DIR=$(realpath $(dirname "$0"))
DEBUG_MODE="no"

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

main() {
  # --device-cgroup-rule='b 7:* rmw' \
  # --cap-add=SYS_ADMIN \
  # --device /dev/loop-control \

    DOCKER_OPTS="-it"
    local cmd="docker run ${DOCKER_OPTS} --rm \
  -v ${SCRIPT_DIR}:/workspace \
  tn_rtos_builder:v1 $@"
    info_msg "Docker cmd:$cmd"
    run_cmd "Start docker" "yes" "${cmd}"
}

main $@
