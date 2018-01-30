/*
 * Copyright (c) 2015, Freescale Semiconductor, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * o Redistributions of source code must retain the above copyright notice, this list
 *   of conditions and the following disclaimer.
 *
 * o Redistributions in binary form must reproduce the above copyright notice, this
 *   list of conditions and the following disclaimer in the documentation and/or
 *   other materials provided with the distribution.
 *
 * o Neither the name of Freescale Semiconductor, Inc. nor the names of its
 *   contributors may be used to endorse or promote products derived from this
 *   software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#include <assert.h>
#include "gpio_pins.h"

#if ( DWARF_BOARD == 1 )
gpio_config_t gpioLed = {
    "USER LED",                         /* name */
    &IOMUXC_SW_MUX_CTL_PAD_EPDC_DATA07, /* muxReg */
    5,                                  /* muxConfig */
    &IOMUXC_SW_PAD_CTL_PAD_EPDC_DATA07, /* padReg */
    0,                                  /* padConfig */
    GPIO2,                              /* base */
    7                                   /* pin */
};

gpio_config_t gpioSensorInt = {
    "SensorInt",                                    /* name */
    &IOMUXC_SW_MUX_CTL_PAD_EPDC_DATA01,             /* muxReg */
    5,                                              /* muxConfig */
    &IOMUXC_SW_PAD_CTL_PAD_EPDC_DATA01,             /* padReg */
    IOMUXC_SW_PAD_CTL_PAD_EPDC_DATA01_PS(2)   |     /* padConfig */
    IOMUXC_SW_PAD_CTL_PAD_EPDC_DATA01_PE_MASK |
    IOMUXC_SW_PAD_CTL_PAD_EPDC_DATA01_HYS_MASK,
    GPIO2,                                          /* base */
    1                                               /* pin */
};

gpio_config_t gpioGyrInt = {
    "GyrInt",                                       /* name */
    &IOMUXC_SW_MUX_CTL_PAD_EPDC_DATA00,             /* muxReg */
    5,                                              /* muxConfig */
    &IOMUXC_SW_PAD_CTL_PAD_EPDC_DATA00,             /* padReg */
    IOMUXC_SW_PAD_CTL_PAD_EPDC_DATA00_PS(2)   |     /* padConfig */
    IOMUXC_SW_PAD_CTL_PAD_EPDC_DATA00_PE_MASK |
    IOMUXC_SW_PAD_CTL_PAD_EPDC_DATA00_HYS_MASK,
    GPIO2,                                          /* base */
    0                                               /* pin */
};

gpio_config_t gpioPressureInt = {
    "PressureInt",                                  /* name */
    &IOMUXC_SW_MUX_CTL_PAD_EPDC_DATA06,             /* muxReg */
    5,                                              /* muxConfig */
    &IOMUXC_SW_PAD_CTL_PAD_EPDC_DATA06,             /* padReg */
    IOMUXC_SW_PAD_CTL_PAD_EPDC_DATA06_PS(2)   |     /* padConfig */
    IOMUXC_SW_PAD_CTL_PAD_EPDC_DATA06_PE_MASK |
    IOMUXC_SW_PAD_CTL_PAD_EPDC_DATA06_HYS_MASK,
    GPIO2,                                          /* base */
    6                                               /* pin */
};
#else
gpio_config_t gpioLed = {
    "USER LED",                         /* name */
    &IOMUXC_SW_MUX_CTL_PAD_EPDC_DATA06, /* muxReg */
    5,                                  /* muxConfig */
    &IOMUXC_SW_PAD_CTL_PAD_EPDC_DATA06, /* padReg */
    0,                                  /* padConfig */
    GPIO2,                              /* base */
    6                                   /* pin */
};
#endif	// #if ( DWARF_BOARD == 1 )

void configure_gpio_pin(gpio_config_t *config)
{
    assert(config);

    *(config->muxReg) = config->muxConfig;
    *(config->padReg) = config->padConfig;
}

/*******************************************************************************
 * EOF
 ******************************************************************************/
