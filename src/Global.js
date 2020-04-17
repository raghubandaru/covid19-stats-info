import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

const Global = createGlobalStyle`
  ${normalize()}
  *, 
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    color: #102843;
    font-size: 62.5%;
    line-height: 1.4;
  }
  body {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    background: #f0f4f8;
  }
  h1 {
    font-size: 5rem;
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 2rem;
    line-height: 1.1;
  }
  p {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
`

export default Global
