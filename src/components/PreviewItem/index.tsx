import { CartItemType } from '~/types/cart.type'
import './previewItem.scss'

const index = ({ cartItem }: { cartItem: CartItemType }) => {
  return (
    <article className='cart-preview-item'>
      <div className='cart-preview-item__img-wrap'>
        <img src={cartItem?.thumbImg} alt='' className='cart-preview-item__thumb' />
      </div>
      <h3 className='cart-preview-item__title'>{cartItem?.name}</h3>
      <p className='cart-preview-item__price'>{cartItem?.selectedSize?.value}</p>
      <p className='cart-preview-item__price'>{cartItem?.selectedGrind}</p>
      <p className='cart-preview-item__price'>{`$${(cartItem?.selectedSize?.price - (cartItem?.selectedSize?.price * cartItem?.discount) / 100).toFixed(2)}  x  ${cartItem?.selectedSize.quantity}`}</p>
    </article>
  )
}

export default index
