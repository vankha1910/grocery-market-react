// import { Address } from '~/types/address.type'
// import { CartState } from '~/types/cart.type'
import { Order } from '~/types/order.type'
import { fetchWithAuth } from './user.api'

const API_HOST = import.meta.env.VITE_API_HOST
// const headers = {
//   'Content-Type': 'application/json',
//   Authorization: `Bearer ${getStoredToken()}`
// }

// {
//   "products": [
//       {
//           "_id": "66fc1a037b18d068d06ab2e5",
//           "quantity": 1,
//           "price": 25,
//           "size": "250g",
//           "grind": "whole bean",
//           "discount": 0,
//           "name": "Hawaiian Kona"
//       }
//   ],
//   "shippingAddress": {
//       "_id": "66a9ab7f0e2ce415945368d6",
//       "address": "1211 ABC",
//       "name": "Kelvin",
//       "phone": "Hallo"
//   },
//   "paymentMethod": "cod",
//   "totalPrice": 25
// }

export async function createOrderApi(order: Order) {
  const API_URL = `${API_HOST}/api/v1/orders`
  const response = await fetchWithAuth(API_URL, {
    method: 'POST',
    body: JSON.stringify(order)
  })

  return response
}
