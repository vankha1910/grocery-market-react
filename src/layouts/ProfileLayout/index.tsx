import ProfileSidebar from '~/pages/Profile/components/ProfileSidebar'
import { Outlet } from 'react-router-dom'
import './profileLayout.scss'
const index = () => {
  return (
    <main className='profile'>
      <div className='container'>
        <div className='profile-container'>
          <ProfileSidebar />
          <Outlet />
        </div>
      </div>
    </main>
  )
}

export default index
