import { Link } from 'react-router-dom'
import { HeartIcon, StarIcon } from '~/assets'
import './productItem.scss'
import { useEffect, useState } from 'react'
import { Product } from '~/types/product.type'

const ProductItem = ({ product }: { product?: Product }) => {
  return (
    <article className='product-card'>
      <div className='product-card__img-wrap'>
        <Link to={`/product/${product?._id}`}>
          <img className='product-card__img' src={product?.thumbImg} alt='' />
        </Link>
        <button className='product-card__btn-like btn-like'>
          <img className='btn-like__icon icon' src={HeartIcon} alt='' />
        </button>
      </div>
      <Link to={`/product/${product?._id}`} className='product-card__title'>
        {product?.name}
      </Link>
      <p className='product-card__brand'>{product?.brand}</p>
      <div className='product-card__row'>
        {<p className='product-card__price'>${product?.size[0]?.price ?? ''}</p>}
        <img className='product-card__icon' src={StarIcon} alt='' />
        <p className='product-card__score'>{product?.rated}</p>
      </div>
    </article>
  )
}

export default ProductItem
