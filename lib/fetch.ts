export const fetchAjax = async (...args: [RequestInfo, RequestInit]): Promise<Response> => {
  const [resource, config] = args

  config.headers = {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }

  const response = await fetch(resource, config)

  if (!response.ok) {
    console.error('Could not fetch the data for that resource')
  }

  return response
}
