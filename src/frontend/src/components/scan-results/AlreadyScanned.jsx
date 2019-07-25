import styled from "styled-components"
import React from "react"
import { BigTitle, SmallTitle } from "../Title"
import { randIndex } from "../../lib/random"

const AlreadyScannedBase = () => (
  <div>
    <BigTitle>{randIndex(["Sorry!", "Nup!", "Neee!", "Reeee!"])}</BigTitle>
    <SmallTitle>You already got that one 😩</SmallTitle>
  </div>
)

export const AlreadyScanned = styled(AlreadyScannedBase)`
  text-align: center;
`
