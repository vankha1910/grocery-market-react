import './navbar.scss'
import { ArrowDown, ArrowLeft, CartIcon } from '~/assets'
import { Link } from 'react-router-dom'
type NavbarProps = {
  showNavbar: boolean
  setShowNavbar: React.Dispatch<React.SetStateAction<boolean>>
}
const index = (props: NavbarProps) => {
  const { showNavbar, setShowNavbar } = props
  const hanldeScrollToContact = () => {
    const contact = document.getElementById('contact')
    if (contact) {
      contact.scrollIntoView({
        behavior: 'smooth'
      })
      if (showNavbar) setShowNavbar(false)
    }
  }
  return (
    <>
      <nav id='navbar' className={`navbar ${showNavbar ? 'show' : 'hide'}`}>
        <button onClick={() => setShowNavbar(false)} className='navbar__close js-toggle d-none d-md-block '>
          <img className='icon navbar__close-icon ' src={ArrowLeft} alt='arrow-left-icon' />
        </button>
        <div className='d-none d-md-flex nav-act'>
          <Link to='checkout' className='nav-btn'>
            <img className='nav-btn__icon icon' src={CartIcon} alt='cart-icon' />
            <span className='nav-btn__title'>Cart</span>
          </Link>
          {/* <Link to='favorite' className='nav-btn'>
            <img className='nav-btn__icon icon' src={HeartIcon} alt='' />
            <span className='nav-btn__title'>Favorite</span>
            <span className='nav-btn__qnt'>3</span>
          </Link> */}
        </div>
        <ul className='navbar__list js-dropdown-list'>
          <li className='navbar__item'>
            <Link to='/' className='navbar__link'>
              Home
            </Link>
          </li>
          <li className='navbar__item'>
            <Link to='products' className='navbar__link'>
              Product <img src={ArrowDown} alt='arrow-down-icon' className='navbar__arrow icon' />
            </Link>
          </li>

          <li className='navbar__item'>
            <button onClick={hanldeScrollToContact} className='navbar__link'>
              Contact
            </button>
          </li>
        </ul>
      </nav>
      <div className='navbar__overlay d-none d-lg-block' />
    </>
  )
}

export default index
