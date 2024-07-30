import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductItem from '~/components/ProductItem'
// import productList from '~/data/product'
import useGetTopRatedProduct from '~/features/product/useGetTopRatedProduct'
import { Product } from '~/types/product.type'

const ProductList = () => {
  const { data, isPending } = useGetTopRatedProduct()
  const productList: Product[] = data?.data?.products || []

  return (
    <section className='home__container product-list container'>
      <div className='home__row'>
        <h2 className='home__heading'>Recommended for you</h2>
        <div className='filter-wrapper'>
          <Link to='/products' className='btn-filter'>
            View all
            <img src='./assets/icons/filter.svg' alt='' />
          </Link>
        </div>
      </div>
      <div className='product-list row row-cols-4 row-cols-lg-2 row-cols-sm-1 g-3'>
        {productList?.map((item, index) => (
          <div className='col'>
            <ProductItem key={index} product={item} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductList
