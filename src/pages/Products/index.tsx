import './products.scss'
import ProductItem from '../../components/ProductItem'
import { Pagination, Select } from 'antd'
import { useState } from 'react'
import useProducts from '~/features/product/useProduct'
import { Product, ProductParams } from '~/types/product.type'
import { useSearchParams } from 'react-router-dom'

const brandList = ['Lavazza', 'Welikecoffee', 'Nescafe', 'Cappuccino', 'Espresso']
const categoryList = ['Category1', 'Category 2', 'Category 3']

const RESULT_PER_PAGE = import.meta.env.VITE_RESULT_PER_PAGE
const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [params, setParams] = useState<ProductParams>({
    page: 1,
    limit: RESULT_PER_PAGE,
    sort: '-createdAt',
    brand: '',
    category: ''
  })
  const { data } = useProducts(params)
  const productList: Product[] = data?.data?.products

  const selectOption = [
    {
      value: '-createdAt',
      label: 'Newest'
    },
    {
      value: '-discount',
      label: 'Discount'
    },
    {
      value: '-size.price',
      label: 'Price High to Low'
    },
    {
      value: 'size.price',
      label: 'Price Low to High'
    },
    {
      value: '-rated',
      label: 'Rating High to Low'
    },
    {
      value: 'rated',
      label: 'Rating Low to High'
    }
  ]
  const handleCateChange = () => {}
  const handlePagination = (page: number) => {
    setParams((pre) => {
      return {
        ...pre,
        page
      }
    })
    searchParams.set('page', page.toString())
    setSearchParams(searchParams)
    handleScrollToTop()
  }
  const handleSortBy = (value: string) => {
    setParams((pre) => {
      return {
        ...pre,
        page: 1,
        sort: value
      }
    })
    searchParams.set('sort', value)
    searchParams.set('page', '1')
    setSearchParams(searchParams)
  }
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <main className='products-page'>
      <div className='container'>
        <div className='row'>
          <div className='col-2 col-lg-3 col-sm-0'>
            <div className='product-sidebar'>
              <div className='product-filter filter-category'>
                <h3 className='filter__title'>Category</h3>
                <ul className='filter__list'>
                  {categoryList?.map((item) => (
                    <li key={item} className='filter__item'>
                      <input
                        onChange={handleCateChange}
                        className='filter__input'
                        type='checkbox'
                        name='category'
                        id={item}
                      />
                      <label className='filter__label' htmlFor={item}>
                        {item}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='separate'></div>
              <div className='product-filter filter-brand'>
                <h3 className='filter__title'>Brand</h3>
                <ul className='filter__list'>
                  {brandList?.map((item) => (
                    <li key={item} className='filter__item'>
                      <input
                        onChange={handleCateChange}
                        className='filter__input'
                        type='checkbox'
                        name='brand'
                        id={item}
                      />
                      <label className='filter__label' htmlFor={item}>
                        {item}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='separate'></div>
            </div>
          </div>
          <div className='col-10 col-lg-9 col-sm-12'>
            <div className='product-content'>
              <div className='product-content__top'>
                <h3 className='product-content__title'>{`Product List (${data?.total || 0})`}</h3>
                <div className='product-sort'>
                  <span>Sort by: </span>
                  <Select
                    options={selectOption}
                    onChange={handleSortBy}
                    style={{ width: 160 }}
                    value={params.sort}
                  ></Select>
                </div>
              </div>
              <div className='product-list row row-cols-4 row-cols-lg-2 row-cols-sm-1 g-3'>
                {productList?.map((item, index) => (
                  <div key={index} className='col'>
                    <ProductItem product={item} />
                  </div>
                ))}
              </div>
              <div className='product-pagination'>
                <Pagination current={params.page} total={data?.total} pageSize={8} onChange={handlePagination} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Products
