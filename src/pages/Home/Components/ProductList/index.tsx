import { Link } from 'react-router-dom'
import ProductItem from '../../../../components/ProductItem'
import { productImage1, productImage2, productImage3 } from '~/assets'
const productList = [
  {
    img: productImage1,
    name: 'Coffee Beans - Espresso Arabica and Robusta Beans',
    brand: 'Lavazza',
    price: 120.05,
    rated: 5,
    liked: false
  },
  {
    img: productImage2,
    name: 'Lavazza Coffee Blends - Try the Italian Espresso',
    brand: 'Welikecoffee',
    price: 46.77,
    rated: 4.2,
    liked: true
  },
  {
    img: productImage3,
    name: 'Lavazza - Caffè Espresso Black Tin - Ground coffee',
    brand: 'Lavazza',
    price: 99.99,
    rated: 5,
    liked: false
  },
  {
    img: productImage2,
    name: 'Lavazza Coffee Blends - Try the Italian Espresso',
    brand: 'Welikecoffee',
    price: 99.77,
    rated: 3.2,
    liked: false
  },
  {
    img: productImage1,
    name: 'Coffee Beans - Espresso Arabica and Robusta Beans',
    brand: 'Lavazza',
    price: 120.05,
    rated: 5,
    liked: false
  },
  {
    img: productImage2,
    name: 'Lavazza Coffee Blends - Try the Italian Espresso',
    brand: 'Welikecoffee',
    price: 46.77,
    rated: 4.2,
    liked: true
  },
  {
    img: productImage3,
    name: 'Lavazza - Caffè Espresso Black Tin - Ground coffee',
    brand: 'Lavazza',
    price: 99.99,
    rated: 5,
    liked: false
  },
  {
    img: productImage2,
    name: 'Lavazza Coffee Blends - Try the Italian Espresso',
    brand: 'Welikecoffee',
    price: 99.77,
    rated: 3.2,
    liked: false
  }
]
const index = () => {
  return (
    <section className='home__container product-list'>
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
        {productList.map((item, index) => (
          <div className='col'>
            <ProductItem key={index} product={item} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default index
