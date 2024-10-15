import { createContext, useContext, useEffect, useState } from 'react'
import { refreshAccessToken } from '~/api/user.api'
import { getProfileFromLS } from '~/utils'

type AuthContextType = {
  isAuthenticated: boolean
  setIsAuthenticated: (value: boolean) => void
  loading: boolean
}

const defaultContext: AuthContextType = {
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  loading: true
}

const AuthContext = createContext(defaultContext)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const user = getProfileFromLS()

  useEffect(() => {
    if (Object.keys(user).length === 0) {
      setLoading(false)
      return
    }
    const fetchToken = async () => {
      try {
        const token = await refreshAccessToken()
        if (token) setIsAuthenticated(true)
      } catch (error) {
        console.log('Error refreshing token:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchToken()
  }, [])

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, loading }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}

export default AuthProvider
