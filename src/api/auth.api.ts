import { fetchWithAuth } from './user.api'

const API_HOST = import.meta.env.VITE_API_HOST

export async function signUpApi(email: string, password: string, confirmPassword: string) {
  const API_URL = `${API_HOST}/api/v1/users/signup`
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password, passwordConfirm: confirmPassword })
  })

  return response
}

export async function signInApi(email: string, password: string) {
  const API_URL = `${API_HOST}/api/v1/users/login`
  const response = await fetch(API_URL, {
    method: 'POST',
    credentials: 'include',

    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  return response
}

export async function logoutApi() {
  const API_URL = `${API_HOST}/api/v1/users/logout`
  const response = await fetchWithAuth(API_URL, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response
}

export async function changePasswordApi(currentPassword: string, newPassword: string) {
  const API_URL = `${API_HOST}/api/v1/users/change-password`
  const response = await fetchWithAuth(API_URL, {
    method: 'PATCH',
    body: JSON.stringify({ currentPassword, newPassword })
  })
  return response
}

export async function checkLoginApi() {
  const API_URL = `${API_HOST}/api/v1/users/check-login`
  const response = await fetchWithAuth(API_URL, {
    method: 'GET'
  })
  return response
}
