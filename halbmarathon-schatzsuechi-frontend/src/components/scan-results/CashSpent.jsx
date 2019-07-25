import styled from "styled-components"
import React from "react"
import { BigTitle, SmallTitle } from "../Title"
import { randIndex } from "../../lib/random"

export const CashSpent = () => (
  <>
    <BigTitle>{randIndex(["Ka-Tsching!!"])}</BigTitle>
    <SmallTitle>Thanks for the purchase 💸</SmallTitle>
  </>
)
