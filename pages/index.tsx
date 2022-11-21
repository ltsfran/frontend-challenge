import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Layout from '@components/Layout'
import Search from '@components/Search'

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

const IndexPage: NextPage = () => {
  const router = useRouter()

  const handleEnter = (value: string): void => {
    if (value !== '') {
      const query = encodeURIComponent(value)
      void router.push(`/items?search=${query}`)
    }
  }

  return (
    <Layout>
      <Content>
        <ImageWrapper>
          <Image
            src="/logo.svg"
            alt="logo"
            width={160}
            height={160} />
        </ImageWrapper>
        <SearchBox>
          <Search onEnter={handleEnter} />
        </SearchBox>
      </Content>
    </Layout>
  )
}

export default IndexPage
