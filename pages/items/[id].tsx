import { GetServerSideProps, NextPage } from 'next'
import CharacterService from '@services/characters'
import Layout from '@components/Layout'
import Detail from '@components/Detail'

interface Section {
  label: string
  text: string
}

interface Character {
  id: number
  name: string
  sections: Section[]
  image: string
  description: string
}

interface Props {
  character: Character
}

const ItemPage: NextPage<Props> = ({ character }) => (
  <Layout>
    <Detail
      imageUrl={character.image}
      title={character.name}
      subTitle={character.description}
      sections={character.sections}/>
  </Layout>
)

export const getServerSideProps: GetServerSideProps<any> = async (context) => {
  const { query } = context
  const idQuery = parseInt(query.id as string ?? '')
  const {
    data: character,
    error
  } = await CharacterService.getCharacterById(idQuery)

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
      character
    }
  }
}

export default ItemPage
