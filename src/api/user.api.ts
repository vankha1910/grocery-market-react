import { Address } from '~/types/address.type'
import { getStoredToken, storedToken } from '~/utils'
import supabase from './supabase'
// import { toast } from 'react-toastify'
// import { Navigate } from 'react-router-dom'

const supabaseUrl = import.meta.env.VITE_SUPABASEURL
const API_HOST = import.meta.env.VITE_API_HOST

export async function refreshAccessToken() {
  // http://localhost:3001/api/v1/users/login
  const API_URL = `${API_HOST}/api/v1/users/refresh-token`
  const response = await fetch(API_URL, {
    method: 'POST',
    credentials: 'include'
  })
  if (response.ok) {
    const data = await response.json()
    storedToken(data.token)
    return data.token
  } else {
    throw new Error('Failed to refresh access token')
  }
}

export async function fetchWithAuth(url: string, options: RequestInit) {
  const accessToken = getStoredToken()
  const defaultHeader = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`
  }
  const fetchOptions = {
    ...options,
    headers: {
      ...defaultHeader,
      ...options.headers
    }
  }
  let response = await fetch(url, fetchOptions)

  if (response.status === 401 || response.status === 403) {
    try {
      const newAccessToken = await refreshAccessToken()
      fetchOptions.headers.Authorization = `Bearer ${newAccessToken}`
      response = await fetch(url, fetchOptions)
    } catch (err) {
      throw new Error('Failed to refresh access token')
    }
  }
  return response
}

export async function createAddressApi(address: Omit<Address, '_id'>) {
  try {
    const API_URL = `${API_HOST}/api/v1/address`
    const response = await fetchWithAuth(API_URL, {
      method: 'POST',
      body: JSON.stringify(address)
    })

    return response
  } catch (error) {
    console.log(error)
    throw error
  }
}

export async function deleteAddressApi(id: string) {
  try {
    const API_URL = `${API_HOST}/api/v1/address/${id}`
    const response = await fetchWithAuth(API_URL, {
      method: 'DELETE'
    })
    return response
  } catch (error) {
    console.log(error)
    throw error
  }
}

export async function getMyOrderApi(params?: string) {
  const API_URL = `${API_HOST}/api/v1/orders/my-orders?${params}`
  const response = await fetchWithAuth(API_URL, {
    method: 'GET'
  })

  const data = await response.json()
  return data
}

export async function updateAvatarApi(avatar: File) {
  const fileName = `avatar--${Math.random()}`
  const { error: storageError } = await supabase.storage.from('avatars').upload(fileName, avatar)
  if (storageError) throw new Error(storageError.message)

  const API_URL = `${API_HOST}/api/v1/users/update-avatar`
  const response = await fetchWithAuth(API_URL, {
    method: 'PATCH',
    body: JSON.stringify({ avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}` })
  })
  const data = await response.json()
  return data
}

export async function updateUserInfoApi(userInfo: { name: string; phoneNumber: string; address: string }) {
  const API_URL = `${API_HOST}/api/v1/users/update-user`
  const response = await fetchWithAuth(API_URL, {
    method: 'PATCH',
    body: JSON.stringify(userInfo)
  })
  const data = await response.json()
  return data
}
