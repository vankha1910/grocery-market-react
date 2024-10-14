import { Navigate } from 'react-router-dom'
import { useAuth } from '~/contexts/AuthContext'

const ProtectRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth()
  if (!isAuthenticated) {
    return <Navigate to='/login' />
  }
  return children
}

export default ProtectRoute
