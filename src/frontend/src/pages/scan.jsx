import React, { useState, useEffect } from "react"
import { sendCode } from "../lib/api"
import { withUsername } from "../components/WithUsername"
import { Link } from "react-router-dom"

const SuccessMessage = result => (
  <span>Congrats! You got: {result.difference}</span>
)
const AlreadyScanned = () => <span>Already got that one!</span>
const InvalidCode = () => <span>Oi! Don't fuck the system!</span>
const Spent = () => <span>Thanks for the purchase! Enjoy</span>

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
    return <span>Sending the CODE!</span>
  } else {
    return <Link to="/">Scan another one</Link>
  }
})

export default Scan
