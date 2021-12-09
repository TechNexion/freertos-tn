# NXP FreeRTOS BSP 2.10.x
 
The FreeRTOS BSP is for NXP’s i.MX8 SOC family with ARM Cortex-M4/Cortex-M7 core.
The BSP is based on NXP MCUXpresso SDK `SDK_2.10.0_EVK-MIMX8MP`, `SDK_2.10.1_EVK-MIMX8MM`.


#### Support platform: `edm-g-imx8mp`

Install GCC Arm embedded tool chain:

Download and run the installer from GNU Arm Embedded Toolchain. This is the actual toolset (in other words, compiler, linker, and so on). The GCC toolchain should correspond to the latest supported version, as described in MCUXpresso SDK Release

```
https://launchpad.net/gcc-arm-embedded
```

FreeRTOS relies on cmake to build, so you also need to make sure the following packages are installed on your machine:

```
$ sudo apt-get install make cmake
```

Export the environment of toolchain
```
$ export ARMGCC_DIR=/work/platforms/tmp/gcc-arm-none-eabi-9-2019-q4-major
$ export PATH=$PATH:/work/platforms/tmp/gcc-arm-none-eabi-9-2019-q4-major/bin
```

Then, you can start to build the example you would like to run.

[Build_and_run_examples](https://github.com/TechNexion/freertos-tn/wiki/Build_and_run_example)

Please refer to more information in NXP document:

> docs/[Getting Started with MCUXpresso SDK.pdf](https://github.com/TechNexion/freertos-tn/tree/freertos_2.10.x_imx8/docs)
