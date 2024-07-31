import { EditIcon } from '~/assets'
import './styles.scss'
import { Address } from '~/types/address.type'
import { useDispatch } from 'react-redux'
import { setAddress } from '~/features/cart/cartSlice'

const AddressCard = ({ address, index }: { address: Address; index: number }) => {
  const dispatch = useDispatch()
  return (
    <article className='address-card'>
      <div className='address-card__left'>
        <div className='address-card__choose'>
          <input
            type='radio'
            name='shipping-address'
            defaultChecked={index == 0}
            className='cart-info__checkbox-input'
            id={`address-${index}`}
            onChange={() => dispatch(setAddress(address))}
          />
        </div>
        <div className='address-card__info'>
          <label htmlFor={`address-${index}`} className='cart-info__checkbox'>
            <h3 className='address-card__title'>{address?.name}</h3>
            <p className='address-card__desc'>{address?.address}</p>
            <ul className='address-card__list'>
              <li className='address-card__list-item'>Shipping</li>
              <li className='address-card__list-item'>Delivery from store</li>
            </ul>
          </label>
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

export default AddressCard
