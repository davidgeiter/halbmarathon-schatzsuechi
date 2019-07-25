import styled from "styled-components"
import React from "react"
import { BigTitle, SmallTitle } from "../Title"
import { randIndex } from "../../lib/random"

export const InvalidCode = () => (
  <>
    <BigTitle>{randIndex(["Heppa!!", "Nuuup!", "Dang!"])}</BigTitle>
    <SmallTitle>Don't try to fuck the System! 💩</SmallTitle>
  </>
)
