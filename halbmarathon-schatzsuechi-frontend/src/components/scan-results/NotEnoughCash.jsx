import styled from "styled-components"
import React from "react"
import { BigTitle, SmallTitle } from "../Title"
import { randIndex } from "../../lib/random"

export const NotEnoughCash = () => (
  <>
    <BigTitle>{randIndex(["Sorry Honey!"])}</BigTitle>
    <SmallTitle>You've not got the cash for that 💸</SmallTitle>
  </>
)
