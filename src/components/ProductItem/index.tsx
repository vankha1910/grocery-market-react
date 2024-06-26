import { Link } from 'react-router-dom'
import { HeartIcon, StarIcon } from '~/assets'
import './productItem.scss'
type Product = {
  img: string
  name: string
  brand: string
  price: number
  rated: number
  liked: boolean
}
const index = ({ product }: { product?: Product }) => {
  return (
    <article className='product-card'>
      <div className='product-card__img-wrap'>
        <Link to={'/product/2'}>
          <img className='product-card__img' src={product?.img} alt='' />
        </Link>
        <button className='product-card__btn-like btn-like'>
          <img className='btn-like__icon icon' src={HeartIcon} alt='' />
        </button>
      </div>
      <Link to={'/product/2'} className='product-card__title'>
        {product?.name}
      </Link>
      <p className='product-card__brand'>{product?.brand}</p>
      <div className='product-card__row'>
        <p className='product-card__price'>${product?.price}</p>
        <img className='product-card__icon' src={StarIcon} alt='' />
        <p className='product-card__score'>{product?.rated}</p>
      </div>
    </article>
  )
}

export default index
