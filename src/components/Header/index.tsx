import './header.scss'
import Navbar from '../Navbar'
import Logo from '../Logo'
import TopAction from '../TopAction'
import { MenuToggleIcon } from '~/assets'
const Header = () => {
  return (
    <header id='header' className='header'>
      <div className='container'>
        <div className='top-bar'>
          <button toggle-target='#navbar' className='top-bar__more js-toggle d-none d-lg-block'>
            <img className='top-bar__more-icon icon' src={MenuToggleIcon} alt='' />
          </button>
          <Logo />
          <Navbar />
          <TopAction />
        </div>
      </div>
    </header>
  )
}

export default Header
