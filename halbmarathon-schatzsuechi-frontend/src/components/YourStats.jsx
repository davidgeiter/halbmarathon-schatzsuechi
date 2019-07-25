import React, { useState, useEffect, Fragment } from "react"
import styled from "styled-components"
import Flickering from "../components/Flickering"
import { pluralize } from "../lib/grammar"

const StyledStats = styled.div``

export const YourStats = ({ stats }) => {
  const texts = [
    `You got ${stats.currentCurrency} ${pluralize(
      stats.currentCurrency,
      "coin",
    )} 🎩, `,
    `spent ${stats.totalSpent} in total 💸 `,
    `and found ${stats.totalCodesFound} ${(stats.totalCodesFound,
    "code")} so far!`,
  ]

  return (
    <StyledStats>
      {texts.map(t => (
        <p style={{ display: "inline" }}>
          <Flickering>{t}</Flickering>
        </p>
      ))}
      <p>
        🔥 <Flickering>Keep going!</Flickering> 🔥
      </p>
    </StyledStats>
  )
}
