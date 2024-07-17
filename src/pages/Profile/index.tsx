import './profile.scss'
import ProfileSidebar from './components/ProfileSidebar'
import ProfileContent from './components/ProfileContent'
const index = () => {
  return (
    <main className='profile'>
      <div className='container'>
        <div className='profile-container'>
          <div className='row gy-md-3'>
            <div className='col-3 col-xl-4 col-lg-5 col-md-12'>
              <ProfileSidebar />
            </div>
            <div className='col-9 col-xl-8 col-lg-7 col-md-12'>
              <ProfileContent />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default index
