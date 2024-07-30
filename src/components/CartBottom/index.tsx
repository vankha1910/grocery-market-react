import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ArrowDown } from '~/assets'
import { RootState } from '~/store'

const CartBottom = () => {
  const totalPrice = useSelector<RootState>((state) => state.cart.totalPrice) as number
  return (
    <div className='cart-info__bottom d-md-none'>
      <div className='row'>
        <div className='col-8 col-xxl-7'>
          <div className='cart-info__continue'>
            <Link to='/products' className='cart-info__continue-link'>
              <img className='cart-info__continue-icon icon' src={ArrowDown} alt='' />
              Continue Shopping
            </Link>
          </div>
        </div>
        <div className='col-4 col-xxl-5'>
          {/* <div className='cart-info__row'>
            <span>Subtotal:</span>
            <span>$191.65</span>
          </div>
          <div className='cart-info__row'>
            <span>Shipping:</span>
            <span>$10.00</span>
          </div> */}
          <div className='cart-info__separate' />
          <div className='cart-info__row cart-info__row--bold'>
            <span>Total:</span>
            <span>{totalPrice}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartBottom
