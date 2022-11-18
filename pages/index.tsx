import { NextPage } from 'next'
import Image from 'next/image'
import styled from 'styled-components'
import Layout from '@components/Layout'
import Search from '@components/Search'

const Box = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
`

const Content = styled.div`
  position: absolute;
  transform: translateY(50%);
  width: 100%;
`

const ImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  justify-content: center;
  margin-bottom: 3rem;
`

const SearchBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`

const IndexPage: NextPage = () => (
  <Layout>
    <Box>
      <Content>
        <ImageWrapper>
          <Image src="/logo.svg" alt="logo" width={160} height={160} />
        </ImageWrapper>
        <SearchBox>
          <Search onEnter={(value) => console.log(value, 'value')} />
        </SearchBox>
      </Content>
    </Box>
  </Layout>
)

export default IndexPage
