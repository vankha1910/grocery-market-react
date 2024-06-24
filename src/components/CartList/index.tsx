import { productImage1, productImage2, productImage3 } from '~/assets'
import CartItem from '../CartItem'
const index = () => {
  const productList = [
    {
      productName: 'Coffee Beans - Espresso Arabica and Robusta Beans',
      productImage: productImage1,
      productPrice: 100,
      productBrand: 'Lavazza',
      productQuantity: 1
    },
    {
      productName: 'Lavazza Coffee Blends - Try the Italian Espresso',
      productImage: productImage2,
      productPrice: 100,
      productBrand: 'Welikecoffee',
      productQuantity: 1
    },
    {
      productName: 'Lavazza - Caffè Espresso Black Tin - Ground coffee',
      productImage: productImage3,
      productPrice: 100,
      productBrand: 'Lavazza',
      productQuantity: 1
    }
  ]
  return (
    <div className='cart-info__list'>
      {/* Cart item 1 */}
      {productList.map((item, index) => (
        <CartItem
          key={index}
          productName={item.productName}
          productImage={item.productImage}
          productPrice={item.productPrice}
          productBrand={item.productBrand}
          productQuantity={item.productQuantity}
        ></CartItem>
      ))}
    </div>
  )
}

export default index
