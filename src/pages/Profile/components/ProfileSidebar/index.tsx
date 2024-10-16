import { Link, useLocation } from 'react-router-dom'
import { FaCamera } from 'react-icons/fa6'
import './profileSidebar.scss'
import useUpdateAvatar from '~/features/user/useUpdateAvatar'
import { Layout, Menu } from 'antd'
import { useEffect, useState } from 'react'
import FullPageSpin from '~/components/FullPageSpin'
import { ImProfile } from 'react-icons/im'
import { IoPersonSharp } from 'react-icons/io5'
import { FaCartArrowDown } from 'react-icons/fa'
import { SiAdguard } from 'react-icons/si'
import { IoIosHelpCircle } from 'react-icons/io'
import { CgDanger } from 'react-icons/cg'
import { RootState } from '~/store'
import { useSelector } from 'react-redux'

const { Sider } = Layout
// interface AvatarState {
//   avatar: File | null
// }
const ProfileSidebar = () => {
  const location = useLocation()

  const [showSider, setShowSider] = useState<boolean>(false)
  const { updateAvatar, isPending } = useUpdateAvatar()
  // const user = getProfileFromLS()
  const user = useSelector((state: RootState) => state.user.user)
  const menuItem = [
    {
      key: '0',
      icon: <ImProfile className='profile-menu__icon' />,
      label: (
        <Link className='profile-menu__link' to='/profile'>
          Profile
        </Link>
      )
    },
    {
      key: '1',
      icon: <IoPersonSharp className='profile-menu__icon' />,
      label: (
        <Link className='profile-menu__link' to='/profile/edit-profile'>
          Personal info
        </Link>
      )
    },
    {
      key: '2',
      icon: <FaCartArrowDown className='profile-menu__icon' />,
      label: (
        <Link className='profile-menu__link' to='/profile/my-orders'>
          My orders
        </Link>
      )
    },
    {
      key: '4',
      icon: <SiAdguard className='profile-menu__icon' />,
      label: (
        <Link className='profile-menu__link' to='#!'>
          Protection plans
        </Link>
      ),
      disabled: true
    },
    {
      key: '5',
      icon: <IoIosHelpCircle className='profile-menu__icon' />,
      label: (
        <Link className='profile-menu__link' to='#!'>
          Help
        </Link>
      ),
      disabled: true
    },
    {
      key: '6',
      icon: <CgDanger className='profile-menu__icon' />,
      label: (
        <Link className='profile-menu__link disable' to='#!'>
          Terms of Use
        </Link>
      ),
      disabled: true
    }
  ]
  const [currentKey, setCurrentKey] = useState<string>('0')

  useEffect(() => {
    if (location.pathname === '/profile/edit-profile') {
      setCurrentKey('1')
    } else if (location.pathname === '/profile/my-orders') {
      setCurrentKey('2')
    } else {
      setCurrentKey('0')
    }
  }, [location.pathname])
  return (
    <>
      <FullPageSpin isSpinning={isPending}></FullPageSpin>

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
              <img alt='user-avatar' className='profile-user__avatar' src={user?.avatar} />
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
                  <FaCamera style={{ cursor: 'pointer' }} />
                </label>
              </div>
              {/* <p className='profile-user__desc'>Registered: 17th May 2022</p> */}
            </div>
          </div>
        )}
        <Menu mode='inline' style={{ height: '100%', borderRight: 0 }} items={menuItem} selectedKeys={[currentKey]} />
      </Sider>
    </>
  )
}

export default ProfileSidebar
