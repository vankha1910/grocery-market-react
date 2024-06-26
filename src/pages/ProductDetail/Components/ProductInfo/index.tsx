import { ArrowDownLarge, BagIcon, CartIcon, DocumentIcon, HeartIcon, StarIcon } from '~/assets'
import './productInfo.scss'

const index = () => {
  return (
    <form action='' className='form'>
      <section className='prod-info'>
        <h1 className='prod-info__heading'>Coffee Beans - Espresso Arabica and Robusta Beans</h1>
        <div className='row'>
          <div className='col-5 col-xxl-6 col-xl-12'>
            <div className='prod-prop'>
              <img alt='' className='prod-prop__icon' src={StarIcon} />
              <h4 className='prod-prop__title'>(3.5) 1100 reviews</h4>
            </div>
            <label className='form__label prod-info__label' htmlFor=''>
              Size/Weight
            </label>
            <div className='filter__form-group'>
              <div className='form__select-wrap'>
                <div
                  className='form__select'
                  style={{
                    width: '146px'
                  }}
                >
                  500g
                  <img alt='' className='form__select-arrow icon' src={ArrowDownLarge} />
                </div>
                <div className='form__select'>
                  Gram
                  <img alt='' className='form__select-arrow icon' src={ArrowDownLarge} />
                </div>
              </div>
            </div>
            <div className='filter__form-group'>
              <div className='form__tags'>
                <button className='form__tag prod-info__tag'>Small</button>
                <button className='form__tag prod-info__tag'>Medium</button>
                <button className='form__tag prod-info__tag'>Large</button>
              </div>
            </div>
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
              <div className='prod-info__card'>
                <div className='prod-info__row'>
                  <span className='prod-info__price'>$500.00</span>
                  <span className='prod-info__tax'>10%</span>
                </div>
                <p className='prod-info__total-price'>$540.00</p>
                <div className='prod-info__row'>
                  <button className='btn btn--primary prod-info__add-to-cart'>Add to cart</button>
                  <button className='like-btn prod-info__like-btn'>
                    <img alt='' className='like-btn__icon icon' src={HeartIcon} />
                    {/* <img alt='' className='like-btn__icon--liked' src='./assets/icons/heart-red.svg' /> */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  )
}

export default index
