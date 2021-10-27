import { BASE_URL } from './base-url'

export async function getAdmins () {
  try {
    const response = await fetch(`${BASE_URL}/users/admins`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
    const data = await response.json()
    if (response.status === 200 && data.length) {
      console.log('data', data)
      return { data, error: null }
    }

    return { data: null, error: 'There is no data' }
  } catch (error) {
    return { data: null, error: 'There was an error' }
  }
}

export async function login (email, password) {
  // const body = JSON.stringify({ email, password })
  try {
    const response = await fetch(`${BASE_URL}/login?email=${email}&password=${password}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
      // body,
    })
    const data = await response.json()
    if (response.status === 200 && data.token != null) {
      return { data, error: null }
    }
    return { data: null, error: 'User does not exist' }
  } catch (error) {
    return { data: null, error: 'There was an error in login' }
  }
}
