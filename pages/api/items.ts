import { NextApiHandler } from 'next'
import { capitalizeFirstLetter } from '@utils'

interface Origin {
  name: string
  url: string
}

interface ResultDTO {
  id: number
  name: string
  status: string
  species: string
  type?: string
  gender: string
  origin: Origin
  location: Origin
  image: string
  episode: string[]
}

interface ResultModel {
  id: number
  name: string
  gender: string
  origin: Origin
  location: Origin
  image: string
  description: string
}

const hydrateData = (data: ResultDTO[]): ResultModel[] => {
  return data.map(item => ({
    id: item.id,
    name: item.name,
    gender: item.gender,
    origin: item.origin,
    location: item.location,
    image: item.image,
    description: capitalizeFirstLetter(`${item.status} - ${item.species}`)
  }))
}

const handler: NextApiHandler = async (req, res) => {
  const query = req.query
  const queryFilter = query.q as string
  const encodeQueryFilter = decodeURIComponent(queryFilter).split(' ').join('+')
  const limit = 4
  try {
    let data

    if (queryFilter === undefined || queryFilter === '') {
      const response = await fetch('https://rickandmortyapi.com/api/character')
      data = await response.json()
    } else {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${encodeQueryFilter}`)
      data = await response.json()
    }

    if (data.error !== undefined) {
      console.log('Rest API error: Could not fetch data from resource')
      return res.status(200).json({
        message: 'Could not fetch data from resource',
        data: []
      })
    }

    const results: ResultDTO[] = data.results
    const filterResults = results.filter((item, index) => index < limit)
    return res.status(200).json({
      message: 'Successful',
      data: hydrateData(filterResults)
    })
  } catch (error) {
    if (error instanceof Error) {
      console.log('Rest API error:', error.message)
    }

    return res.status(500).json({
      message: 'Could not fetch data from resource',
      data: []
    })
  }
}

export default handler
