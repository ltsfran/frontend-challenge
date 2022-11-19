import { NextPage } from 'next'
import Layout from '@components/Layout'
import Detail from '@components/Detail'

const ItemPage: NextPage = () => (
  <Layout>
    <Detail
      imageUrl="https://rickandmortyapi.com/api/character/avatar/25.jpeg"
      title="Armothy"
      subTitle="Alive - Alien"
      sections={[
        { label: 'Gender', text: 'Male' },
        { label: 'Type', text: 'Self-aware arm' },
        { label: 'Last known location', text: 'unknown' },
        { label: 'First seed in', text: 'Auto Erotic Assimilation' }
      ]}/>
  </Layout>
)

export default ItemPage
