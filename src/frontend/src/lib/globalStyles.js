import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body, h1, h2, h3, div, p, span, button {
    font-family: Cousine !important;
    font-weight: bold;
    color: black;
  }
  body {
      margin: 0;
  }
  h1, h2, h3, button {
      text-transform: uppercase !important;
  }
  
  p {
    margin: 0 !important;
    font-size: 1.5rem;
    line-height: 2.5rem !important;
  }
`
