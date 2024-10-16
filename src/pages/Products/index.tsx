import './products.scss'
import ProductItem from '../../components/ProductItem'
import { Pagination, Select } from 'antd'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import useProducts from '~/features/product/useProduct'
import { Product, ProductParams } from '~/types/product.type'
import { useSearchParams } from 'react-router-dom'
import { FilterIcon } from '~/assets'
import { FaTimes } from 'react-icons/fa'
import useClickOutside from '~/hooks/useClickOutside'
import ProductSkeleton from '~/components/ProductSkeleton'
import NotFound from '~/components/NotFound'
import { LuPackageX } from 'react-icons/lu'

const brandList = ['Volcanica Coffee', 'Sumatra Gold', 'Santos Roastery', 'Valley Coffee Roasters', 'Highland Coffee']
const categoryList = ['Available Ground', 'Decaf', 'Espresso', 'Blends', 'Single Origins']
const originList = ['Brazil', 'Colombia', 'Ethiopia', 'Kenya', 'Vietnam']
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
const RESULT_PER_PAGE = import.meta.env.VITE_RESULT_PER_PAGE

const Products = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const filterRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [params, setParams] = useState<ProductParams>({
    page: 1,
    limit: RESULT_PER_PAGE,
    sort: '-createdAt',
    brand: '',
    category: '',
    search: ''
  })
  const [selectedFilter, setSelectedFilter] = useState({
    brand: '',
    category: '',
    origin: ''
  })
  const { data, isFetching } = useProducts(params)
  const productList: Product[] = data?.data?.products

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

  useClickOutside(filterRef, () => setIsFilterOpen(false))

  const handleCateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, id } = e.target
    setSelectedFilter((pre) => ({
      ...pre,
      [name]: id
    }))
    setParams((pre) => {
      return {
        ...pre,
        page: 1,
        [name]: id
      }
    })
    searchParams.set(name, id)
    searchParams.set('page', '1')
    setSearchParams(searchParams)
    handleScrollToTop()
  }

  const handleClearFilter = () => {
    setSelectedFilter({
      brand: '',
      category: '',
      origin: ''
    })
    setParams((pre) => {
      return {
        ...pre,
        brand: '',
        category: '',
        origin: '',
        search: ''
      }
    })
    searchParams.delete('brand')
    searchParams.delete('category')
    searchParams.delete('origin')
    searchParams.delete('search')
    setSearchParams(searchParams)
  }

  useEffect(() => {
    document.title = 'Products | Coffee Shop'

    const searchValue = new URLSearchParams(window.location.search).get('search')
    const brandValue = new URLSearchParams(window.location.search).get('brand')
    const categoryValue = new URLSearchParams(window.location.search).get('category')
    const sortValue = new URLSearchParams(window.location.search).get('sort')
    if (searchValue || brandValue || categoryValue || sortValue) {
      setParams((pre) => {
        return {
          ...pre,
          search: searchValue || '',
          brand: brandValue || '',
          category: categoryValue || '',
          sort: sortValue || '-createdAt'
        }
      })
    }
  }, [])

  useEffect(() => {
    if (searchParams.get('search')) {
      setParams((pre) => {
        return {
          ...pre,
          search: searchParams.get('search') || ''
        }
      })
    }
  }, [searchParams])
  return (
    <>
      <main className='products-page'>
        <div className='container'>
          <div className='row'>
            <div className='col-2 col-lg-3 col-md-12'>
              <div ref={filterRef} className={`product-filter ${isFilterOpen ? 'show' : ''}`}>
                <FaTimes onClick={() => setIsFilterOpen(false)} className='icon d-none d-md-block close-icon' />
                <div className='filter__header'>
                  <h3 className='filter__header-title'>
                    <img src={FilterIcon} alt='filter-icon' className='filter_icon icon' />
                    Filter
                  </h3>
                  <button onClick={handleClearFilter} className='filter__header-clear'>
                    Clear
                  </button>
                </div>
                <div className='filter-item product-sort d-none d-md-block'>
                  <span>Sort by: </span>
                  <Select
                    options={selectOption}
                    onChange={handleSortBy}
                    style={{
                      width: 'calc(100% - 70px) '
                    }}
                    getPopupContainer={() => document.querySelector('.product-sort') as HTMLElement}
                    value={params.sort}
                  ></Select>
                </div>
                {/* <div className='separate'></div> */}
                <div className='filter-item filter-category'>
                  <p className='filter__title'>Type</p>
                  <ul className='filter__list'>
                    {categoryList?.map((item) => (
                      <li key={item} className='filter__item'>
                        <input
                          onChange={handleCateChange}
                          className='filter__input'
                          type='radio'
                          name='category'
                          id={item}
                          checked={selectedFilter.category === item}
                        />
                        <label className='filter__label' htmlFor={item}>
                          {item}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='separate'></div>
                <div className='filter-item filter-brand'>
                  <p className='filter__title'>Brand</p>
                  <ul className='filter__list'>
                    {brandList?.map((item) => (
                      <li key={item} className='filter__item'>
                        <input
                          onChange={handleCateChange}
                          className='filter__input'
                          type='radio'
                          name='brand'
                          id={item}
                          checked={selectedFilter.brand === item}
                        />
                        <label className='filter__label' htmlFor={item}>
                          {item}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='separate'></div>
                <div className='filter-item filter-brand'>
                  <p className='filter__title'>Origin</p>
                  <ul className='filter__list'>
                    {originList?.map((item) => (
                      <li key={item} className='filter__item'>
                        <input
                          onChange={handleCateChange}
                          className='filter__input'
                          type='radio'
                          name='origin'
                          id={item}
                          checked={selectedFilter.origin === item}
                        />
                        <label className='filter__label' htmlFor={item}>
                          {item}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='filter__overlay d-none d-lg-block' />
            </div>
            <div className='col-10 col-lg-9 col-md-12'>
              <div className='product-content'>
                <div className='product-content__top'>
                  <h3 onClick={() => setIsFilterOpen(!isFilterOpen)} className='filter__header-title d-md-flex d-none'>
                    <img src={FilterIcon} alt='filter-icon' className='filter_icon icon' />
                    Filter
                  </h3>
                  <h3 className='product-content__title'>{`Product List (${data?.total || 0})`}</h3>
                  <div className='product-sort d-block d-md-none'>
                    <span>Sort by: </span>
                    <Select
                      options={selectOption}
                      onChange={handleSortBy}
                      style={{ width: 160 }}
                      value={params.sort}
                    ></Select>
                  </div>
                </div>
                <div className='product-list row row-cols-4 row-cols-lg-2 row-cols-md-2 row-cols-sm-2 g-2'>
                  {isFetching ? (
                    <>
                      <ProductSkeleton />
                    </>
                  ) : (
                    <>
                      {productList?.map((item, index) => (
                        <div key={index} className='col'>
                          <ProductItem product={item} />
                        </div>
                      ))}
                    </>
                  )}
                </div>
                {productList?.length === 0 && (
                  <NotFound
                    icon={<LuPackageX className='not-found__icon' />}
                    title='No product found'
                    description="We couldn't find any products matching your criteria"
                  ></NotFound>
                )}
              </div>
              <div className='product-pagination'>
                {productList?.length > 0 && (
                  <Pagination current={params.page} total={data?.total} pageSize={8} onChange={handlePagination} />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Products
