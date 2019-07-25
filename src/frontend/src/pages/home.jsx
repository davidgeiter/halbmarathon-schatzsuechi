import React, { useState, useEffect, Fragment } from "react"
import { withUsername, withScannerOpened } from "../lib/state-hocs"
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
import { withRouter } from "react-router-dom"

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

const Home = ({ username, scannerOpened, toggleScanner, match }) => {
  const [stats, setStats] = useState(null)

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
      <BigTitle>
        <Flickering>{randIndex(["Hi", "Hola", "Ciao", "Salu"])}</Flickering>
      </BigTitle>
      <SmallTitle>
        <Flickering>{username}</Flickering>
      </SmallTitle>
      <YourStats stats={stats} />
      <ScanButton onClick={() => toggleScanner(true)}>
        <Flickering>Scan a Code</Flickering>
      </ScanButton>
    </div>
  )
}

export default compose(
  withUsername,
  withScannerOpened,
  withRouter,
)(Home)
