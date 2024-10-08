import { BagIcon, CartIcon, DocumentIcon } from '~/assets'
import './productInfo.scss'
import { Select } from 'antd'
import { Link } from 'react-router-dom'
import ButtonIncrease from '~/components/ButtonIncrease'
import { Product } from '~/types/product.type'
import { useDispatch } from 'react-redux'
import { addToCart } from '~/features/cart/cartSlice'
import { useState } from 'react'
import * as _ from 'lodash'
const ProductInfo = ({ productInfo }: { productInfo: Product }) => {
  const [grindType, setGrindType] = useState(productInfo?.grindType[0] || 'whole bean')
  const [selectedSize, setSelectedSize] = useState(productInfo?.size[0]?.value || '250g')
  const [quantity, setQuantity] = useState(1)
  const selectedIndex = productInfo?.size.findIndex((item) => item.value === selectedSize)
  const currentProductPrice = productInfo?.size[selectedIndex]?.price || productInfo?.size[0]?.price
  const grindTypeOptions = productInfo?.grindType?.map((item) => {
    return { value: item, label: item }
  })
  const dispatch = useDispatch()
  const handleAddToCart = () => {
    const productItem = _.pick(productInfo, ['name', 'thumbImg', 'discount', 'grindType', 'size'])
    dispatch(
      addToCart({
        productId: productInfo._id,
        ...productItem,
        selectedSize: {
          ...productInfo.size[selectedIndex],
          quantity
        },
        selectedGrind: grindType
      })
    )
    setQuantity(1)
  }
  const handleIncrease = () => {
    setQuantity(quantity + 1)
  }
  const handleDecrease = () => {
    setQuantity(quantity - 1)
  }
  return (
    <section className='prod-info'>
      <Link to={`/products/?q={${productInfo?.brand}}`} className='prod-info__brand'>
        {productInfo?.brand}
      </Link>
      <h1 className='prod-info__heading'>{productInfo?.name}</h1>
      <div className='prod-info__price-wrap'>
        {!!productInfo?.discount && <p className='prod-info__old-price'>${currentProductPrice}</p>}
        <p className='prod-info__price'>
          $
          {selectedIndex !== -1
            ? productInfo?.discount
              ? (currentProductPrice - (currentProductPrice * productInfo?.discount) / 100).toFixed(2)
              : currentProductPrice
            : productInfo?.size[0]?.price}
          {productInfo?.discount !== 0 && <span className='prod-info__tax'>{productInfo?.discount}%</span>}
        </p>
      </div>
      <div className='prod-info__tags'>
        {productInfo?.tags.map((tag, index) => (
          <span className='prod-info__tag form__tag' key={index}>
            {tag}
          </span>
        ))}
      </div>
      <p className='prod-info__taste'>{productInfo?.taste}</p>
      <p className='prod-info__desc'>{productInfo?.description}</p>
      <div className='row'>
        <div className='col-5 col-xxl-6 col-xl-12'>
          {/* <div className='prod-prop'>
            <span>
              <img alt='' className='prod-prop__icon' src={StarIcon} />
              (3.5)
            </span>
            <h4 className='prod-prop__title'> 1100 reviews</h4>
          </div> */}
          <div>
            <label className='form__label prod-info__label' htmlFor=''>
              Size
            </label>
            <div className=''>
              <Select
                value={selectedSize}
                options={productInfo?.size}
                style={{ width: '100%', height: 45 }}
                onChange={(value) => {
                  setSelectedSize(value)
                }}
              ></Select>
            </div>
          </div>

          <div>
            <label className='form__label prod-info__label' htmlFor=''>
              Grind Type
            </label>
            <div className=''>
              <Select
                value={grindType || 'whole bean'}
                options={grindTypeOptions}
                style={{ width: '100%', height: 45 }}
                onChange={(value) => {
                  setGrindType(value)
                }}
              ></Select>
            </div>
          </div>

          <div className='prod-info__row filter__form-group d-flex g-8'>
            <ButtonIncrease
              quantity={quantity}
              isDisabledDecrease={quantity === 1}
              handleIncrease={handleIncrease}
              handleDecrease={handleDecrease}
            />
            <button onClick={handleAddToCart} className='btn btn--primary prod-info__add-to-cart'>
              Add to cart
            </button>
            {/* <button className='like-btn prod-info__like-btn'>
              <img alt='' className='like-btn__icon icon' src={HeartIcon} />
            </button> */}
          </div>
          {/* <div className='filter__form-group'>
            <div className='form__tags'>
              <button className='form__tag prod-info__tag'>Small</button>
              <button className='form__tag prod-info__tag'>Medium</button>
              <button className='form__tag prod-info__tag'>Large</button>
            </div>
          </div> */}
        </div>
        <div className='col-7 col-xxl-6 col-xl-12'>
          <div className='prod-props'>
            <div className='prod-prop'>
              <img alt='' className='prod-prop__icon icon' src={DocumentIcon} />
              <h4 className='prod-prop__title'>Compare</h4>
            </div>
            <div className='prod-prop'>
              <img alt='' className='prod-prop__icon icon' src={CartIcon} />
              <div>
                <h4 className='prod-prop__title'>Delivery</h4>
                <p className='prod-prop__desc'>From $6 for 1-3 days</p>
              </div>
            </div>
            <div className='prod-prop'>
              <img alt='' className='prod-prop__icon icon' src={BagIcon} />
              <div>
                <h4 className='prod-prop__title'>Pickup</h4>
                <p className='prod-prop__desc'>Out of 2 store, today</p>
              </div>
            </div>
            {/* <div className='prod-info__card'>
              <div className='prod-info__row'>
                <span className='prod-info__price'>$500.00</span>
              </div>
              <p className='prod-info__total-price'>$540.00</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductInfo
