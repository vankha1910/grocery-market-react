import Breadcrumb from '../../components/Breadcrumb'
import CartList from '../../components/CartList'
import CartBottom from '../../components/CartBottom'
import CartSummary from '../../components/CartSummary'
import AddressCard from './components/AddressCard'

const index = () => {
  const addressList = [
    {
      name: 'Imran Khan',
      address: 'Museum of Rajas, Sylhet Sadar, Sylhet 3100',
      defaultAddress: true
    },
    {
      name: 'Imran Khan',
      address: 'Al Hamra City (10th Floor), Hazrat Shahjalal Road, Sylhet, Sylhet, Bangladesh',
      defaultAddress: false
    }
  ]
  const breadcrumbArray = ['Home', 'Checkout', 'Shipping']
  return (
    <main className='checkout-page'>
      <div className='container'>
        {/* Search bar */}
        <div className='checkout-container'>
          <div className='search-bar d-none d-md-flex'>
            <input type='text' name='' id='' placeholder='Search for item' className='search-bar__input' />
            <button className='search-bar__submit'>
              <img src='./assets/icons/search.svg' alt='' className='search-bar__icon icon' />
            </button>
          </div>
        </div>
        {/* Breadcrumbs */}
        <div className='checkout-container'>
          <ul className='breadcrumbs checkout-page__breadcrumbs'>
            <Breadcrumb breadcrumbArray={breadcrumbArray}></Breadcrumb>
          </ul>
        </div>
        {/* Checkout content */}
        <div className='checkout-container'>
          <div className='row gy-xl-3'>
            <div className='col-8 col-xl-12'>
              <div className='cart-info'>
                <h1 className='cart-info__heading'>1. Shipping, arrives between Mon, May 16—Tue, May 24</h1>
                <div className='cart-info__separate' />
                {/* Checkout address */}
                <div className='user-address'>
                  <div className='user-address__top'>
                    <div>
                      <h2 className='user-address__title'>Shipping address</h2>
                      <p className='user-address__desc'>Where should we deliver your order?</p>
                    </div>
                    <button
                      className='user-address__btn btn btn--primary btn--rounded btn--small js-toggle'
                      toggle-target='#add-new-address'
                    >
                      <img src='./assets/icons/plus.svg' alt='' />
                      Add a new address
                    </button>
                  </div>
                  <div className='user-address__list'>
                    {addressList.map((address) => (
                      <AddressCard address={address} key={address.name}></AddressCard>
                    ))}
                  </div>
                </div>
                <div className='cart-info__separate' />
                <h2 className='cart-info__sub-heading'>Items details</h2>
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
