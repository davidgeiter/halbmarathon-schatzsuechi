import React, { useState, useEffect, Fragment } from "react"
import {
  withUsername,
  withScannerOpened,
  withScanResult,
} from "../lib/state-hocs"
import QrCodeReader from "../components/QrCodeReader"
import { getStats } from "../lib/api"
import styled from "styled-components"
import { YourStats } from "../components/YourStats"
import { Progress } from "../components/Progress"
import { Button } from "semantic-ui-react"
import { compose } from "ramda"
import { randIndex } from "../lib/random"
import Flickering from "../components/Flickering"
import { BigTitle, SmallTitle } from "../components/Title"
import { ResultOverlay } from "../components/scan-results"

const WelcomeText = () => {
  const texts = [
    "Scan codes 📳, ",
    "collect coins 💰 ",
    "and trade them for some special goodies ",
    "at your local bar! 🍼",
  ]
  return (
    <div>
      {texts.map(t => (
        <p style={{ display: "inline" }}>
          <Flickering>{t}</Flickering>
        </p>
      ))}
    </div>
  )
}

const ScanButton = styled(Button).attrs({
  size: "massive",
  color: "black",
})`
  && {
    width: 100%;
    position: fixed;
    bottom: 0rem;
    transform: translateX(-50%);
  }
`

const Credits = styled.p`
  position: fixed;
  bottom: 5rem;
  font-size: 0.8rem;
  text-align: center;
  width: 90vw;
`

const Home = ({
  username,
  scannerOpened,
  toggleScanner,
  scanResult,
  setScanResult,
}) => {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    if (scanResult) {
      setTimeout(() => setScanResult(null), 5000)
    }
  }, [])

  useEffect(() => {
    const makeRequest = async () => {
      const resp = await getStats(username)
      setStats(resp)
    }
    makeRequest()
  }, [])

  if (!stats) {
    return <Progress />
  }

  return scannerOpened ? (
    <QrCodeReader
      onValidUrl={url => {
        window.location.href = url
      }}
    />
  ) : (
    <div>
      <BigTitle style={{ paddingTop: "2rem" }}>
        <Flickering>{randIndex(["Hi", "Hola", "Ciao", "Salu"])}</Flickering>
      </BigTitle>
      <SmallTitle>
        <Flickering>{username}</Flickering>
      </SmallTitle>
      {stats.totalCodesFound === 0 ? (
        <WelcomeText />
      ) : (
        <YourStats stats={stats} />
      )}
      <ScanButton onClick={() => toggleScanner(true)}>
        <Flickering>Scan a Code</Flickering>
      </ScanButton>
      <Credits>spacebrothers</Credits>
      {scanResult && (
        <ResultOverlay
          status={scanResult.status}
          difference={scanResult.difference}
          onClose={() => setScanResult(null)}
        />
      )}
    </div>
  )
}

export default compose(
  withUsername,
  withScannerOpened,
  withScanResult,
)(Home)
