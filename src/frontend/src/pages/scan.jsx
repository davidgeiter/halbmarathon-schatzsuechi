import React, { useState, useEffect } from "react"
import { sendCode } from "../lib/api"
import { withUsername } from "../components/WithUsername"
import { Link } from "react-router-dom"

const SuccessMessage = ({ result }) => (
  <span>
    Congrats! You topped your score by {result.difference}, now at
    {result.currentCurrency}
  </span>
)
const AlreadyScanned = () => <span>Already got that one!</span>
const InvalidCode = () => <span>Oi! Don't fuck the system!</span>
const Spent = () => <span>Thanks for the purchase! Enjoy</span>
const NotEnoughCash = () => (
  <span>Sorry honeyyy, but you can't afford that!</span>
)

const Result = ({ result }) => {
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
    return <span>Sending CODE...</span>
  } else {
    return (
      <div>
        <Result result={result} />
        <Link to="/">Scan another one</Link>
      </div>
    )
  }
})

export default Scan
