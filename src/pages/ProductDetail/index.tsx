import { productImage1, productImage2, productImage3, productImage4 } from '~/assets'
import Breadcrumb from '../../components/Breadcrumb'
import ImageReview from './Components/ImageReview'
import ProductInfo from './Components/ProductInfo'
import ProductTabInfo from './Components/ProductTabInfo'
import './productDetail.scss'
import productList from '~/data/product'
import useGetProductDetail from '~/features/product/useGetProductDetail'
const ProductDetail = () => {
  const { data } = useGetProductDetail()
  const product = data?.data?.product
  const listProductImage = [productImage1, productImage2, productImage3, productImage4]
  const breadcrumbArray = ['Departments', 'Coffee', 'Coffee Beans', 'Lavazza']
  return (
    <main className='product-page'>
      <div className='container'>
        {/* <div className='product-container'>
          <div className='search-bar d-none d-md-flex'>
            <input className='search-bar__input' id='' name='' placeholder='Search for item' type='text' />
            <button className='search-bar__submit'>
              <img alt='' className='search-bar__icon icon' src='./assets/icons/search.svg' />
            </button>
          </div>
        </div> */}
        <div className='product-container'>
          <Breadcrumb breadcrumbArray={breadcrumbArray}></Breadcrumb>
        </div>
        <div className='product-container prod-info-content'>
          <div className='row'>
            <div className='col-5 col-xl-6 col-lg-12'>
              <ImageReview listProductImage={listProductImage}></ImageReview>
            </div>
            <div className='col-7 col-xl-6 col-lg-12'>
              <ProductInfo productInfo={product}></ProductInfo>
            </div>
          </div>
        </div>
        <div className='product-container'>
          <ProductTabInfo></ProductTabInfo>
        </div>
      </div>
    </main>
  )
}

export default ProductDetail
