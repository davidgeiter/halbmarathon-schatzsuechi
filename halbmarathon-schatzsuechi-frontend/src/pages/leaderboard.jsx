import React, { useState, useEffect } from "react"
import { getLeaderboard } from "../lib/api"
import { Progress } from "../components/Progress"
import { BigTitle } from "../components/Title"
import styled from "styled-components"
import Flickering from "../components/Flickering"

const Price = styled.div`
  width: 30px;
`

const Entry = styled.div`
  display: flex;
  font-size: 1.5rem;
  align-items: center;
  line-height: 1.8rem;
`
const Username = styled.span`
  flex-grow: 1;
  text-align: left;
  overflow: hidden;
`

const Layout = styled.div`
  width: 500px;
  margin: 0 auto;
`

const Leaderboard = () => {
  const [scores, setScores] = useState(null)

  useEffect(() => {
    const makeRequest = async () => {
      const resp = await getLeaderboard()
      setScores(resp.scores)
    }
    makeRequest()
  }, [])

  if (!scores) {
    return <Progress />
  }

  return (
    <Layout>
      <BigTitle style={{ paddingTop: "1rem", marginBottom: "2rem" }}>
        <Flickering>Leaderboard</Flickering>
      </BigTitle>
      <Entry>
        <Username style={{ flexGrow: "1", textAlign: "left" }}>
          UNSERNAME:
        </Username>
        <span>SCANNED CODES:</span>
      </Entry>
      {scores.map(({ username, score }, i) => (
        <Entry>
          <Price>
            <Flickering>
              {i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : " "}
            </Flickering>
          </Price>
          <Username style={{ flexGrow: "1", textAlign: "left" }}>
            <Flickering>{username}</Flickering>
          </Username>
          <Flickering>{score.toString()}</Flickering>
        </Entry>
      ))}
    </Layout>
  )
}

export default Leaderboard
