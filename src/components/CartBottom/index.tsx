import { ArrowDown } from '~/assets'

const index = () => {
  return (
    <div className='cart-info__bottom d-md-none'>
      <div className='row'>
        <div className='col-8 col-xxl-7'>
          <div className='cart-info__continue'>
            <a href='./' className='cart-info__continue-link'>
              <img className='cart-info__continue-icon icon' src={ArrowDown} alt='' />
              Continue Shopping
            </a>
          </div>
        </div>
        <div className='col-4 col-xxl-5'>
          <div className='cart-info__row'>
            <span>Subtotal:</span>
            <span>$191.65</span>
          </div>
          <div className='cart-info__row'>
            <span>Shipping:</span>
            <span>$10.00</span>
          </div>
          <div className='cart-info__separate' />
          <div className='cart-info__row cart-info__row--bold'>
            <span>Total:</span>
            <span>$201.65</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
