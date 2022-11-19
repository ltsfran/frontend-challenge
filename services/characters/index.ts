import { fetchAjax } from '@lib/fetch'

const CharacterService = {
  async getCharactersByQuery (query: string) {
    try {
      const response = await fetchAjax(`http://localhost:3000/api/items?q=${query}`, { method: 'GET' })
      const data = await response.json()

      return {
        data: data.data,
        error: undefined
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Character service error::', error.message)
      }
      return { data: undefined, error: 'Internal server error' }
    }
  }
}

export default CharacterService
