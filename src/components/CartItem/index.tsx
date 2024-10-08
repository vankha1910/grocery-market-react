import './CartItem.scss'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { HeartIcon2, TrashIcon } from '~/assets'
import { CartItemType } from '~/types/cart.type'
import ButtonIncrease from '~/components/ButtonIncrease'
import { decreaseQuantity, increaseQuantity, removeFromCart } from '~/features/cart/cartSlice'
import { Modal } from 'antd'
const CartItem = ({ cartItem }: { cartItem: CartItemType }) => {
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()
  const handleIncrease = () => {
    dispatch(increaseQuantity(cartItem.cartItemId))
  }
  const handleDecrease = () => {
    dispatch(decreaseQuantity(cartItem.cartItemId))
  }
  const handleRemoveCartItem = () => {
    setShowModal(true)
  }
  const onRemove = () => {
    dispatch(removeFromCart(cartItem.cartItemId))
    setShowModal(false)
  }
  return (
    <article className='cart-item'>
      <Link to='/product/2'>
        <img src={cartItem.thumbImg} alt='' className='cart-item__thumb' />
      </Link>
      <div className='cart-item__content'>
        <div className='cart-item__content-left'>
          <h3 className='cart-item__title'>
            <Link to={`/product/${cartItem.productId}`}>{cartItem.name}</Link>
          </h3>
          <p className='cart-item__price-wrap'>
            ${(cartItem?.selectedSize?.price - cartItem?.selectedSize?.price * (cartItem?.discount / 100)).toFixed(2)} |{' '}
            <span className='cart-item__status'>In Stock</span>
          </p>
          <p className='cart-item__size'>
            {cartItem?.selectedSize?.value}
            {' / '}
            <span className='cart-item__grind'>{cartItem.selectedGrind}</span>
          </p>
          <div className='cart-item__ctrl cart-item__ctrl--md-block'>
            <ButtonIncrease
              quantity={cartItem?.selectedSize?.quantity}
              handleDecrease={handleDecrease}
              handleIncrease={handleIncrease}
            ></ButtonIncrease>
          </div>
        </div>
        <div className='cart-item__content-right'>
          {/* <p className='cart-item__total-price'>${productPrice}</p> */}
          <div className='cart-item__ctrl'>
            <button className='cart-item__ctrl-btn'>
              <img src={HeartIcon2} alt='' />
            </button>
            <button
              onClick={handleRemoveCartItem}
              className='cart-item__ctrl-btn js-toggle'
              toggle-target='#delete-confirm'
            >
              <img src={TrashIcon} alt='' />
            </button>
          </div>
        </div>
      </div>
      <Modal
        title='Confirmation'
        open={showModal}
        onOk={onRemove}
        onCancel={() => setShowModal(false)}
        width={400}
        centered
      >
        <p>Are you sure you want to delete this item?</p>
      </Modal>
    </article>
  )
}

export default CartItem
