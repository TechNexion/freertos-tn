Overview
========
The WDOG Example project is to demonstrate usage of the KSDK wdog driver.
In this example,implemented to test the wdog.
And then after 10 times of refreshing the watchdog, a timeout reset is generated.
We also try to refresh out of window to trigger reset after 10 times of refreshing.
Please notice that because WDOG control registers are write-once only, so the 
WDOG_Init function and the WDOG_Disable function can be called only once after reset.
Hardware requirements
=====================
- Micro USB cable
- PICO-IMX8MQ  board
- J-Link Debug Probe
- 12V power supply
- Personal Computer

Board settings
==============
No special is needed.

Prepare the Demo
================
1.  Connect 12V power supply and J-Link Debug Probe to the board, switch SW701 to power on the board
2.  Connect a USB cable between the host PC and the J1701 USB port on the target board.
3.  Open a serial terminal with the following settings:
    - 115200 baud rate
    - 8 data bits
    - No parity
    - One stop bit
    - No flow control
4.  Download the program to the target board.
5.  Launch the debugger in your IDE to begin running the demo.

Running the demo
================
The log below shows the output of this demo in the terminal window:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

******** System Start ********
System reset by: Power On Reset!

- 3.Test the WDOG refresh function by using interrupt.
--- wdog Init done---

WDOG has be refreshed!
WDOG has be refreshed!
WDOG has be refreshed!

~~~~~~~~~~~~~~~~~~~~~

Toolchain supported
===================
- IAR embedded Workbench  8.32.1
- GCC ARM Embedded  7.3.1

