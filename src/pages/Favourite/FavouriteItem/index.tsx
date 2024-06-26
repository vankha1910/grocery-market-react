import { Link } from 'react-router-dom'

type ProductProps = {
  productName: string
  productImage: string
  productPrice: number
}
const index = ({ product }: { product: ProductProps }) => {
  const { productName, productImage, productPrice } = product
  return (
    <article className='cart-item'>
      <label className='cart-info__checkbox'>
        <input type='checkbox' name='shipping-adress' className='cart-info__checkbox-input' defaultChecked />
      </label>
      <Link to='/product/2'>
        <img src={productImage} alt='' className='cart-item__thumb' />
      </Link>
      <div className='cart-item__content'>
        <div className='cart-item__content-left'>
          <h3 className='cart-item__title'>
            <a href='./product-detail.html'>{productName}</a>
          </h3>
          <p className='cart-item__price-wrap'>
            ${productPrice} | <span className='cart-item__status'>In Stock</span>
          </p>
        </div>
        <div className='cart-item__content-right'>
          {/* <p className='cart-item__total-price'>$47.00</p> */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              marginTop: 'auto'
            }}
          >
            <button className='cart-item__checkout-btn btn btn--danger btn--rounded '>Remove</button>
            <button className='cart-item__checkout-btn btn btn--primary btn--rounded btn--no-margin'>
              Add to card
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default index
