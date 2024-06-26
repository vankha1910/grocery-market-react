import { EditIcon } from '~/assets'
import './styles.scss'

type AddressCardProps = {
  name: string
  address: string
  defaultAddress: boolean
}
const index = ({ address }: { address: AddressCardProps }) => {
  return (
    <article className='address-card'>
      <div className='address-card__left'>
        <div className='address-card__choose'>
          <label className='cart-info__checkbox'>
            <input
              type='radio'
              name='shipping-address'
              defaultChecked={address.defaultAddress}
              className='cart-info__checkbox-input'
            />
          </label>
        </div>
        <div className='address-card__info'>
          <h3 className='address-card__title'>{address?.name}</h3>
          <p className='address-card__desc'>{address?.address}</p>
          <ul className='address-card__list'>
            <li className='address-card__list-item'>Shipping</li>
            <li className='address-card__list-item'>Delivery from store</li>
          </ul>
        </div>
      </div>
      <div className='address-card__right'>
        <div className='address-card__ctrl'>
          <button className='cart-info__edit-btn'>
            <img className='icon' src={EditIcon} alt='' />
            Edit
          </button>
        </div>
      </div>
    </article>
  )
}

export default index
