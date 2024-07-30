import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { GiftIcon } from '~/assets'
import { RootState } from '~/store'
import { CartItemType } from '~/types/cart.type'

const CartSummary = () => {
  const totalPrice = useSelector<RootState>((state) => state.cart.totalPrice) as number
  const cart = useSelector<RootState>((state) => state.cart.cart) as CartItemType[]
  const SHIPPING_FEE = 10
  return (
    <>
      <div className='cart-info'>
        <div className='cart-info__row'>
          <span>
            Subtotal <span className='cart-info__sub-label'>(items)</span>
          </span>
          <span>{cart?.length || 0}</span>
        </div>
        <div className='cart-info__row'>
          <span>
            Price <span className='cart-info__sub-label'>(Total)</span>
          </span>
          <span>${totalPrice || 0}</span>
        </div>
        <div className='cart-info__row'>
          <span>Shipping</span>
          <span>${SHIPPING_FEE}</span>
        </div>
        <div className='cart-info__separate' />
        <div className='cart-info__row'>
          <span>Estimated Total</span>
          <span>${totalPrice + SHIPPING_FEE}</span>
        </div>
        <Link to='/shipping' className='cart-info__next-btn btn btn--primary btn--rounded'>
          Continue to checkout
        </Link>
      </div>
      <div className='cart-info'>
        <a href='#!'>
          <article className='gift-item'>
            <div className='gift-item__icon-wrap'>
              <img src={GiftIcon} alt='' className='gift-item__icon' />
            </div>
            <div className='gift-item__content'>
              <h3 className='gift-item__title'>Send this order as a gift.</h3>
              <p className='gift-item__desc'>Available items will be shipped to your gift recipient.</p>
            </div>
          </article>
        </a>
      </div>
    </>
  )
}

export default CartSummary
