import React, { useState, useEffect } from "react"
import { sendCode } from "../lib/api"
import { withUsername } from "../lib/state-hocs"
import { Link, Redirect } from "react-router-dom"
import { Progress } from "../components/Progress"
import { AlreadyScanned } from "../components/scan-results/AlreadyScanned"
import styled from "styled-components"
import qs from "query-string"

export const SuccessMessage = ({ result }) => (
  <span>
    Congrats! You topped your score by {result.difference}, now at
    {result.currentCurrency}
  </span>
)

export const InvalidCode = () => <span>Oi! Don't fuck the system!</span>
export const Spent = () => <span>Thanks for the purchase! Enjoy</span>
export const NotEnoughCash = () => (
  <span>Sorry honeyyy, but you can't afford that!</span>
)

const getRedirectType = result => {
  const { status, difference } = result

  switch (status) {
    case "SUCCESS":
      return difference > 0 ? <SuccessMessage result={result} /> : <Spent />
    case "ALREADY_SCANNED":
      return <AlreadyScanned />
    case "INVALID_CODE":
      return <InvalidCode />
    case "NOT_ENOUGH_CASH":
      return <NotEnoughCash />
    default:
      return <span>Invalid status from server: {status}</span>
  }
}

const Scan = withUsername(({ match, username }) => {
  const [result, setResult] = useState(null)
  useEffect(() => {
    const makeRequest = async () => {
      const resp = await sendCode(match.params.guid, username)

      setResult(resp)
    }

    makeRequest()
  }, [])

  if (result === null) {
    return <Progress />
  } else {
    const { status, difference } = result
    const url = `/?${qs.stringify({ status, difference })}`

    return <Redirect to={url} />
  }
})

export default Scan
