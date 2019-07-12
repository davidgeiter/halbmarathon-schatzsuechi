import React, { useState, useEffect, Fragment } from "react"
import { withUsername } from "../components/WithUsername"
import QrCodeReader from "../components/QrCodeReader"
import { getStats } from "../lib/api"

export default withUsername(({ username }) => {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    const makeRequest = async () => {
      const resp = await getStats(username)
      setStats(resp)
    }
    makeRequest()
  }, [])

  return (
    <div>
      <h1>Hello {username}!</h1>
      {stats !== null && (
        <Fragment>
          <h2>Your Stats:</h2>
          <ul>
            <li>currentCurrency: {stats.currentCurrency}</li>
            <li>totalCurrency: {stats.totalCurrency}</li>
            <li>totalSpent: {stats.totalSpent}</li>
            <li>totalCodesFound: {stats.totalCodesFound}</li>
          </ul>
        </Fragment>
      )}

      <div>
        <QrCodeReader
          onValidUrl={url => {
            window.location.href = url
          }}
        />
      </div>
    </div>
  )
})
