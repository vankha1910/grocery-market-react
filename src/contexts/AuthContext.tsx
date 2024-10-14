import { createContext, useContext, useEffect, useState } from 'react'
import { refreshAccessToken } from '~/api/user.api'
import { getProfileFromLS } from '~/utils'

type AuthContextType = {
  isAuthenticated: boolean
  setIsAuthenticated: (value: boolean) => void
}

const defaultContext: AuthContextType = {
  isAuthenticated: false,
  setIsAuthenticated: () => {}
}

const AuthContext = createContext(defaultContext)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const user = getProfileFromLS()

  useEffect(() => {
    if (Object.keys(user).length === 0) return
    const fetchToken = async () => {
      const token = await refreshAccessToken()
      console.log(token)
      if (token) setIsAuthenticated(true)
    }
    fetchToken()
  }, [])

  return <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}

export default AuthProvider
