import { GetServerSideProps, NextPage } from 'next'
import styled from 'styled-components'
import CharacterService from '@services/characters'
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

interface Origin {
  name: string
  url: string
}

interface Character {
  id: number
  name: string
  gender: string
  origin: Origin
  location: Origin
  image: string
  description: string
}

interface Props {
  characters: Character[]
}

const ListingPage: NextPage<Props> = ({ characters }) => (
  <Layout>
    <div>
      <Title>Characters</Title>
      { characters.length > 0
        ? <SubTitle>{characters.length} results found</SubTitle>
        : <SubTitle>No results found</SubTitle>}
      <CardGroup>
        {characters.map((item, index) => (
          <Card
            to={`/items/${item.id}`}
            key={index}
            index={index}
            imageUrl={item.image}
            title={item.name}
            subTitle={item.description} />
        ))}
      </CardGroup>
    </div>
  </Layout>
)

export const getServerSideProps: GetServerSideProps<any> = async (context) => {
  const { query } = context
  const searchQuery = query.search as string
  const {
    data: characters,
    error
  } = await CharacterService.getAllCharactersByQuery(searchQuery)

  if (error !== undefined) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      characters
    }
  }
}

export default ListingPage
