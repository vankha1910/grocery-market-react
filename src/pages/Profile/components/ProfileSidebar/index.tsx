import { Link } from 'react-router-dom'
import { DangerIcon, DownloadIcon, HeartIcon, InforIcon, ProfileIcon, ShieldIcon } from '~/assets'
import { getProfileFromLS } from '~/utils'
import { FaCamera } from 'react-icons/fa6'
import './profileSidebar.scss'
import useUpdateAvatar from '~/features/user/useUpdateAvatar'
import { Spin, Layout, Menu } from 'antd'
import { useState } from 'react'
const { Sider } = Layout
interface AvatarState {
  avatar: File | null
}
const ProfileSidebar = () => {
  const [showSider, setShowSider] = useState()
  const { updateAvatar, isPending } = useUpdateAvatar()
  const user = getProfileFromLS()
  const menuItem = [
    {
      key: '1',
      icon: (
        <span className='profile-menu__icon'>
          <img alt='' className='icon' src={ProfileIcon} />
        </span>
      ),
      label: (
        <Link className='profile-menu__link' to='/profile/edit-info'>
          Personal info
        </Link>
      )
    },
    {
      key: '2',
      icon: (
        <span className='profile-menu__icon'>
          <img alt='' className='icon' src={DownloadIcon} />
        </span>
      ),
      label: (
        <Link className='profile-menu__link' to='/profile/my-orders'>
          My orders
        </Link>
      )
    },
    {
      key: '3',
      icon: (
        <span className='profile-menu__icon'>
          <img alt='' className='icon' src={HeartIcon} />
        </span>
      ),
      label: (
        <Link className='profile-menu__link' to='favourite'>
          Lists
        </Link>
      )
    },
    {
      key: '4',
      icon: (
        <span className='profile-menu__icon'>
          <img alt='' className='icon' src={ShieldIcon} />
        </span>
      ),
      label: (
        <Link className='profile-menu__link' to='#!'>
          Protection plans
        </Link>
      )
    },
    {
      key: '5',
      icon: (
        <span className='profile-menu__icon'>
          <img alt='' className='icon' src={InforIcon} />
        </span>
      ),
      label: (
        <Link className='profile-menu__link' to='#!'>
          Help
        </Link>
      )
    },
    {
      key: '6',
      icon: (
        <span className='profile-menu__icon'>
          <img alt='' className='icon' src={DangerIcon} />
        </span>
      ),
      label: (
        <Link className='profile-menu__link' to='#!'>
          Terms of Use
        </Link>
      )
    }
  ]
  return (
    <>
      <Spin fullscreen spinning={isPending} size='large'></Spin>

      <Sider
        style={{
          overflow: 'auto',
          height: '85vh',
          // position: 'fixed',
          position: 'sticky',
          insetInlineStart: 0,
          top: 0,
          bottom: 0,
          scrollbarWidth: 'thin',
          scrollbarColor: 'unset'
        }}
        width={220}
        collapsible
        collapsed={showSider}
        onCollapse={(value) => setShowSider(value)}
      >
        {!showSider && (
          <div className='profile__sidebar'>
            <div className='profile-user'>
              <img alt='' className='profile-user__avatar' src={user?.avatar} />
              <h1 className='profile-user__name'>{user?.name || user?.email}</h1>
              <div className='edit-avatar'>
                <label htmlFor='avatar'>
                  <input
                    onChange={(e) => {
                      if (e.target.files) {
                        updateAvatar(e.target.files[0])
                      }
                    }}
                    type='file'
                    id='avatar'
                    style={{ display: 'none' }}
                    accept='image/*'
                  />
                  <FaCamera />
                </label>
              </div>
              {/* <p className='profile-user__desc'>Registered: 17th May 2022</p> */}
            </div>
          </div>
        )}
        <Menu mode='inline' style={{ height: '100%', borderRight: 0 }} items={menuItem} />
      </Sider>
      {/* <div className='profile-menu'>
          <ul className='profile-menu__list'>
            <li></li>
            <li></li>
            <li>
              
            </li>
            <li>
              
            </li>
            <li>
             
            </li>
            <li>
             
            </li>
          </ul>
        </div> */}
      {/* <div className='profile-menu'>
          <h3 className='profile-menu__title'>My items</h3>
          <ul className='profile-menu__list'></ul>
        </div>
        <div className='profile-menu'>
          <h3 className='profile-menu__title'>Subscriptions & plans</h3>
          <ul className='profile-menu__list'></ul>
        </div>
        <div className='profile-menu'>
          <h3 className='profile-menu__title'>Customer Service</h3>
          <ul className='profile-menu__list'></ul>
        </div> */}
    </>
  )
}

export default ProfileSidebar
