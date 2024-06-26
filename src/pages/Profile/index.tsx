import './profile.scss'
import ProfileSidebar from './components/ProfileSidebar'
import ProfileContent from './components/ProfileContent'
const index = () => {
  return (
    <main className='profile'>
      <div className='container'>
        <div className='profile-container'>
          <div className='search-bar d-none d-md-flex'>
            <input className='search-bar__input' id='' name='' placeholder='Search for item' type='text' />
            <button className='search-bar__submit'>
              <img alt='' className='search-bar__icon icon' src='./assets/icons/search.svg' />
            </button>
          </div>
        </div>
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
