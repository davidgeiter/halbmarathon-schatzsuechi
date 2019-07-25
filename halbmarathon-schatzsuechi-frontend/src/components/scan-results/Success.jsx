import styled from "styled-components"
import React from "react"
import { BigTitle, SmallTitle } from "../Title"
import { randIndex } from "../../lib/random"

export const Success = ({ difference }) => (
  <>
    <BigTitle>{randIndex(["Congrats!", "Noice!", "Oi!"])}</BigTitle>
    <SmallTitle>You topped your score by {difference}! 🤑</SmallTitle>
  </>
)
