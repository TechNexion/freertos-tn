var group__uart__driver =
[
    [ "uart_config_t", "group__uart__driver.html#structuart__config__t", [
      [ "baudRate_Bps", "group__uart__driver.html#gacc123668836f3432c54ee6a2f6f318f1", null ],
      [ "parityMode", "group__uart__driver.html#ga1a3abcf4f0f5d0a3893df14f2991aa39", null ],
      [ "dataBitsCount", "group__uart__driver.html#gaa026642db643d8cae1a64869acd9baf5", null ],
      [ "stopBitCount", "group__uart__driver.html#gadf6e33c13910e9ec7c2688f83a462be0", null ],
      [ "txFifoWatermark", "group__uart__driver.html#ga5eb9ab81752080bc726b8d625d2b6b21", null ],
      [ "rxFifoWatermark", "group__uart__driver.html#ga1bb7b2f0f7df79977d33be264fb5163a", null ],
      [ "enableAutoBaudRate", "group__uart__driver.html#gac595435b68632c2dbaece764c54cd41d", null ],
      [ "enableTx", "group__uart__driver.html#ga91d575902455699a312c64b564133a8d", null ],
      [ "enableRx", "group__uart__driver.html#gaa045acd340fc86d70a497f49e0a95bdd", null ]
    ] ],
    [ "uart_transfer_t", "group__uart__driver.html#structuart__transfer__t", [
      [ "data", "group__uart__driver.html#gaf91f05b0f951836e3002f60f0575f369", null ],
      [ "dataSize", "group__uart__driver.html#ga21820f8294de0d75d863b72512a7c12f", null ]
    ] ],
    [ "uart_handle_t", "group__uart__driver.html#struct__uart__handle", [
      [ "txData", "group__uart__driver.html#ga046372eac11f58a16f519c0ee264ea9e", null ],
      [ "txDataSize", "group__uart__driver.html#ga1e67a92b463ad328646834ea0de4d70d", null ],
      [ "txDataSizeAll", "group__uart__driver.html#ga80361474eb03b3aa30d02bda82adce65", null ],
      [ "rxData", "group__uart__driver.html#ga5c87354702502998d3ccca9d9bfd3069", null ],
      [ "rxDataSize", "group__uart__driver.html#ga46bd84d885004806f89744ad79edd81e", null ],
      [ "rxDataSizeAll", "group__uart__driver.html#ga800a05d5ea3c6240daad46f466a8fea4", null ],
      [ "rxRingBuffer", "group__uart__driver.html#gafeba8b549facc329937046e734681963", null ],
      [ "rxRingBufferSize", "group__uart__driver.html#ga8d6afed4b64233c959a180b66686c14c", null ],
      [ "rxRingBufferHead", "group__uart__driver.html#ga85d061606b31401fb4a9d0e22e77056c", null ],
      [ "rxRingBufferTail", "group__uart__driver.html#ga9f4482059188bea2603b1c07cf9cc084", null ],
      [ "callback", "group__uart__driver.html#ga2ef9706e8203ba72fa1e04c48581fb0f", null ],
      [ "userData", "group__uart__driver.html#ga69ce1fdb7a2f60c0ecc94c4d1b2ed6ff", null ],
      [ "txState", "group__uart__driver.html#ga9fa8f119b6e0e3a7805fb25edafb1498", null ],
      [ "rxState", "group__uart__driver.html#ga5aa95f3d2cb81a8bb01a11ab2cf66234", null ]
    ] ],
    [ "uart_transfer_callback_t", "group__uart__driver.html#gaf164fa4e12ff8a3e3f3997512001e007", null ],
    [ "_uart_status", "group__uart__driver.html#gacef40dc8e8ac174bfe40ebcbc980f84b", [
      [ "kStatus_UART_TxBusy", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84ba19ddee4fe5963467600028b78fb468e7", null ],
      [ "kStatus_UART_RxBusy", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84ba68cf23f981c4b85f82291163fbb2a5e6", null ],
      [ "kStatus_UART_TxIdle", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84baf36c829b1b889517bf775c0d7ce29fa6", null ],
      [ "kStatus_UART_RxIdle", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84bae0877b14627ed2aa8ddb2bf5b033f407", null ],
      [ "kStatus_UART_TxWatermarkTooLarge", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84ba765913f003819ed87b861d187bf79ab8", null ],
      [ "kStatus_UART_RxWatermarkTooLarge", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84ba720cefde05389830f35f6e6df6f6ac67", null ],
      [ "kStatus_UART_FlagCannotClearManually", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84ba5ee8e23fc9ab20cf366942751b895f54", null ],
      [ "kStatus_UART_Error", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84ba950972a9e2ebbaa13c92e8f5a51f785d", null ],
      [ "kStatus_UART_RxRingBufferOverrun", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84ba2e5b644b1e10c426af818bc78657e992", null ],
      [ "kStatus_UART_RxHardwareOverrun", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84bab6b1fd6c2deec25992449f5b12303a26", null ],
      [ "kStatus_UART_NoiseError", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84bae4ef4df9a5f756ccf1b4bf08292ec2fb", null ],
      [ "kStatus_UART_FramingError", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84baa7aa134f85df3d5863ca962ce1ea7ee0", null ],
      [ "kStatus_UART_ParityError", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84baea20b2588c38f259f1412aa7132c9ef8", null ],
      [ "kStatus_UART_BaudrateNotSupport", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84bae6cdb41e1b49958f57727cd47afd69b2", null ],
      [ "kStatus_UART_BreakDetect", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84ba43540408a2faf9ce9e8e8c940bddd456", null ]
    ] ],
    [ "uart_data_bits_t", "group__uart__driver.html#gadc68b8fd9ded3990f84129df23fee798", [
      [ "kUART_SevenDataBits", "group__uart__driver.html#ggadc68b8fd9ded3990f84129df23fee798ab8c89dfed11b0628f58344705d4b0fb8", null ],
      [ "kUART_EightDataBits", "group__uart__driver.html#ggadc68b8fd9ded3990f84129df23fee798a2d77888a8dd82a66fb7bd86e51b4127c", null ]
    ] ],
    [ "uart_parity_mode_t", "group__uart__driver.html#ga436e5a7bdb5f24decb5bfb0c87a83ff4", [
      [ "kUART_ParityDisabled", "group__uart__driver.html#gga436e5a7bdb5f24decb5bfb0c87a83ff4a97e2feae6671a6de1126ebc2edf4606b", null ],
      [ "kUART_ParityEven", "group__uart__driver.html#gga436e5a7bdb5f24decb5bfb0c87a83ff4a9e68fe3aba46e045bee5433ed098bff0", null ],
      [ "kUART_ParityOdd", "group__uart__driver.html#gga436e5a7bdb5f24decb5bfb0c87a83ff4ae48c7fabc9babf1be626ebeb2627a54c", null ]
    ] ],
    [ "uart_stop_bit_count_t", "group__uart__driver.html#gaca4f14d23735c6afefb76cbee18e1db6", [
      [ "kUART_OneStopBit", "group__uart__driver.html#ggaca4f14d23735c6afefb76cbee18e1db6a5a8829a108d8a46abb097a36cde051a7", null ],
      [ "kUART_TwoStopBit", "group__uart__driver.html#ggaca4f14d23735c6afefb76cbee18e1db6a9704b3ae3ee851acf324eb357f75ab56", null ]
    ] ],
    [ "uart_idle_condition_t", "group__uart__driver.html#gac1d3d36674ef10ea596df09cd1ac4834", [
      [ "kUART_IdleFor4Frames", "group__uart__driver.html#ggac1d3d36674ef10ea596df09cd1ac4834a5b39a550a12fb82364e14867ba800df6", null ],
      [ "kUART_IdleFor8Frames", "group__uart__driver.html#ggac1d3d36674ef10ea596df09cd1ac4834ad1a880a7b8d05eabd494ad0a9154555d", null ],
      [ "kUART_IdleFor16Frames", "group__uart__driver.html#ggac1d3d36674ef10ea596df09cd1ac4834a2379458f47b103178be8e3265e02fa28", null ],
      [ "kUART_IdleFor32Frames", "group__uart__driver.html#ggac1d3d36674ef10ea596df09cd1ac4834a12f80ba050b8a679e22b92d5e4e163e7", null ]
    ] ],
    [ "_uart_interrupt_enable", "group__uart__driver.html#ga700f3cd8e3800273a1591307cab6311c", null ],
    [ "_uart_flags", "group__uart__driver.html#ga259a53f363288115306a45d08fc66eb8", [
      [ "kUART_RxCharReadyFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a309643dfba0c44efc0600c02af6eaebf", null ],
      [ "kUART_RxErrorFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a792f36da4b89b615ad2d20e05ccb4232", null ],
      [ "kUART_RxOverrunErrorFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a310a961508b63dfe3d8d996400ce410c", null ],
      [ "kUART_RxFrameErrorFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a088d4fcbbbe8a99aebe86debca4a97c2", null ],
      [ "kUART_RxBreakDetectFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8af76e33f2ae98819b0fdb938a96a3c7e9", null ],
      [ "kUART_RxParityErrorFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8aff287d5d8a910bd392c626f0b51a8ef0", null ],
      [ "kUART_ParityErrorFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a0c92973ab1d527115fa01934c62a053d", null ],
      [ "kUART_RtsStatusFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8ac7e88bad028598aab3b9821b9a2e0267", null ],
      [ "kUART_TxReadyFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a3913198655fd8ce2eb451d0550619d32", null ],
      [ "kUART_RtsDeltaFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8ab6a18a71d4711614848e0abfa114d48d", null ],
      [ "kUART_EscapeFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a3446413cf0ba110c3f25e869ec723253", null ],
      [ "kUART_FrameErrorFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a869aae50c5c1970a098d17c8ce7b844c", null ],
      [ "kUART_RxReadyFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a50a2cc679d220e394c538803af4e287e", null ],
      [ "kUART_AgingTimerFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a95a6f29cdead568e08951974a708a77f", null ],
      [ "kUART_DtrDeltaFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a58c55093c621cb30ff7db3dca0fb3fe9", null ],
      [ "kUART_RxDsFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8adab01f057c6ed194fa44d0efc64ae15c", null ],
      [ "kUART_tAirWakeFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a18f1130c93e0cb2033841dc9686129a3", null ],
      [ "kUART_AwakeFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8afec67475e7606d8612d8df8ba6273728", null ],
      [ "kUART_Rs485SlaveAddrMatchFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a49554d7b7783b495061c5cfc579250f8", null ],
      [ "kUART_AutoBaudFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a89cdd9c043992663c2072079684d1f33", null ],
      [ "kUART_TxEmptyFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a38300abd304436626e61b70f216f8865", null ],
      [ "kUART_DtrFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a257bc03110bc5ebf9b2fbb50c144b320", null ],
      [ "kUART_IdleFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8aab7d8fe2ab1cd29f7e27ff59fc6cd44e", null ],
      [ "kUART_AutoBaudCntStopFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8ad1ffb9b804eef7907a061b67672563ac", null ],
      [ "kUART_RiDeltaFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a2e0e3b65dd4ad1e0d9d4fc75802e6bd8", null ],
      [ "kUART_RiFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a989877e611df5363fb1b9f2f35a10379", null ],
      [ "kUART_IrFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a2d7ecd6806bd476eddb0c8a4f06f8409", null ],
      [ "kUART_WakeFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a8ca129e7898c036893bae13929525883", null ],
      [ "kUART_DcdDeltaFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8adf5283f5c932378cac93919e7d5d77d8", null ],
      [ "kUART_DcdFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a1c3d7335bce198659e94ae749044a565", null ],
      [ "kUART_RtsFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a683ac4d5b01bbfeea1282293cd089da0", null ],
      [ "kUART_TxCompleteFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8af23b48cba192fcc511857cee4fd7cd3f", null ],
      [ "kUART_BreakDetectFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8adb8b7904275137c75de5050adc1f2877", null ],
      [ "kUART_RxOverrunFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a93d3c56466b4656dcce08d9323d7afd8", null ],
      [ "kUART_RxDataReadyFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a5f68dab1ddbb31a54997e5e33534b7e0", null ]
    ] ],
    [ "kStatus_UART_TxBusy", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84ba19ddee4fe5963467600028b78fb468e7", null ],
    [ "kStatus_UART_RxBusy", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84ba68cf23f981c4b85f82291163fbb2a5e6", null ],
    [ "kStatus_UART_TxIdle", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84baf36c829b1b889517bf775c0d7ce29fa6", null ],
    [ "kStatus_UART_RxIdle", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84bae0877b14627ed2aa8ddb2bf5b033f407", null ],
    [ "kStatus_UART_TxWatermarkTooLarge", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84ba765913f003819ed87b861d187bf79ab8", null ],
    [ "kStatus_UART_RxWatermarkTooLarge", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84ba720cefde05389830f35f6e6df6f6ac67", null ],
    [ "kStatus_UART_FlagCannotClearManually", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84ba5ee8e23fc9ab20cf366942751b895f54", null ],
    [ "kStatus_UART_Error", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84ba950972a9e2ebbaa13c92e8f5a51f785d", null ],
    [ "kStatus_UART_RxRingBufferOverrun", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84ba2e5b644b1e10c426af818bc78657e992", null ],
    [ "kStatus_UART_RxHardwareOverrun", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84bab6b1fd6c2deec25992449f5b12303a26", null ],
    [ "kStatus_UART_NoiseError", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84bae4ef4df9a5f756ccf1b4bf08292ec2fb", null ],
    [ "kStatus_UART_FramingError", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84baa7aa134f85df3d5863ca962ce1ea7ee0", null ],
    [ "kStatus_UART_ParityError", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84baea20b2588c38f259f1412aa7132c9ef8", null ],
    [ "kStatus_UART_BaudrateNotSupport", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84bae6cdb41e1b49958f57727cd47afd69b2", null ],
    [ "kStatus_UART_BreakDetect", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84ba43540408a2faf9ce9e8e8c940bddd456", null ],
    [ "kUART_SevenDataBits", "group__uart__driver.html#ggadc68b8fd9ded3990f84129df23fee798ab8c89dfed11b0628f58344705d4b0fb8", null ],
    [ "kUART_EightDataBits", "group__uart__driver.html#ggadc68b8fd9ded3990f84129df23fee798a2d77888a8dd82a66fb7bd86e51b4127c", null ],
    [ "kUART_ParityDisabled", "group__uart__driver.html#gga436e5a7bdb5f24decb5bfb0c87a83ff4a97e2feae6671a6de1126ebc2edf4606b", null ],
    [ "kUART_ParityEven", "group__uart__driver.html#gga436e5a7bdb5f24decb5bfb0c87a83ff4a9e68fe3aba46e045bee5433ed098bff0", null ],
    [ "kUART_ParityOdd", "group__uart__driver.html#gga436e5a7bdb5f24decb5bfb0c87a83ff4ae48c7fabc9babf1be626ebeb2627a54c", null ],
    [ "kUART_OneStopBit", "group__uart__driver.html#ggaca4f14d23735c6afefb76cbee18e1db6a5a8829a108d8a46abb097a36cde051a7", null ],
    [ "kUART_TwoStopBit", "group__uart__driver.html#ggaca4f14d23735c6afefb76cbee18e1db6a9704b3ae3ee851acf324eb357f75ab56", null ],
    [ "kUART_IdleFor4Frames", "group__uart__driver.html#ggac1d3d36674ef10ea596df09cd1ac4834a5b39a550a12fb82364e14867ba800df6", null ],
    [ "kUART_IdleFor8Frames", "group__uart__driver.html#ggac1d3d36674ef10ea596df09cd1ac4834ad1a880a7b8d05eabd494ad0a9154555d", null ],
    [ "kUART_IdleFor16Frames", "group__uart__driver.html#ggac1d3d36674ef10ea596df09cd1ac4834a2379458f47b103178be8e3265e02fa28", null ],
    [ "kUART_IdleFor32Frames", "group__uart__driver.html#ggac1d3d36674ef10ea596df09cd1ac4834a12f80ba050b8a679e22b92d5e4e163e7", null ],
    [ "kUART_RxCharReadyFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a309643dfba0c44efc0600c02af6eaebf", null ],
    [ "kUART_RxErrorFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a792f36da4b89b615ad2d20e05ccb4232", null ],
    [ "kUART_RxOverrunErrorFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a310a961508b63dfe3d8d996400ce410c", null ],
    [ "kUART_RxFrameErrorFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a088d4fcbbbe8a99aebe86debca4a97c2", null ],
    [ "kUART_RxBreakDetectFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8af76e33f2ae98819b0fdb938a96a3c7e9", null ],
    [ "kUART_RxParityErrorFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8aff287d5d8a910bd392c626f0b51a8ef0", null ],
    [ "kUART_ParityErrorFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a0c92973ab1d527115fa01934c62a053d", null ],
    [ "kUART_RtsStatusFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8ac7e88bad028598aab3b9821b9a2e0267", null ],
    [ "kUART_TxReadyFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a3913198655fd8ce2eb451d0550619d32", null ],
    [ "kUART_RtsDeltaFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8ab6a18a71d4711614848e0abfa114d48d", null ],
    [ "kUART_EscapeFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a3446413cf0ba110c3f25e869ec723253", null ],
    [ "kUART_FrameErrorFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a869aae50c5c1970a098d17c8ce7b844c", null ],
    [ "kUART_RxReadyFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a50a2cc679d220e394c538803af4e287e", null ],
    [ "kUART_AgingTimerFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a95a6f29cdead568e08951974a708a77f", null ],
    [ "kUART_DtrDeltaFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a58c55093c621cb30ff7db3dca0fb3fe9", null ],
    [ "kUART_RxDsFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8adab01f057c6ed194fa44d0efc64ae15c", null ],
    [ "kUART_tAirWakeFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a18f1130c93e0cb2033841dc9686129a3", null ],
    [ "kUART_AwakeFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8afec67475e7606d8612d8df8ba6273728", null ],
    [ "kUART_Rs485SlaveAddrMatchFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a49554d7b7783b495061c5cfc579250f8", null ],
    [ "kUART_AutoBaudFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a89cdd9c043992663c2072079684d1f33", null ],
    [ "kUART_TxEmptyFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a38300abd304436626e61b70f216f8865", null ],
    [ "kUART_DtrFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a257bc03110bc5ebf9b2fbb50c144b320", null ],
    [ "kUART_IdleFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8aab7d8fe2ab1cd29f7e27ff59fc6cd44e", null ],
    [ "kUART_AutoBaudCntStopFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8ad1ffb9b804eef7907a061b67672563ac", null ],
    [ "kUART_RiDeltaFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a2e0e3b65dd4ad1e0d9d4fc75802e6bd8", null ],
    [ "kUART_RiFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a989877e611df5363fb1b9f2f35a10379", null ],
    [ "kUART_IrFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a2d7ecd6806bd476eddb0c8a4f06f8409", null ],
    [ "kUART_WakeFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a8ca129e7898c036893bae13929525883", null ],
    [ "kUART_DcdDeltaFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8adf5283f5c932378cac93919e7d5d77d8", null ],
    [ "kUART_DcdFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a1c3d7335bce198659e94ae749044a565", null ],
    [ "kUART_RtsFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a683ac4d5b01bbfeea1282293cd089da0", null ],
    [ "kUART_TxCompleteFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8af23b48cba192fcc511857cee4fd7cd3f", null ],
    [ "kUART_BreakDetectFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8adb8b7904275137c75de5050adc1f2877", null ],
    [ "kUART_RxOverrunFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a93d3c56466b4656dcce08d9323d7afd8", null ],
    [ "kUART_RxDataReadyFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a5f68dab1ddbb31a54997e5e33534b7e0", null ],
    [ "UART_GetInstance", "group__uart__driver.html#gadeeb40cdc314638d4355ef906f1c408d", null ],
    [ "UART_SoftwareReset", "group__uart__driver.html#gada461a15fc0fd6fdbaaf35263da9af89", null ],
    [ "UART_Init", "group__uart__driver.html#gab5965a8e11f7e1d4d531141291fd5288", null ],
    [ "UART_Deinit", "group__uart__driver.html#ga3ff48bc211831be33e6fe5c50eb671a0", null ],
    [ "UART_GetDefaultConfig", "group__uart__driver.html#ga47c7c09e04a0497f4530d553e27d96c5", null ],
    [ "UART_SetBaudRate", "group__uart__driver.html#gab3ba5019c11f288cc4f545dd656b6284", null ],
    [ "UART_Enable", "group__uart__driver.html#gae1c2de08deac42b1fe8675bba9ece467", null ],
    [ "UART_SetIdleCondition", "group__uart__driver.html#ga55c076014a07717b8d8ed889800b833b", null ],
    [ "UART_Disable", "group__uart__driver.html#ga4b6fdc3af78f9d5e8a1f8f6a07ce124d", null ],
    [ "UART_GetStatusFlag", "group__uart__driver.html#ga5a6ca92e153c2a2c1323c5dc2fae6ab4", null ],
    [ "UART_ClearStatusFlag", "group__uart__driver.html#gaf547a539e6d7540010ef688e51bc2eeb", null ],
    [ "UART_EnableInterrupts", "group__uart__driver.html#ga49ecd761481a22956e3f46285038719c", null ],
    [ "UART_DisableInterrupts", "group__uart__driver.html#ga3f24b6b9b730046a9a81918f9abe7d99", null ],
    [ "UART_GetEnabledInterrupts", "group__uart__driver.html#ga79bc0b880286ec0dc0543606fc772912", null ],
    [ "UART_EnableTx", "group__uart__driver.html#gaf2ed68f3dd6ee8a272e9afd8ebd84f93", null ],
    [ "UART_EnableRx", "group__uart__driver.html#gaa503e36c8ce82f1042ce186b9863871f", null ],
    [ "UART_WriteByte", "group__uart__driver.html#ga371d2ceda535de3a74beba5a3465fab0", null ],
    [ "UART_ReadByte", "group__uart__driver.html#ga3728011ac7906f3e03bb677b0f9cf7b4", null ],
    [ "UART_WriteBlocking", "group__uart__driver.html#gad67794d80b7ee2d3292b41af6ff1e100", null ],
    [ "UART_ReadBlocking", "group__uart__driver.html#ga39d59e8a94f1af451a0db81888596639", null ],
    [ "UART_TransferCreateHandle", "group__uart__driver.html#ga63db308c32019b7dd6c0647d618e5247", null ],
    [ "UART_TransferStartRingBuffer", "group__uart__driver.html#ga223fba584bfabd599629d5ce92f929ac", null ],
    [ "UART_TransferStopRingBuffer", "group__uart__driver.html#ga0c0bc73df49cb31dff0e903630314f5b", null ],
    [ "UART_TransferGetRxRingBufferLength", "group__uart__driver.html#ga3921aa660977ca77dadf95fa35f1c3a9", null ],
    [ "UART_TransferSendNonBlocking", "group__uart__driver.html#gad89afd7db1656c5aef404bb285d0dc05", null ],
    [ "UART_TransferAbortSend", "group__uart__driver.html#gaa64f9f89d8286fd3ef0736a8c40be2c2", null ],
    [ "UART_TransferGetSendCount", "group__uart__driver.html#ga071727ba05b2937ef5ad641ca7faf9c7", null ],
    [ "UART_TransferReceiveNonBlocking", "group__uart__driver.html#gaf804acde5d73ce0a5bf54b06195e1218", null ],
    [ "UART_TransferAbortReceive", "group__uart__driver.html#gacc35671622b2401545cc55cc6ae572d4", null ],
    [ "UART_TransferGetReceiveCount", "group__uart__driver.html#ga05df10f570cdca4ac2dff63b069d254e", null ],
    [ "UART_TransferHandleIRQ", "group__uart__driver.html#gadb0c4f1e5b59db3aa2261df4f5ddb48d", null ],
    [ "UART_EnableTxDMA", "group__uart__driver.html#ga93a5d80d9f8ec9e61eb54db18efa5c63", null ],
    [ "UART_EnableRxDMA", "group__uart__driver.html#ga32e14856ac77e50800e733ba8ab9c448", null ],
    [ "UART_SetTxFifoWatermark", "group__uart__driver.html#ga5ed56b76143c42e6e712d1a4d6a1fbdd", null ],
    [ "UART_SetRxFifoWatermark", "group__uart__driver.html#ga9fc461e2d9a906a2b5aa1363ab06044c", null ],
    [ "UART_EnableAutoBaudRate", "group__uart__driver.html#gac88019d2b8abe60bd6ee8cf2c1e8dfb0", null ],
    [ "UART_IsAutoBaudRateComplete", "group__uart__driver.html#ga28850ab8c31bd095fde407992b937035", null ],
    [ "baudRate_Bps", "group__uart__driver.html#gacc123668836f3432c54ee6a2f6f318f1", null ],
    [ "parityMode", "group__uart__driver.html#ga1a3abcf4f0f5d0a3893df14f2991aa39", null ],
    [ "dataBitsCount", "group__uart__driver.html#gaa026642db643d8cae1a64869acd9baf5", null ],
    [ "stopBitCount", "group__uart__driver.html#gadf6e33c13910e9ec7c2688f83a462be0", null ],
    [ "txFifoWatermark", "group__uart__driver.html#ga5eb9ab81752080bc726b8d625d2b6b21", null ],
    [ "rxFifoWatermark", "group__uart__driver.html#ga1bb7b2f0f7df79977d33be264fb5163a", null ],
    [ "enableAutoBaudRate", "group__uart__driver.html#gac595435b68632c2dbaece764c54cd41d", null ],
    [ "enableTx", "group__uart__driver.html#ga91d575902455699a312c64b564133a8d", null ],
    [ "enableRx", "group__uart__driver.html#gaa045acd340fc86d70a497f49e0a95bdd", null ],
    [ "data", "group__uart__driver.html#gaf91f05b0f951836e3002f60f0575f369", null ],
    [ "dataSize", "group__uart__driver.html#ga21820f8294de0d75d863b72512a7c12f", null ],
    [ "txData", "group__uart__driver.html#ga046372eac11f58a16f519c0ee264ea9e", null ],
    [ "txDataSize", "group__uart__driver.html#ga1e67a92b463ad328646834ea0de4d70d", null ],
    [ "txDataSizeAll", "group__uart__driver.html#ga80361474eb03b3aa30d02bda82adce65", null ],
    [ "rxData", "group__uart__driver.html#ga5c87354702502998d3ccca9d9bfd3069", null ],
    [ "rxDataSize", "group__uart__driver.html#ga46bd84d885004806f89744ad79edd81e", null ],
    [ "rxDataSizeAll", "group__uart__driver.html#ga800a05d5ea3c6240daad46f466a8fea4", null ],
    [ "rxRingBuffer", "group__uart__driver.html#gafeba8b549facc329937046e734681963", null ],
    [ "rxRingBufferSize", "group__uart__driver.html#ga8d6afed4b64233c959a180b66686c14c", null ],
    [ "rxRingBufferHead", "group__uart__driver.html#ga85d061606b31401fb4a9d0e22e77056c", null ],
    [ "rxRingBufferTail", "group__uart__driver.html#ga9f4482059188bea2603b1c07cf9cc084", null ],
    [ "callback", "group__uart__driver.html#ga2ef9706e8203ba72fa1e04c48581fb0f", null ],
    [ "userData", "group__uart__driver.html#ga69ce1fdb7a2f60c0ecc94c4d1b2ed6ff", null ],
    [ "txState", "group__uart__driver.html#ga9fa8f119b6e0e3a7805fb25edafb1498", null ],
    [ "rxState", "group__uart__driver.html#ga5aa95f3d2cb81a8bb01a11ab2cf66234", null ]
];