import QrReader from "react-qr-scanner"
import React from "react"

const previewStyle = {
  height: 240,
  width: 320,
}

const parseCode = value => {
  try {
    const url = new URL(value)
    // return url && url.origin === window.location.origin
    return !!url
  } catch (_) {
    return false
  }
}

const QrCodeReader = ({ onValidUrl }) => (
  <QrReader
    delay={100}
    style={previewStyle}
    onError={console.error}
    onScan={value => {
      console.log(`Scanned: ${value}`)
      if (parseCode(value)) {
        onValidUrl(value)
      }
    }}
  />
)

export default QrCodeReader
