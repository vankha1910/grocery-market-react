import React from 'react'
import {
  Avatar2,
  DangerIcon,
  DownloadIcon,
  Gift2Icon,
  HeartIcon,
  InforIcon,
  LocationIcon,
  Message2Icon,
  ProfileIcon,
  ShieldIcon
} from '~/assets'

const index = () => {
  return (
    <aside className='profile__sidebar'>
      <div className='profile-user'>
        <img alt='' className='profile-user__avatar' src={Avatar2} />
        <h1 className='profile-user__name'>Imran Khan</h1>
        <p className='profile-user__desc'>Registered: 17th May 2022</p>
      </div>
      <div className='profile-menu'>
        <h3 className='profile-menu__title'>Manage Account</h3>
        <ul className='profile-menu__list'>
          <li>
            <a className='profile-menu__link' href='./edit-personal-info.html'>
              <span className='profile-menu__icon'>
                <img alt='' className='icon' src={ProfileIcon} />
              </span>
              Personal info
            </a>
          </li>
          <li>
            <a className='profile-menu__link' href='#!'>
              <span className='profile-menu__icon'>
                <img alt='' className='icon' src={LocationIcon} />
              </span>
              Addresses
            </a>
          </li>
          <li>
            <a className='profile-menu__link' href='#!'>
              <span className='profile-menu__icon'>
                <img alt='' className='icon' src={Message2Icon} />
              </span>
              Communications & privacy
            </a>
          </li>
        </ul>
      </div>
      <div className='profile-menu'>
        <h3 className='profile-menu__title'>My items</h3>
        <ul className='profile-menu__list'>
          <li>
            <a className='profile-menu__link' href='#!'>
              <span className='profile-menu__icon'>
                <img alt='' className='icon' src={DownloadIcon} />
              </span>
              Reorder
            </a>
          </li>
          <li>
            <a className='profile-menu__link' href='#!'>
              <span className='profile-menu__icon'>
                <img alt='' className='icon' src={HeartIcon} />
              </span>
              Lists
            </a>
          </li>
          <li>
            <a className='profile-menu__link' href='#!'>
              <span className='profile-menu__icon'>
                <img alt='' className='icon' src={Gift2Icon} />
              </span>
              Registries
            </a>
          </li>
        </ul>
      </div>
      <div className='profile-menu'>
        <h3 className='profile-menu__title'>Subscriptions & plans</h3>
        <ul className='profile-menu__list'>
          <li>
            <a className='profile-menu__link' href='#!'>
              <span className='profile-menu__icon'>
                <img alt='' className='icon' src={ShieldIcon} />
              </span>
              Protection plans
            </a>
          </li>
        </ul>
      </div>
      <div className='profile-menu'>
        <h3 className='profile-menu__title'>Customer Service</h3>
        <ul className='profile-menu__list'>
          <li>
            <a className='profile-menu__link' href='#!'>
              <span className='profile-menu__icon'>
                <img alt='' className='icon' src={InforIcon} />
              </span>
              Help
            </a>
          </li>
          <li>
            <a className='profile-menu__link' href='#!'>
              <span className='profile-menu__icon'>
                <img alt='' className='icon' src={DangerIcon} />
              </span>
              Terms of Use
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default index
