import React, { useState, useEffect } from "react"
import { apiHost } from "../config"
import { withUsername } from "../components/WithUsername"
import QrCodeReader from "../components/QrCodeReader"

export default withUsername(({ username }) => {
  const [currency, setCurrency] = useState(null)

  useEffect(() => {
    const fetchCurrency = async () => {
      const resp = await fetch(`${apiHost}/stats`).then(r => r.json())
      setCurrency(resp.currentCurrency)
    }
    fetchCurrency()
  }, [])

  return (
    <div>
      <h1>Hello! {username}</h1>
      <h2>wallet: {currency}</h2>
      <div>
        <QrCodeReader />
      </div>
    </div>
  )
})
