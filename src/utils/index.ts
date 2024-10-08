import queryString from 'query-string'
import { User } from '~/types/auth.type'
import { ProductParams } from '~/types/product.type'

export const setProfileToLS = (user: User) => {
  localStorage.setItem('user', JSON.stringify(user))
}
export const getProfileFromLS = () => {
  // return localStorage.getItem('user')
  return JSON.parse(localStorage.getItem('user') || '{}')
}
export const storedToken = (token: string) => {
  sessionStorage.setItem('token', token)
}

export const getStoredToken = () => {
  return sessionStorage.getItem('token')
}

export const buildQueryParams = (params: ProductParams) => {
  const filteredParams = Object.fromEntries(Object.entries(params).filter(([_, value]) => value !== ''))
  return queryString.stringify(filteredParams)
}

export const parseParams = (params: string) => {
  return queryString.parse(params)
}
