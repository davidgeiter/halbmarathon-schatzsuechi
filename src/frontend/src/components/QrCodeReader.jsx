import QrReader from "react-qr-scanner"
import React from "react"
import styled from "styled-components"
import { Button } from "semantic-ui-react"
import { withScannerOpened } from "../lib/state-hocs"

const CloseButton = styled(Button).attrs({
  size: "massive",
  color: "black",
  circular: true,
  icon: "close",
})`
  position: fixed;
  bottom: 2rem;
  transform: translateX(-50%);
  width: 80%;
`

const Overlay = styled.div`
  background-color: black;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  top: 0;
  left: 0;
`

const previewStyle = {
  height: "100vw",
  width: "100vw",
  objectFit: "none",
}

const parseCode = value => {
  try {
    const url = new URL(value)
    return url && url.origin === window.location.origin
  } catch (_) {
    return false
  }
}

const QrCodeReader = ({ onValidUrl, toggleScanner }) => (
  <Overlay>
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
    <CloseButton onClick={() => toggleScanner(false)} />
  </Overlay>
)

export default withScannerOpened(QrCodeReader)
