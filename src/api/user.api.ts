import { Address } from '~/types/address.type'
import { getStoredToken } from '~/utils'
import supabase from './supabase'

const supabaseUrl = import.meta.env.VITE_SUPABASEURL
const API_HOST = import.meta.env.VITE_API_HOST
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${getStoredToken()}`
}
export async function createAddressApi(address: Omit<Address, '_id'>) {
  const API_URL = `${API_HOST}/api/v1/address`
  const response = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify(address)
  })

  return response
}

export async function getMyOrderApi() {
  const API_URL = `${API_HOST}/api/v1/orders/my-orders`
  const response = await fetch(API_URL, {
    method: 'GET',
    headers
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
    headers,
    body: JSON.stringify({ avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}` })
  })
  const data = await response.json()
  return data
}
