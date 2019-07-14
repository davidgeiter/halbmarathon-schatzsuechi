import React from "react"
import styled from "styled-components"
import random from "random"

const ProgressContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`

const isRed = random.bernoulli(0.1)
const getRandList = (n, [min, max]) => {
  const result = new Set()
  while (result.size < n) {
    const next = random.int(min, max)
    if (!result.has(next)) result.add(next)
  }
  return [...result]
}
const getColor = () => (isRed() ? "red" : "black")

const charRange = [32, 126]

class ProgressComponent extends React.Component {
  componentDidMount() {
    this.timer = setInterval(() => this.forceUpdate(), 100)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    const chars = getRandList(10, charRange).map(c => (
      <span style={{ color: getColor() }}>{String.fromCharCode(c)}</span>
    ))
    return (
      <ProgressContainer>
        <div>..{chars}..</div>
      </ProgressContainer>
    )
  }
}

export const Progress = styled(ProgressComponent)``
