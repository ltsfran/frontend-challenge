import Head from 'next/head'
import styled from 'styled-components'
import { useFullScreenHeight } from '@hooks'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  position: relative;
  background-color: #FFFFFF;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    background-color: rgba(0,0,0,0);
    width: 1rem;
    height: 1rem;
    z-index: 999999;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(0,0,0,0);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0);
    border-radius: 1rem;
    border: 0px solid #FFFFFF;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: #A0A0A5;
    border: 4px solid #FFFFFF;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #A0A0A5;
    border: 4px solid #F4F4F4;
  }

  @media (min-width: 600px) {
    max-width: 460px;
    box-shadow: 0 10px 25px 0 rgb(0 0 0 / 8%);
    border-radius: 0.75rem;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  @media(min-width: 600px) and (min-height: 700px) {
    max-height: 700px;
  }

  @media(min-width: 600px) and (min-height: 800px) {
    max-height: 700px;
  }
`

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
`

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  useFullScreenHeight()

  return (
    <Wrapper>
      <Head>
        <title>Frontend Challenge</title>
        <meta name="description" content="Frontend Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Content>
        <Main>
          {children}
        </Main>
      </Content>
    </Wrapper>
  )
}

export default Layout
