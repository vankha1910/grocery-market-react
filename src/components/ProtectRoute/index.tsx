import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '~/contexts/AuthContext'
import FullPageSpin from '../FullPageSpin'

const ProtectRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, loading } = useAuth()
  const location = useLocation()
  if (loading) {
    return <FullPageSpin isSpinning={loading} />
  }
  if (!isAuthenticated) {
    return <Navigate to='/login' state={{ from: location }} replace />
  }
  return children
}

export default ProtectRoute
