import { Address } from '~/types/address.type'
import { getStoredToken } from '~/utils'
import supabase from './supabase'

const supabaseUrl = import.meta.env.VITE_SUPABASEURL
const API_HOST = import.meta.env.VITE_API_HOST

export async function createAddressApi(address: Omit<Address, '_id'>) {
  try {
    const API_URL = `${API_HOST}/api/v1/address`
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getStoredToken()}`
      },
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
    const response = await fetch(API_URL, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getStoredToken()}`
      }
    })
    return response
  } catch (error) {
    console.log(error)
    throw error
  }
}

export async function getMyOrderApi(params?: string) {
  const API_URL = `${API_HOST}/api/v1/orders/my-orders?${params}`
  const response = await fetch(API_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getStoredToken()}`
    }
  })
  const data = await response.json()
  return data
}

export async function updateAvatarApi(avatar: File) {
  const fileName = `avatar--${Math.random()}`
  const { error: storageError } = await supabase.storage.from('avatars').upload(fileName, avatar)
  if (storageError) throw new Error(storageError.message)

  const API_URL = `${API_HOST}/api/v1/users/update-avatar`
  const response = await fetch(API_URL, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getStoredToken()}`
    },
    body: JSON.stringify({ avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}` })
  })
  const data = await response.json()
  return data
}
