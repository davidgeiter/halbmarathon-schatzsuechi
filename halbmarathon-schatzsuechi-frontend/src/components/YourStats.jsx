import React, { useState, useEffect, Fragment } from "react"
import styled from "styled-components"
import Flickering from "../components/Flickering"

const StyledStats = styled.div`
  margin: 1rem;
`

export const YourStats = ({ stats }) => {
  const texts = [
    `You got ${stats.currentCurrency} coins,`,
    `spent ${stats.totalSpent} in total,`,
    `and found ${stats.totalCodesFound} codes so far!`,
  ]

  return (
    <StyledStats>
      {texts.map(t => (
        <p>
          <Flickering>{t}</Flickering>
        </p>
      ))}
    </StyledStats>
  )
}
