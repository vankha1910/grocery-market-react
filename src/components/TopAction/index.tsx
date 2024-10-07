import { Link } from 'react-router-dom'
import { ArrowUp, CartIcon, HeartIcon, SunIcon, defaultAvatar } from '~/assets'
import './topAction.scss'
import PreviewItem from '../PreviewItem'
import { useDarkMode } from '../../contexts/DarkModeContext'
import { getProfileFromLS, getStoredToken } from '~/utils'
import { useSelector } from 'react-redux'
import { CartItemType } from '~/types/cart.type'
import { RootState } from '~/store'
import SearchInput from '../SearchInput'
import { FaShoppingCart } from 'react-icons/fa'

import NotFound from '../NotFound'
const TopAction = () => {
  const { toggleDarkMode, isDarkMode } = useDarkMode()
  const cartList = useSelector<RootState>((state) => state.cart.cart) as CartItemType[]
  const totalPrice = useSelector<RootState>((state) => state.cart.totalPrice) as number
  // const previewList = [
  //   {
  //     productImage: productImage1,
  //     productName: 'Coffee Beans - Espresso Arabica and Robusta Beans',
  //     productPrice: 47.0
  //   },
  //   {
  //     productImage: productImage2,
  //     productName: 'Lavazza Coffee Blends - Try the Italian Espresso',
  //     productPrice: 10.15
  //   },
  //   {
  //     productImage: productImage3,
  //     productName: 'Lavazza - Caffè Espresso Black Tin - Ground coffee',
  //     productPrice: 23.6
  //   }
  // ]

  const token = getStoredToken()
  const user = getProfileFromLS()
  const handleLogout = () => {
    sessionStorage.removeItem('token')
    window.location.reload()
  }

  return (
    <div className='top-act'>
      <div className='top-act__group top-act__group--single d-sm-none '>
        <SearchInput></SearchInput>
      </div>

      {token ? (
        <>
          {' '}
          <div className='top-act__group top-act__group--double'>
            <div className='top-act__btn-wrap'>
              <button className='top-act__btn'>
                <img className='icon top-act__icon' src={HeartIcon} />
                {/* <span className='top-act__title'>03</span> */}
              </button>
              <div className='act-dropdown'>
                <div className='act-dropdown__inner'>
                  <img src={ArrowUp} alt='' className='act-dropdown__arrow' />
                  <div className='act-dropdown__top'>
                    <h2 className='act-dropdown__title'>You have 3 item(s)</h2>
                  </div>
                  <div className='row row-cols-3 gx-2 act-dropdown__list'>
                    {/* {previewList.map((item, index) => (
                      <div key={index} className='col'>
                        <PreviewItem product={item} />
                      </div>
                    ))} */}
                  </div>
                  <div className='act-dropdown__separate' />
                  <div className='act-dropdown__checkout'>
                    <Link to='/favourite' className='btn btn--primary btn--rounded act-dropdown__checkout-btn'>
                      View all
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='top-act__separate' />

            <div className='top-act__btn-wrap'>
              <button className='top-act__btn'>
                <img className='icon top-act__icon' src={CartIcon} />
                {cartList?.length > 0 && <span className='top-act__badge'>{cartList?.length || 0}</span>}
              </button>
              <div className='act-dropdown'>
                <div className='act-dropdown__inner'>
                  <img src={ArrowUp} alt='' className='act-dropdown__arrow' />
                  <div className='act-dropdown__top'>
                    {cartList?.length > 0 && (
                      <h2 className='act-dropdown__title'>You have {cartList?.length || 0} item(s)</h2>
                    )}
                  </div>
                  {cartList?.length > 0 ? (
                    <>
                      <div className='row row-cols-3 gx-2 act-dropdown__list'>
                        {cartList.map((item: CartItemType, index: number) => (
                          <div key={index} className='col'>
                            <PreviewItem cartItem={item} />
                          </div>
                        ))}
                      </div>
                      <div className='act-dropdown__bottom'>
                        <div className='act-dropdown__row act-dropdown__row--bold'>
                          <span className='act-dropdown__label'>Total Price</span>
                          <span className='act-dropdown__value'>${totalPrice} </span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {' '}
                      <NotFound
                        icon={<FaShoppingCart className='not-found__icon' />}
                        title='Empty cart'
                        description='Shopping cart is empty'
                      ></NotFound>
                    </>
                  )}
                  <div className='act-dropdown__checkout'>
                    <Link
                      to={cartList?.length > 0 ? '/checkout' : '/products'}
                      className='btn btn--primary btn--rounded act-dropdown__checkout-btn'
                    >
                      {cartList?.length > 0 ? 'Check Out All' : 'Buy Now'}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='top-act__user'>
            <img className='top-act__avatar' src={user?.avatar || defaultAvatar} alt='Avatar' />
            <div className='act-dropdown top-act__dropdown'>
              <div className='act-dropdown__inner user-menu'>
                <img src={ArrowUp} alt='' className='act-dropdown__arrow top-act__dropdown-arrow' />
                <div className='user-menu__top'>
                  <img src={user?.avatar || defaultAvatar} alt='Avatar' className='user-menu__avatar' />
                  <div>
                    <p className='user-menu__name'>{user?.name || user?.email}</p>
                    <p>{`@${user?.email?.split('@')[0]}`}</p>
                  </div>
                </div>
                <ul className='user-menu__list'>
                  <li>
                    <Link to='/profile' className='user-menu__link'>
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to='/favourite' className='user-menu__link'>
                      Favourite list
                    </Link>
                  </li>
                  <li>
                    <Link to='/change-password' className='user-menu__link'>
                      Change password
                    </Link>
                  </li>
                  <li className='user-menu__separate'>
                    <button onClick={toggleDarkMode} className='user-menu__link '>
                      <span>{!isDarkMode ? 'Dark mode' : 'Light mode'}</span>
                      <img src={SunIcon} alt='' className='icon user-menu__icon' />
                    </button>
                  </li>

                  <li className='user-menu__separate'>
                    <button onClick={handleLogout} className='user-menu__link'>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* <Link to='/register' className='btn btn--text d-md-none'>
            Sign In
          </Link> */}
          <div className='top-act__btn-wrap'>
            <Link to='/checkout' className='top-act__btn'>
              <img className='icon top-act__icon' src={CartIcon} />
              {cartList?.length > 0 && <span className='top-act__badge'>{cartList?.length || 0}</span>}
            </Link>
          </div>
          <Link to='/login' className='btn btn--primary btn--no-margin'>
            Sign Up
          </Link>
        </>
      )}
    </div>
  )
}

export default TopAction
