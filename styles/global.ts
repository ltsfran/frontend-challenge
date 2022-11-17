import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  html, body {
    width: 100%;
    font-size: 16px;
  }
`

export default GlobalStyle
