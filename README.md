# NXP FreeRTOS BSP 2.5.x

The FreeRTOS BSP is for NXP’s i.MX8 SOC family with ARM Cortex-M4 core.
The BSP is based on NXP MCUXpresso SDK `SDK_2.5.0_EVK-MIMX8MM` and `SDK_2.5.1_EVK-MIMX8MQ`.


#### Support platform: `pico-imx8mq`, `pico-imx8mm`

Download and install toolchain to compile FreeRTOS:
```
wget 'wget https://developer.arm.com/-/media/Files/downloads/gnu-rm/7-2018q2/gcc-arm-none-eabi-7-2018-q2-update-linux.tar.bz2'
tar jxvf gcc-arm-none-eabi-7-2018-q2-update-linux.tar.bz2
```
FreeRTOS relies on cmake to build, so you also need to make sure the following packages are installed on your machine:

```
sudo apt-get install make cmake
```
Export the environment of toolchain
```
export ARMGCC_DIR=${absolute_path}/gcc-arm-none-eabi-7-2018-q2-update/
```
Then, you can start to build the example you would like to run.

![Build_and_run_examples](https://github.com/TechNexion/freertos-tn/wiki/Build_and_run_example)



Please refer to more information in NXP document:

> docs/Getting Started with MCUXpresso SDK.pdf
