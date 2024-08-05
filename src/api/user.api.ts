import { Address } from '~/types/address.type'
import { getStoredToken } from '~/utils'

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
