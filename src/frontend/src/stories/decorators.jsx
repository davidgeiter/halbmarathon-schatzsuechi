import React from "react"
import { GlobalStyles } from "../lib/globalStyles"

export const withGlobalStyles = storyFn => (
  <React.Fragment>
    <GlobalStyles />
    {storyFn()}
  </React.Fragment>
)
