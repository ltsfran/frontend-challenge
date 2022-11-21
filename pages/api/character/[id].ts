import { NextApiHandler } from 'next'
import { capitalizeFirstLetter } from '@utils'

interface Section {
  label: string
  text: string
}

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
  image: string
  description: string
  sections: Section[]
}

const hydrateData = (data: ResultDTO): ResultModel => {
  return {
    id: data.id,
    name: data.name,
    sections: [
      { label: 'Gender', text: data.gender },
      { label: 'Last known location', text: capitalizeFirstLetter(data.location.name) },
      { label: 'First seen in', text: capitalizeFirstLetter(data.location.name) }
    ],
    image: data.image,
    description: capitalizeFirstLetter(`${data.status} - ${data.species}`)
  }
}

const handler: NextApiHandler = async (req, res) => {
  const query = req.query
  const id = query.id as string
  const queryId = parseInt(id)

  try {
    if (isNaN(queryId)) {
      return res.status(400).json({
        message: 'Could not fetch data from resource',
        data: {}
      })
    }

    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const data = await response.json()

    return res.status(200).json({
      message: 'Successful',
      data: hydrateData(data)
    })
  } catch (error) {
    if (error instanceof Error) {
      console.log('Rest API error:', error.message)
    }

    return res.status(500).json({
      message: 'Could not fetch data from resource',
      data: {}
    })
  }
}

export default handler
