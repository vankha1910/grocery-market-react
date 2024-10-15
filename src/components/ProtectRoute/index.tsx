import { Navigate } from 'react-router-dom'
import { useAuth } from '~/contexts/AuthContext'
import FullPageSpin from '../FullPageSpin'

const ProtectRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, loading } = useAuth()

  if (loading) {
    return <FullPageSpin isSpinning={loading} />
  }
  if (!isAuthenticated) {
    return <Navigate to='/login' />
  }
  return children
}

export default ProtectRoute
