import './checkout.scss'
import Breadcrumb from '../../components/Breadcrumb'
import CartList from '../../components/CartList'
import CartBottom from '../../components/CartBottom'
import CartSummary from '../../components/CartSummary'
import NotFound from '../../components/NotFound'
import { useSelector } from 'react-redux'
import { RootState } from '~/store'
import { LuPackageX } from 'react-icons/lu'
import { useEffect } from 'react'
const Checkout = () => {
  const cartList = useSelector((state: RootState) => state.cart.cart)
  const breadcrumbArray = [
    {
      name: 'Home',
      path: ''
    },
    {
      name: 'Checkout',
      path: 'checkout'
    }
  ]
  useEffect(() => {
    document.title = 'Checkout | Coffee Store'
  }, [])
  return (
    <main className='checkout-page'>
      <div className='container'>
        {/* Search bar */}
        {/* <div className='checkout-container'>
          <div className='search-bar d-none d-md-flex'>
            <input type='text' name='' id='' placeholder='Search for item' className='search-bar__input' />
            <button className='search-bar__submit'>
              <img src='./assets/icons/search.svg' alt='' className='search-bar__icon icon' />
            </button>
          </div>
        </div> */}
        {/* Breadcrumbs */}
        <div className='checkout-container'>
          <Breadcrumb breadcrumbArray={breadcrumbArray}></Breadcrumb>
        </div>
        {/* Checkout content */}
        <div className='checkout-container'>
          {cartList.length === 0 ? (
            <NotFound
              icon={<LuPackageX className='not-found__icon' />}
              title='Cart is empty'
              description="Let's add some items to your cart"
              showAction
            ></NotFound>
          ) : (
            <div className='row gy-xl-3'>
              <div className='col-8 col-xl-12'>
                <div className='cart-info'>
                  <CartList></CartList>
                  <CartBottom></CartBottom>
                </div>
              </div>
              <div className='col-4 col-xl-12'>
                <CartSummary></CartSummary>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default Checkout
