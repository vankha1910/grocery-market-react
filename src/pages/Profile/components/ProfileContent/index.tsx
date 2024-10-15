import { getProfileFromLS } from '~/utils'
import PaymentCard from '../PaymentCard'
import {
  LocationIcon,
  MessageIcon,
  PhoneIcon,
  PlusIcon,
  leafBgIcon,
  leafIcon,
  planeBgIcon,
  planeIcon,
  productImage1,
  productImage2,
  ProfileIcon
} from '~/assets'
const index = () => {
  const user = getProfileFromLS()
  return (
    <div className='cart-info'>
      <div className='row gy-3'>
        <div className='col-12'>
          <h2 className='cart-info__heading'>My Wallet</h2>
          <p className='cart-info__desc profile__desc'>Payment methods</p>
          <div className='row gy-md-2 row-cols-3 row-cols-xl-2 row-cols-lg-1'>
            <div className='col'>
              <PaymentCard
                cardType='FeatherCard'
                cartNumber='1234 4567 8901 2221'
                cardOwner='Imran Khan'
                cardExpired='10/22'
                cartImgIcon={planeIcon}
                cartImgBg={planeBgIcon}
                background='#1e2e69'
              ></PaymentCard>
            </div>
            <div className='col'>
              <PaymentCard
                cardType='FeatherCard'
                cartNumber='1234 4567 2221 8901'
                cardOwner='Imran Khan'
                cardExpired='10/22'
                cartImgIcon={leafIcon}
                cartImgBg={leafBgIcon}
                background='#354151'
              ></PaymentCard>
            </div>
            <div className='col'>
              <button className='new-card'>
                <img alt='' className='new-card__icon icon' src={PlusIcon} />
                <p className='new-card__text'>Add New Card</p>
              </button>
            </div>
          </div>
        </div>
        <div className='col-12'>
          <h2 className='cart-info__heading'>Account info</h2>
          <p className='cart-info__desc profile__desc'>Addresses, contact information</p>
          <div className='row gy-md-2 row-cols-2 row-cols-lg-1'>
            <div className='col'>
              <article className='account-info'>
                <div className='account-info__icon'>
                  <img alt='' className='icon' src={MessageIcon} />
                </div>
                <div>
                  <h3 className='account-info__title'>Email Address</h3>
                  <p className='account-info__desc'>{user?.email}</p>
                </div>
              </article>
            </div>
            <div className='col'>
              <article className='account-info'>
                <div className='account-info__icon'>
                  <img alt='' className='icon' src={ProfileIcon} />
                </div>
                <div>
                  <h3 className='account-info__title'>Full name</h3>
                  <p className='account-info__desc'>{user?.name}</p>
                </div>
              </article>
            </div>
            <div className='col'>
              <article className='account-info'>
                <div className='account-info__icon'>
                  <img alt='' className='icon' src={PhoneIcon} />
                </div>
                <div>
                  <h3 className='account-info__title'>Phone number</h3>
                  <p className='account-info__desc'>{user?.phoneNumber}</p>
                </div>
              </article>
            </div>
            <div className='col'>
              <article className='account-info'>
                <div className='account-info__icon'>
                  <img alt='' className='icon' src={LocationIcon} />
                </div>
                <div>
                  <h3 className='account-info__title'>Add an address</h3>
                  <p className='account-info__desc'>{user?.address}</p>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className='col-12'>
          <h2 className='cart-info__heading'>Lists</h2>
          <p className='cart-info__desc profile__desc'>2 items - Primary</p>
          <article className='favourite-item'>
            <img alt='' className='favourite-item__thumb' src={productImage1} />
            <div>
              <h3 className='favourite-item__title'>Coffee Beans - Espresso Arabica and Robusta Beans</h3>
              <div className='favourite-item__content'>
                <span className='favourite-item__price'>$47.00</span>
                <button className='btn btn--primary btn--rounded'>Add to cart</button>
              </div>
            </div>
          </article>
          <div
            className='separate'
            style={{
              margin: '20px'
            }}
          />
          <article className='favourite-item'>
            <img alt='' className='favourite-item__thumb' src={productImage2} />
            <div>
              <h3 className='favourite-item__title'>Lavazza Coffee Blends - Try the Italian Espresso</h3>
              <div className='favourite-item__content'>
                <span className='favourite-item__price'>$53.00</span>
                <button className='btn btn--primary btn--rounded'>Add to cart</button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default index
