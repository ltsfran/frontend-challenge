import { fetchAjax } from '@lib/fetch'

export const getAllCharactersByQuery = async (query: string): Promise<any> => {
  try {
    const REST_API = process.env.REST_API ?? ''
    const response = await fetchAjax(`${REST_API}/api/items?q=${query}`, { method: 'GET' })
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
