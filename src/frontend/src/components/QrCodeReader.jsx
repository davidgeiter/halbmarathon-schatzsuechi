import QrReader from "react-qr-scanner"
import React from "react"

const previewStyle = {
  height: 240,
  width: 320,
}

const QrCodeReader = () => (
  <QrReader
    delay={100}
    style={previewStyle}
    onError={console.error}
    onScan={console.log}
  />
)

export default QrCodeReader
