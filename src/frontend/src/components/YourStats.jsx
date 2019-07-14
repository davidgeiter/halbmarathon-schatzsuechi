import React, { useState, useEffect, Fragment } from "react"
import styled from "styled-components"

const StyledStats = styled.div`
  margin: 1rem;
`

export const YourStats = ({ stats }) => {
  return (
    <StyledStats>
      <p>You got {stats.currentCurrency} coins,</p>
      <p>spent {stats.totalSpent} in total,</p>
      <p>and found {stats.totalCodesFound} so far!</p>
    </StyledStats>
  )
}
