import React, { useEffect } from "react"
import { sendCode } from "../lib/api"
import { withUsername, withScanResult } from "../lib/state-hocs"
import { Redirect } from "react-router-dom"
import { compose } from "ramda"
import { Progress } from "../components/Progress"

const Scan = ({ match, username, setScanResult, scanResult }) => {
  useEffect(() => {
    const makeRequest = async () => {
      const result = await sendCode(match.params.guid, username)

      setScanResult(result)
    }

    makeRequest()
  }, [])

  if (scanResult === null) {
    return <Progress />
  } else {
    return <Redirect to="/" />
  }
}

export default compose(
  withScanResult,
  withUsername,
)(Scan)
