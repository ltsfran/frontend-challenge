import { NextPage } from 'next'
import Layout from '@components/Layout'

const ListingPage: NextPage = () => (
  <Layout>
    {Array.from({ length: 5 }).map((item, index) => (
      <div key={index} style={{ width: '100%', height: '300px' }}>ListingPage</div>
    ))}
  </Layout>
)

export default ListingPage
