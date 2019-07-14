import React, { useState, useEffect, Fragment } from "react"
import { withUsername, withScannerOpened } from "../lib/state-hocs"
import QrCodeReader from "../components/QrCodeReader"
import { getStats } from "../lib/api"
import styled from "styled-components"
import { YourStats } from "../components/YourStats"
import { Progress } from "../components/Progress"
import { Button } from "semantic-ui-react"
import { compose } from "ramda"

const ScanButton = styled(Button).attrs({ size: "huge", color: "black" })`
  position: fixed;
  bottom: 2rem;
  transform: translateX(-50%);
  width: 80%;
`

const PageTitle = styled.h1`
  && {
    width: 100%;
    text-align: center;
    padding-top: 8rem;
    margin-bottom: 4rem;
  }
`

const Home = ({ username, scannerOpened, toggleScanner }) => {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    const makeRequest = async () => {
      const resp = await getStats(username)
      setStats(resp)
    }
    makeRequest()
  }, [])

  return !stats ? (
    <Progress />
  ) : (
    <div style={{ textAlign: "center" }}>
      <PageTitle>Hi {username}!</PageTitle>
      <YourStats stats={stats} />
      <ScanButton onClick={() => toggleScanner(true)}>Scan a Code</ScanButton>

      {scannerOpened && (
        <div>
          <QrCodeReader
            onValidUrl={url => {
              window.location.href = url
            }}
          />
        </div>
      )}
    </div>
  )
}

export default compose(
  withUsername,
  withScannerOpened,
)(Home)
