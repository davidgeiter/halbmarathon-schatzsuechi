import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 100% !important;
  }
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
  
  button {
    background-color: black;

    border-bottom-left-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
    border-top-left-radius: 0px !important;
    border-top-right-radius: 0px !important;
    
    margin: 0 !important;

    span {
      color: white;
    }
  }
  
  input {
    border-bottom-left-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
    border-top-left-radius: 0px !important;
    border-top-right-radius: 0px !important;
    
    border: 2px solid black !important;
    
    font-family: Cousine !important;
    font-weight: bold;
    color: black;
  }
`
