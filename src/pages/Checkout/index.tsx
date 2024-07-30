import './checkout.scss'
import Breadcrumb from '../../components/Breadcrumb'
import CartList from '../../components/CartList'
import CartBottom from '../../components/CartBottom'
import CartSummary from '../../components/CartSummary'
const index = () => {
  const breadcrumbArray = ['Home', 'Checkout']

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
        </div>
      </div>
    </main>
  )
}

export default index
