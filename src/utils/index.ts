import { User } from '~/types/auth.type'

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
