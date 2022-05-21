import { BASE_URL } from './base-url'

export async function getCategories () {
  try {
    const response = await fetch(`${BASE_URL}/categories`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
    const data = await response.json()
    if (response.status === 200 && data.length) {
      console.log('categories', data)
      return { data, error: null }
    }

    return { data: null, error: 'There is no data' }
  } catch (error) {
    return { data: null, error: 'There was an error' }
  }
}

export async function getProjectsByCategory (name) {
  try {
    const response = await fetch(`${BASE_URL}${name}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
    const data = await response.json()
    if (response.status === 200 && data.length) {
      console.log('projects by category', data)
      return { data, error: null }
    }

    return { data: null, error: 'There is no data' }
  } catch (error) {
    return { data: null, error: 'There was an error' }
  }
}
