import { NextPage } from 'next'
import styled from 'styled-components'
import Layout from '@components/Layout'
import Card from '@components/Card'

const Title = styled.h1`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
`

const SubTitle = styled.h3`
  width: 100%;
  font-weight: normal;
  margin-bottom: 1rem;
  font-size: 1.25rem;
`

const CardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1.5rem;
  padding: 1rem 0;
  box-sizing: border-box;
`

const ListingPage: NextPage = () => (
  <Layout>
    <Title>Characters</Title>
    <SubTitle>4 results found</SubTitle>
    <CardGroup>
      {Array.from({ length: 4 }).map((item, index) => (
        <Card
          key={index}
          index={index}
          imageUrl="https://rickandmortyapi.com/api/character/avatar/25.jpeg"
          title="Summer Smith"
          subTitle="Alive - Human" />
      ))}
    </CardGroup>
  </Layout>
)

export default ListingPage
