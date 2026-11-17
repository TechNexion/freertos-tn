FROM ubuntu:24.04
LABEL maintainer="Jack Lo <jack.lo@technexion.com>" \
      org.opencontainers.image.authors="Jack Lo <jack.lo@technexion.com>" \
      org.opencontainers.image.version="1.0.0" \
      org.opencontainers.image.description="Ubuntu 24.04 RTOS build environment"

ENV VIRTUAL_ENV=/opt/nxp-venv \
    PATH=/opt/nxp-venv/bin:${PATH} \
    ARMGCC_DIR=/opt/toolchains/arm-gnu-toolchain-15.2.rel1-x86_64-arm-none-eabi \
    ARMGCC_DIR_AARCH64=/opt/toolchains/arm-gnu-toolchain-14.2.rel1-x86_64-aarch64-none-elf \
    ZEPHYR_TOOLCHAIN_VARIANT=cross-compile \
    CROSS_COMPILE_TOOLCHAIN_PATH=/opt/toolchains/arm-gnu-toolchain-15.2.rel1-x86_64-arm-none-eabi \
    CROSS_COMPILE=/opt/toolchains/arm-gnu-toolchain-15.2.rel1-x86_64-arm-none-eabi/bin/arm-none-eabi-

RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates cmake ninja-build gperf ccache dfu-util device-tree-compiler \
    wget curl python3 python3-dev python3-venv python3-tk python3-pip \
    xz-utils file make gcc gcc-multilib g++-multilib libsdl2-dev libmagic1 \
    build-essential libncurses-dev unzip tar sudo locales bison flex libssl-dev \
    libgnutls28-dev efitools git git xxd && \
    rm -rf /var/lib/apt/lists/*

RUN python3 -m venv "${VIRTUAL_ENV}" && pip install --no-cache-dir --upgrade pip west

# ADD arm-gnu-toolchain-14.2.rel1-x86_64-arm-none-eabi.tar.xz /opt/toolchains/
# ADD arm-gnu-toolchain-14.2.rel1-x86_64-aarch64-none-elf.tar.xz /opt/toolchains/
ENV PATH=/opt/toolchains/arm-gnu-toolchain-15.2.rel1-x86_64-arm-none-eabi/bin:${PATH}
ADD arm-gnu-toolchain-15.2.rel1-x86_64-arm-none-eabi.tar.xz /opt/toolchains/
ENV PATH=/opt/toolchains/arm-gnu-toolchain-15.2.rel1-x86_64-aarch64-none-linux-gnu/bin/:${PATH}
ADD arm-gnu-toolchain-15.2.rel1-x86_64-aarch64-none-linux-gnu.tar.xz /opt/toolchains/

RUN sed -i 's/^# *\(en_US.UTF-8 UTF-8\)/\1/' /etc/locale.gen \
    && locale-gen en_US.UTF-8 \
    && update-locale LANG=en_US.UTF-8

ARG USER_NAME
ARG USER_ID=1000
ARG GROUP_ID=1000

# 先刪除預設的 ubuntu 使用者與群組
RUN userdel -r ubuntu 2>/dev/null || true \
 && groupdel ubuntu 2>/dev/null || true

# Create group and user
RUN groupadd -g ${GROUP_ID} ${USER_NAME}
RUN useradd -m \
        -u ${USER_ID} \
        -g ${GROUP_ID} \
        -s /bin/bash \
        -G sudo \
        ${USER_NAME}

# Configure passwordless sudo
RUN echo "${USER_NAME} ALL=(ALL:ALL) NOPASSWD:ALL" \
    > /etc/sudoers.d/${USER_NAME} \
    && chmod 0440 /etc/sudoers.d/${USER_NAME}

ADD --chmod=755 tools/func.sh /usr/local/bin/func.sh
ADD --chmod=755 tools/uboot_build.sh /usr/local/bin/entrypoint.sh

USER ${USER_NAME}
WORKDIR /workspace

RUN echo "export LANG=en_US.UTF-8" >> ~/.bashrc && \
    echo "export LANGUAGE=en_US:en" >> ~/.bashrc && \
    echo "export LC_ALL=\"en_US.UTF-8\"" >> ~/.bashrc && \
    echo "export USE_CCACHE=1" >> ~/.bashrc && \
    echo "export PATH=/usr/lib/ccache:$PATH" >> ~/.bashrc && \
    echo "ulimit -s 20480" >> ~/.bashrc

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
# CMD ["/bin/bash"]
