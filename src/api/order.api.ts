import { Address } from '~/types/address.type'
import { CartState } from '~/types/cart.type'
import { getStoredToken } from '~/utils'

const API_HOST = import.meta.env.VITE_API_HOST
// const headers = {
//   'Content-Type': 'application/json',
//   Authorization: `Bearer ${getStoredToken()}`
// }
export async function createOrderApi(order) {
  const API_URL = `${API_HOST}/api/v1/orders`
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getStoredToken()}`
    },
    body: JSON.stringify(order)
  })

  return response
}
