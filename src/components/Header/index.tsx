import './header.scss'
import Navbar from '../Navbar'
import Logo from '../Logo'
import TopAction from '../TopAction'
import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  return (
    <header id='header' className='header'>
      <div className='container'>
        <div className='top-bar'>
          <button
            onClick={() => setShowNavbar(!showNavbar)}
            toggle-target='#navbar'
            className='top-bar__more js-toggle d-none d-md-block'
          >
            <RxHamburgerMenu fontSize={24} className='top-bar__more-icon icon' />
            {/* <img className='top-bar__more-icon icon' src={MenuToggleIcon} alt='toggle-icon' /> */}
          </button>
          <Logo />

          <Navbar showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
          <TopAction />
        </div>
      </div>
    </header>
  )
}

export default Header
