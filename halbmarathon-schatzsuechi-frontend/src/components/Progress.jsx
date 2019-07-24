import React from "react"
import styled from "styled-components"
import { colorizeCharArray, getRandomChars } from "../lib/random"

const ProgressContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`

class ProgressComponent extends React.Component {
  componentDidMount() {
    this.timer = setInterval(() => this.forceUpdate(), 100)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    const chars = getRandomChars(10)
    const colorizedChars = colorizeCharArray(chars)
    return (
      <ProgressContainer>
        <div>{colorizedChars}</div>
      </ProgressContainer>
    )
  }
}

export const Progress = styled(ProgressComponent)``
