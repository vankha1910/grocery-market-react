import { Navigate } from 'react-router-dom'

const ProtectRoute = ({ children }: { children: JSX.Element }) => {
  const token = sessionStorage.getItem('token')
  if (!token) {
    return <Navigate to='/login' />
  }
  return children
}

export default ProtectRoute
