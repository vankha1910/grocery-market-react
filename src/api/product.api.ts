import { getStoredToken } from '~/utils'

const API_HOST = import.meta.env.VITE_API_HOST
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${getStoredToken()}`
}
export async function getTopRatedProduct() {
  const API_URL = `${API_HOST}/api/v1/products/top-rated-product`
  const response = await fetch(API_URL, {
    method: 'GET',
    headers
  })
  const data = await response.json()
  return data
}

export async function getProductDetail(productId: string) {
  const API_URL = `${API_HOST}/api/v1/products/${productId}`
  const response = await fetch(API_URL, {
    method: 'GET',
    headers
  })
  const data = await response.json()
  return data
}

export async function getListProduct(params) {
  const API_URL = `${API_HOST}/api/v1/products?${params}`
  const response = await fetch(API_URL, {
    method: 'GET',
    headers
  })
  const data = await response.json()
  return data
}
