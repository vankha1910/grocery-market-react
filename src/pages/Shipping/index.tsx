import Breadcrumb from '../../components/Breadcrumb'
import CartList from '../../components/CartList'
import CartBottom from '../../components/CartBottom'
import CartSummary from '../../components/CartSummary'
import AddressCard from './components/AddressCard'
import { Modal } from 'antd'
import { useEffect, useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Address, AddressStateType } from '~/types/address.type'
import useCreateAddress from '~/features/address/useCreateAddress'
import PaymentMethod from './components/PaymentMethod'
import { useSelector } from 'react-redux'
import { RootState } from '~/store'

const breadcrumbArray = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Checkout',
    path: 'checkout'
  },

  {
    name: 'Shipping',
    path: 'shipping'
  }
]
type FormData = Omit<Address, '_id'>
const Shipping = () => {
  const { addressList } = useSelector<RootState>((state: RootState) => state.address) as AddressStateType

  const addressSchema = yup.object().shape({
    name: yup.string().required('Name is required !'),
    address: yup.string().required('Address is required !')
  })
  // const currentUser = getProfileFromLS()
  // const addressList = currentUser?.addresses

  const { createAddress, isSuccess } = useCreateAddress()
  const [showModal, setShowModal] = useState(false)

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<FormData>({
    resolver: yupResolver(addressSchema)
  })

  const onSubmit = handleSubmit((data) => {
    createAddress(data)
  })

  useEffect(() => {
    if (isSuccess) {
      setShowModal(false)
    }
  }, [isSuccess])
  return (
    <>
      <main className='checkout-page'>
        <div className='container'>
          {/* Search bar */}
          {/* <div className='checkout-container'>
          <div className='search-bar d-none d-md-flex'>
            <input type='text' name='' id='' placeholder='Search for item' className='search-bar__input' />
            <button className='search-bar__submit'>
              <img src='./assets/icons/search.svg' alt='' className='search-bar__icon icon' />
            </button>
          </div>
        </div> */}
          {/* Breadcrumbs */}
          <div className='checkout-container'>
            <Breadcrumb breadcrumbArray={breadcrumbArray}></Breadcrumb>
          </div>
          {/* Checkout content */}
          <div className='checkout-container'>
            <div className='row gy-xl-3'>
              <div className='col-8 col-xl-12'>
                <div className='cart-info'>
                  <h2 className='cart-info__heading'>1. Shipping, arrives between Mon, May 16—Tue, May 24</h2>
                  <div className='cart-info__separate' />
                  {/* Checkout address */}
                  <div className='user-address'>
                    <div className='user-address__top'>
                      <div>
                        <h2 className='user-address__title'>Shipping address</h2>
                        <p className='user-address__desc'>Where should we deliver your order?</p>
                      </div>
                      <button
                        className='user-address__btn btn btn--primary btn--rounded btn--small'
                        onClick={() => setShowModal(true)}
                      >
                        <img src='./assets/icons/plus.svg' alt='' />
                        Add a new address
                      </button>
                    </div>
                    <div className='user-address__list'>
                      {addressList.map((address: Address, index: number) => (
                        <AddressCard index={index} address={address} key={address._id}></AddressCard>
                      ))}
                    </div>
                  </div>
                </div>

                <div className='cart-info'>
                  <h2 className='cart-info__heading'>2. Payment method</h2>
                  <PaymentMethod />
                </div>
                <div className='cart-info'>
                  <div className='cart-info__separate' />
                  <h2 className='cart-info__sub-heading'>Items details</h2>
                  <CartList></CartList>
                  <CartBottom></CartBottom>
                </div>
              </div>
              <div className='col-4 col-xl-12'>
                <CartSummary lastStep></CartSummary>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Modal className='modal-custom' open={showModal} onCancel={() => setShowModal(false)} footer={null}>
        <div className='modal__content'>
          <form onSubmit={onSubmit} className='form'>
            <h2 className='modal__heading'>Add new shipping address</h2>
            <div className='modal__body'>
              <div className='form__row'>
                <div className='form__group'>
                  <label htmlFor='name' className='form__label form__label--small'>
                    Name
                  </label>
                  <div className='form__text-input form__text-input--small'>
                    <input
                      type='text'
                      id='name'
                      placeholder='Name'
                      className='form__input'
                      minLength={2}
                      {...register('name')}
                    />
                  </div>
                  {errors?.name && <p className='form__error'>{errors?.name.message}</p>}
                </div>
                <div className='form__group'>
                  <label htmlFor='phone' className='form__label form__label--small'>
                    Phone
                  </label>
                  <div className='form__text-input form__text-input--small'>
                    <input type='tel' id='phone' placeholder='Phone' className='form__input' {...register('phone')} />
                  </div>
                  {errors?.phone && <p className='form__error'>{errors?.phone.message}</p>}
                </div>
              </div>
              <div className='form__group'>
                <label htmlFor='address' className='form__label form__label--small'>
                  Address
                </label>
                <div className='form__text-area'>
                  <textarea
                    id='address'
                    placeholder='Address (Area and street)'
                    className='form__text-area-input'
                    {...register('address')}
                  />
                </div>
                {errors?.address && <p className='form__error'>{errors?.address.message}</p>}
              </div>
            </div>
            <div className='modal__bottom'>
              <button
                onClick={() => setShowModal(false)}
                className='btn btn--small btn--text modal__btn js-toggle'
                toggle-target='#add-new-address'
              >
                Cancel
              </button>
              <button
                className='btn btn--small btn--primary modal__btn btn--no-margin js-toggle'
                toggle-target='#add-new-address'
                type='submit'
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  )
}

export default Shipping
