import { BASE_URL } from './base-url'

export async function getProjects () {
  try {
    const response = await fetch(`${BASE_URL}/projects`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
    const data = await response.json()
    if (response.status === 200 && data.length) {
      console.log('projects', data)
      return { data, error: null }
    }

    return { data: null, error: 'There is no data' }
  } catch (error) {
    return { data: null, error: 'There was an error' }
  }
}
