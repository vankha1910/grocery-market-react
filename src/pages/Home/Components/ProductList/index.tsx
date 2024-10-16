import { Link } from 'react-router-dom'
import ProductItem from '~/components/ProductItem'
// import productList from '~/data/product'
import useGetTopRatedProduct from '~/features/product/useGetTopRatedProduct'
import { Product } from '~/types/product.type'
import ProductSkeleton from '~/components/ProductSkeleton'
const ProductList = () => {
  const { data, isFetching } = useGetTopRatedProduct()
  const productList: Product[] = data?.data?.products || []

  return (
    <section className='home__container product-list container'>
      <div className='home__row'>
        <h2 className='home__heading'>Recommended for you</h2>
        <div className='filter-wrapper'>
          <Link to='/products' className='btn-filter'>
            View all
          </Link>
        </div>
      </div>
      <div className='product-list row row-cols-4 row-cols-lg-2 row-cols-sm-2 g-2'>
        {isFetching ? (
          <>
            <ProductSkeleton></ProductSkeleton>
          </>
        ) : (
          <>
            {productList?.map((item, index) => (
              <div className='col' key={index}>
                <ProductItem product={item} />
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  )
}

export default ProductList
