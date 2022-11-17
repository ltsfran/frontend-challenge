import React from 'react'
import type { AppProps } from 'next/app'
import GlobalStyle from '@app/styles/global'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <React.Fragment>
    <GlobalStyle />
    <Component {...pageProps} />
  </React.Fragment>
)

export default App
