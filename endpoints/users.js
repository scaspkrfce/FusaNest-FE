import { BASE_URL } from './base-url'

export async function getAdminDetails (id) {
  try {
    const response = await fetch(`${BASE_URL}/admins/info/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
    const data = await response.json()
    if (response.status === 200 && Object.keys(data).length) {
      console.log('admin Detail', data)
      return { data, error: null }
    }

    return { data: null, error: 'There is no data' }
  } catch (error) {
    return { data: null, error: 'There was an error' }
  }
}

export async function getAdmins () {
  try {
    const response = await fetch(`${BASE_URL}/admins/info`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
    const data = await response.json()
    if (response.status === 200 && data.length) {
      console.log('admins', data)
      return { data, error: null }
    }

    return { data: null, error: 'There is no data' }
  } catch (error) {
    return { data: null, error: 'There was an error' }
  }
}

export async function login (email, password) {
  const uriPassword = encodeURIComponent(password)
  try {
    const response = await fetch(`${BASE_URL}/login?email=${email}&password=${uriPassword}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
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
