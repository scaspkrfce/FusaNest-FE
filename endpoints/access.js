import { BASE_URL } from './base-url'
export async function sendSecurityCode (email) {
  try {
    const response = await fetch(`${BASE_URL}/access?email=${email}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
    const data = await response.json()
    if (response.status === 200 && data) {
      return { data, error: null }
    }
    return { data: null, error: 'account with this email does not exist' }
  } catch (error) {
    return { data: null, error: 'There was an error in sending code' }
  }
}
export async function restorePassword (email, code, newPassword, confirmPassword) {
  const uriNewPassword = encodeURIComponent(newPassword)
  const uriConfirmPassword = encodeURIComponent(confirmPassword)
  try {
    const response = await fetch(`${BASE_URL}/access/restore?email=${email}&code=${code}&newPassword=${uriNewPassword}&confirmPassword=${uriConfirmPassword}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
    const data = await response.json()
    if (response.status === 200 && data) {
      return { data, error: null }
    }
    return { data: null, error: 'invalid data entered' }
  } catch (error) {
    return { data: null, error: 'There was an error changing the password' }
  }
}
