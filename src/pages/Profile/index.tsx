import './profile.scss'
// import ProfileSidebar from './components/ProfileSidebar'
import ProfileContent from './components/ProfileContent'
import { useEffect } from 'react'
const Profile = () => {
  useEffect(() => {
    document.title = 'Profile'
  }, [])
  return <ProfileContent />
}

export default Profile
