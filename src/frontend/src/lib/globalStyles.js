import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body, h1, h2, h3, div, p, span {
    font-family: Cousine !important;
    font-weight: bold;
  }
  body {
      margin: 0;
  }
  h1, h2, h3 {
      text-transform: uppercase;
  }
  
  p {
    font-size: 1.5rem;
    line-height: 1rem !important;
  }
`
