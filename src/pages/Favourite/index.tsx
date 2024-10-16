import { productImage1, productImage2, productImage3 } from '~/assets'
import Breadcrumb from '../../components/Breadcrumb'
import FavouriteItem from './FavouriteItem'
const index = () => {
  const productList = [
    {
      productName: 'Coffee Beans - Espresso Arabica and Robusta Beans',
      productImage: productImage1,
      productPrice: 47.0
    },
    {
      productName: 'Lavazza Coffee Blends - Try the Italian Espresso',
      productImage: productImage2,
      productPrice: 37.0
    },
    {
      productName: 'Lavazza - Caffè Espresso Black Tin - Ground coffee',
      productImage: productImage3,
      productPrice: 27.0
    }
  ]
  const breadcrumbArray = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Favourite List',
      path: 'favourite'
    }
  ]
  return (
    <main className='checkout-page'>
      <div className='container'>
        {/* Search bar */}
        <div className='checkout-container'>
          <div className='search-bar d-none d-md-flex'>
            <input type='text' name='' id='' placeholder='Search for item' className='search-bar__input' />
            <button className='search-bar__submit'>
              <img src='./assets/icons/search.svg' alt='search' className='search-bar__icon icon' />
            </button>
          </div>
        </div>
        {/* Breadcrumbs */}
        <div className='checkout-container'>
          <Breadcrumb breadcrumbArray={breadcrumbArray}></Breadcrumb>
        </div>
        {/* Checkout content */}
        <div className='checkout-container'>
          <div className='row gy-xl-3'>
            <div className='col-12'>
              <div className='cart-info'>
                <h1 className='cart-info__heading'>Favourite List</h1>
                <p className='cart-info__desc'>3 items</p>
                <div className='cart-info__check-all'>
                  <label className='cart-info__checkbox'>
                    <input type='checkbox' name='shipping-adress' className='cart-info__checkbox-input' />
                  </label>
                </div>
                <div className='cart-info__list'>
                  {/* Cart item 1 */}
                  {productList.map((item, index) => (
                    <FavouriteItem key={index} product={item} />
                  ))}
                </div>
                <div className='cart-info__bottom'>
                  <div className='cart-info__row cart-info__row-md--block'>
                    <div className='cart-info__continue'>
                      <a href='./' className='cart-info__continue-link'>
                        <img
                          className='cart-info__continue-icon icon'
                          src='./assets/icons/arrow-down-2.svg'
                          alt='arrow-down-icon'
                        />
                        Continue Shopping
                      </a>
                    </div>
                    <a href='./checkout.html' className='cart-info__checkout-all btn btn--primary btn--rounded'>
                      All Check Out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default index
