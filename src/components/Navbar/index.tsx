import './navbar.scss'
import { ArrowDown, ArrowLeft, CartIcon, HeartIcon } from '~/assets'
import { Link } from 'react-router-dom'
type NavbarProps = {
  showNavbar: boolean
  setShowNavbar: React.Dispatch<React.SetStateAction<boolean>>
}
const index = (props: NavbarProps) => {
  const { showNavbar, setShowNavbar } = props

  return (
    <>
      <nav id='navbar' className={`navbar ${showNavbar ? 'show' : 'hide'}`}>
        <button onClick={() => setShowNavbar(false)} className='navbar__close js-toggle d-none d-md-block '>
          <img className='icon navbar__close-icon ' src={ArrowLeft} alt='' />
        </button>
        <div className='d-none d-md-flex nav-act'>
          <Link to='checkout' className='nav-btn'>
            <img className='nav-btn__icon icon' src={CartIcon} alt='' />
            <span className='nav-btn__title'>Cart</span>
            <span className='nav-btn__qnt'>3</span>
          </Link>
          <Link to='favorite' className='nav-btn'>
            <img className='nav-btn__icon icon' src={HeartIcon} alt='' />
            <span className='nav-btn__title'>Favorite</span>
            <span className='nav-btn__qnt'>3</span>
          </Link>
        </div>
        <ul className='navbar__list js-dropdown-list'>
          <li className='navbar__item'>
            <Link to='/' className='navbar__link'>
              Home
            </Link>
          </li>
          <li className='navbar__item'>
            <Link to='products' className='navbar__link'>
              Product <img src={ArrowDown} alt='' className='navbar__arrow icon' />
            </Link>
          </li>

          <li className='navbar__item'>
            <Link to='contact' className='navbar__link'>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className='navbar__overlay d-none d-lg-block' />
    </>
  )
}

export default index
