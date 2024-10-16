import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { GiftIcon } from '~/assets'
import useCreateOrder from '~/features/cart/useCreateOrder'
import { RootState } from '~/store'
import { AddressState, CartState } from '~/types/cart.type'
import FullPageSpin from '../FullPageSpin'
import { Order } from '~/types/order.type'
import { toast } from 'react-toastify'
import { useAuth } from '~/contexts/AuthContext'

type Props = {
  lastStep?: boolean
}

const CartSummary = ({ lastStep }: Props) => {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const { createOrder, isPending } = useCreateOrder()
  const cartState = useSelector<RootState>((state) => state.cart) as CartState
  const addressState = useSelector<RootState>((state) => state.address) as AddressState
  const { cart, totalPrice } = cartState
  const { currentAddress, paymentMethod } = addressState
  const SHIPPING_FEE = 10

  const handleOrder = () => {
    if (cart.length === 0) {
      toast.warning('Your cart is empty')
      return
    }

    if (!currentAddress) {
      toast.warning('Please choose your address')
      return
    }

    const refactorCart = cart.map((item) => {
      return {
        _id: item.productId,
        quantity: item.selectedSize.quantity,
        price: item.selectedSize.price,
        size: item.selectedSize.value,
        grind: item.selectedGrind,
        discount: item?.discount || 0,
        name: item.name
      }
    })
    const data: Order = {
      products: refactorCart,
      shippingAddress: currentAddress,
      paymentMethod: paymentMethod,
      totalPrice
    }
    createOrder(data)
  }

  const navigateToLogin = () => {
    toast.warning('You need to login first')

    setTimeout(() => {
      navigate('/login')
    }, 1500)
  }
  return (
    <>
      <FullPageSpin isSpinning={isPending}></FullPageSpin>
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
        {lastStep ? (
          <button onClick={handleOrder} className='cart-info__next-btn btn btn--primary btn--rounded'>
            Order
          </button>
        ) : (
          <>
            {isAuthenticated ? (
              <>
                <Link to='/shipping' className='cart-info__next-btn btn btn--primary btn--rounded'>
                  Continue to checkout
                </Link>
              </>
            ) : (
              <>
                <button onClick={navigateToLogin} className='cart-info__next-btn btn btn--primary btn--rounded'>
                  Continue to checkout
                </button>
              </>
            )}
          </>
        )}
      </div>
      <div className='cart-info'>
        <a href='#!'>
          <article className='gift-item'>
            <div className='gift-item__icon-wrap'>
              <img src={GiftIcon} alt='gift-icon' className='gift-item__icon' />
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
