import { Link } from 'react-router-dom'
import { StarIcon } from '~/assets'
import './productItem.scss'
import { Product } from '~/types/product.type'

const ProductItem = ({ product }: { product?: Product }) => {
  return (
    <article className='product-card'>
      <div className='product-card__img-wrap'>
        <Link to={`/product/${product?._id}`} aria-label='product'>
          <img className='product-card__img' src={product?.thumbImg} alt='product-thumb' />
        </Link>
        {/* <button className='product-card__btn-like btn-like'>
          <img className='btn-like__icon icon' src={HeartIcon} alt='' />
        </button> */}
      </div>
      <Link to={`/product/${product?._id}`} className='product-card__title'>
        {product?.name}
      </Link>
      <p className='product-card__brand'>{product?.brand}</p>
      <div className='product-card__row'>
        {/* {<p className='product-card__price'>${product?.size[0]?.price ?? ''}</p>} */}
        <p className='product-card__price'>
          $
          {product?.discount
            ? (product?.size[0]?.price - (product?.size[0]?.price * product?.discount) / 100).toFixed(2)
            : product?.size[0]?.price}
          {product?.discount !== 0 && <span className='prod-info__tax'>{product?.discount}%</span>}
        </p>
        <img className='product-card__icon' src={StarIcon} alt='star-icon' />
        <p className='product-card__score'>{product?.rated}</p>
      </div>
    </article>
  )
}

export default ProductItem
