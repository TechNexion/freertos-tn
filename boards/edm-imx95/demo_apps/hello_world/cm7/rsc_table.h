/*
 * Copyright 2025 NXP
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

/* This file populates resource table for BM remote
 * for use by the Linux Master */

#ifndef RSC_TABLE_H_
#define RSC_TABLE_H_

#include <stddef.h>

#if defined __cplusplus
extern "C" {
#endif

#define RESOURCE_TABLE_START 0x88220000U
#define RESOURCE_TABLE_SIZE  0x1000U

/*
 * Copy resource table to shared memory base for early M Core boot case.
 * In M Core early boot case, Linux kernel need to get resource table before file system gets loaded.
 */
void copyResourceTable(void);

#if defined __cplusplus
}
#endif

#endif /* RSC_TABLE_H_ */
