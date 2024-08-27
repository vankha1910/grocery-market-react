import React from 'react'
import ProfileSidebar from '~/pages/Profile/components/ProfileSidebar'
import { Outlet } from 'react-router-dom'
const index = () => {
  return (
    <main className='profile'>
      <div className='container'>
        <div className='profile-container'>
          <div
            style={{
              display: 'flex',
              gap: '10px'
            }}
            className='gy-md-3'
          >
            <ProfileSidebar />
            <Outlet />

            {/* <div className='col-3 col-xl-4 col-lg-5 col-md-12'></div>
            <div className='col-9 col-xl-8 col-lg-7 col-md-12'></div> */}
          </div>
        </div>
      </div>
    </main>
  )
}

export default index
