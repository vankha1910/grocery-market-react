import './styles.scss'
import { Address } from '~/types/address.type'
import { useDispatch, useSelector } from 'react-redux'
import { FaTrash } from 'react-icons/fa'
import { RootState } from '~/store'
import { setCurrentAddress } from '~/features/address/addressSlice'
import { Popconfirm } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import useDeleteAddress from '~/features/address/useDeleteAddress'
const AddressCard = ({ address, index }: { address: Address; index: number }) => {
  const { currentAddress } = useSelector((state: RootState) => state.address)
  const { onDeleteAddress } = useDeleteAddress(address._id)
  const dispatch = useDispatch()

  const handleSelectAddress = () => {
    dispatch(setCurrentAddress(address))
  }
  const handleDeleteAddress = async () => {
    onDeleteAddress()
  }

  return (
    <>
      <article className='address-card'>
        <div className='address-card__left'>
          <div className='address-card__choose'>
            <input
              type='radio'
              name='shipping-address'
              defaultChecked={currentAddress?._id === address?._id || index === 0}
              className='cart-info__checkbox-input'
              id={`address-${index}`}
              onChange={handleSelectAddress}
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
            {/* <button className='cart-info__edit-btn'>
              <FaPen></FaPen>
              Edit
            </button> */}

            <Popconfirm
              title='Delete the task'
              description='Are you sure to delete this address ?'
              icon={
                <QuestionCircleOutlined
                  style={{
                    color: 'red'
                  }}
                />
              }
              onConfirm={handleDeleteAddress}
              okText='Delete'
              cancelText='Cancel'
            >
              <button className='cart-info__edit-btn'>
                <FaTrash></FaTrash>
                {/* <img className='icon' src={EditIcon} alt='' /> */}
                Delete
              </button>
            </Popconfirm>
          </div>
        </div>
      </article>
      <hr />
    </>
  )
}

export default AddressCard
