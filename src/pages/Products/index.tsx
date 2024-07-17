import React from 'react'
import './products.scss'
import ProductItem from '../../components/ProductItem'
import { StarIcon, productImage1, productImage2, productImage3 } from '~/assets'
import { Pagination, Rate } from 'antd'

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
    <main className='products-page'>
      <div className='container'>
        <div className='row'>
          <div className='col-2 col-lg-3 col-sm-0'>
            <div className='product-sidebar'>
              <div className='product-filter filter-category'>
                <h3 className='filter__title'>Category</h3>
                <ul className='filter__list'>
                  <li className='filter__item'>
                    <input className='filter__input' type='checkbox' name='category' id='category-1' />
                    <label className='filter__label' htmlFor='category-1'>
                      Category 1
                    </label>
                  </li>
                  <li className='filter__item'>
                    <input className='filter__input' type='checkbox' name='category' id='category-2' />
                    <label className='filter__label' htmlFor='category-2'>
                      Category 2
                    </label>
                  </li>
                  <li className='filter__item'>
                    <input className='filter__input' type='checkbox' name='category' id='category-3' />
                    <label className='filter__label' htmlFor='category-3'>
                      Category 3
                    </label>
                  </li>
                  <li className='filter__item'>
                    <input className='filter__input' type='checkbox' name='category' id='category-4' />
                    <label className='filter__label' htmlFor='category-4'>
                      Category 4
                    </label>
                  </li>
                </ul>
              </div>
              <div className='separate'></div>
              <div className='product-filter filter-brand'>
                <h3 className='filter__title'>Brand</h3>
                <ul className='filter__list'>
                  <li className='filter__item'>
                    <input className='filter__input' type='checkbox' name='brand' id='brand-1' />
                    <label className='filter__label' htmlFor='brand-1'>
                      Brand 1
                    </label>
                  </li>
                  <li className='filter__item'>
                    <input className='filter__input' type='checkbox' name='brand' id='brand-2' />
                    <label className='filter__label' htmlFor='brand-2'>
                      Brand 2
                    </label>
                  </li>
                  <li className='filter__item'>
                    <input className='filter__input' type='checkbox' name='brand' id='brand-3' />
                    <label className='filter__label' htmlFor='brand-3'>
                      Brand 3
                    </label>
                  </li>
                  <li className='filter__item'>
                    <input className='filter__input' type='checkbox' name='brand' id='brand-4' />
                    <label className='filter__label' htmlFor='brand-4'>
                      Brand 4
                    </label>
                  </li>
                </ul>
              </div>
              <div className='separate'></div>
              <div className='product-filter filter-rating'>
                <h3 className='filter__title'>Rating</h3>
                <ul className='filter__list'>
                  <li className='filter__item'>
                    <input className='filter__input d-none' type='checkbox' name='rating' id='rating-5' />
                    <label className='filter__label' htmlFor='rating-5'>
                      <Rate disabled defaultValue={5}></Rate>
                    </label>
                  </li>
                  <li className='filter__item'>
                    <input className='filter__input d-none' type='checkbox' name='rating' id='rating-4' />
                    <label className='filter__label' htmlFor='rating-4'>
                      <Rate disabled defaultValue={4}></Rate>
                    </label>
                  </li>
                  <li className='filter__item'>
                    <input className='filter__input d-none' type='checkbox' name='rating' id='rating-3' />
                    <label className='filter__label' htmlFor='rating-3'>
                      <Rate disabled defaultValue={3}></Rate>
                    </label>
                  </li>
                  <li className='filter__item'>
                    <input className='filter__input d-none' type='checkbox' name='rating' id='rating-2' />
                    <label className='filter__label' htmlFor='rating-2'>
                      <Rate disabled defaultValue={2}></Rate>
                    </label>
                  </li>
                  <li className='filter__item'>
                    <input className='filter__input d-none' type='checkbox' name='rating' id='rating-1' />
                    <label className='filter__label' htmlFor='rating-1'>
                      <Rate disabled defaultValue={1}></Rate>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-10 col-lg-9 col-sm-12'>
            <div className='product-content'>
              <div className='product-content__top'>
                <h3 className='product-content__title'>Product List (99)</h3>
                <div className='product-sort'></div>
              </div>
              <div className='product-list row row-cols-4 row-cols-lg-2 row-cols-sm-1 g-3'>
                {productList.map((item, index) => (
                  <div key={index} className='col'>
                    <ProductItem product={item} />
                  </div>
                ))}
              </div>
              <div className='product-pagination'>
                <Pagination defaultCurrent={1} total={50} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default index
