import { Link } from 'react-router-dom'
import { ArrowDown2, HeartIcon2, MinusIcon, PlusIcon, TrashIcon } from '~/assets'

interface CartItemProps {
  productName: string
  productImage: string
  productPrice: number
  productBrand: string
  productQuantity: number
}
const index = ({ productName, productImage, productPrice, productBrand, productQuantity }: CartItemProps) => {
  return (
    <article className='cart-item'>
      <Link to='/product/2'>
        <img src={productImage} alt='' className='cart-item__thumb' />
      </Link>
      <div className='cart-item__content'>
        <div className='cart-item__content-left'>
          <h3 className='cart-item__title'>
            <Link to='/product/2'>{productName}</Link>
          </h3>
          <p className='cart-item__price-wrap'>
            ${productPrice} | <span className='cart-item__status'>In Stock</span>
          </p>
          <div className='cart-item__ctrl cart-item__ctrl--md-block'>
            <div className='cart-item__input'>
              {productBrand}
              <img className='icon' src={ArrowDown2} alt='' />
            </div>
            <div className='cart-item__input'>
              <button className='cart-item__input-btn'>
                <img className='icon' src={MinusIcon} alt='' />
              </button>
              <span>{productQuantity}</span>
              <button className='cart-item__input-btn'>
                <img className='icon' src={PlusIcon} alt='' />
              </button>
            </div>
          </div>
        </div>
        <div className='cart-item__content-right'>
          <p className='cart-item__total-price'>${productPrice}</p>
          <div className='cart-item__ctrl'>
            <button className='cart-item__ctrl-btn'>
              <img src={HeartIcon2} alt='' />
              Save
            </button>
            <button className='cart-item__ctrl-btn js-toggle' toggle-target='#delete-confirm'>
              <img src={TrashIcon} alt='' />
              Delete
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default index
