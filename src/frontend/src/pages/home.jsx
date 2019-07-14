import React, { useState, useEffect, Fragment } from "react"
import { withUsername, withScannerOpened } from "../lib/state-hocs"
import QrCodeReader from "../components/QrCodeReader"
import { getStats } from "../lib/api"
import styled from "styled-components"
import { YourStats } from "../components/YourStats"
import { Progress } from "../components/Progress"
import { Button } from "semantic-ui-react"
import { compose } from "ramda"
import Layout from "../components/Layout"
import { randIndex } from "../lib/random"
import Flickering from "../components/Flickering"

const ScanButton = styled(Button).attrs({
  size: "huge",
  color: "black",
})`
  && {
    background-color: black;
    position: fixed;
    bottom: 2rem;
    transform: translateX(-50%);
    width: 80%;

    border-bottom-left-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
    border-top-left-radius: 0px !important;
    border-top-right-radius: 0px !important;

    span {
      color: white;
    }
  }
`

const Salutation = styled.h1`
  && {
    font-size: 3.5rem;
    padding-top: 8rem;
    margin-bottom: 0;
  }
`

const PageTitle = styled.h2`
  && {
    margin-top: 0;
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
    <Layout style={{ textAlign: "center" }}>
      <Salutation>
        <Flickering>{randIndex(["Hi", "Hola", "Ciao", "Salu"])}</Flickering>
      </Salutation>
      <PageTitle>
        <Flickering>{username}</Flickering>
      </PageTitle>
      <YourStats stats={stats} />
      <ScanButton onClick={() => toggleScanner(true)}>
        <Flickering>Scan a Code</Flickering>
      </ScanButton>
    </Layout>
  )
}

export default compose(
  withUsername,
  withScannerOpened,
)(Home)
