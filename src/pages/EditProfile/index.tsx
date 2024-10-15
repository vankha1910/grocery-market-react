import { IoArrowBackSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import useUpdateInfo from '~/features/user/useUpdateInfo'
import FullPageSpin from '~/components/FullPageSpin'
import { Spin } from 'antd'
import { useSelector } from 'react-redux'
import { RootState } from '~/store'

type FormData = {
  email: string
  name: string
  address: string
  phoneNumber: string
}
const EditProfile = () => {
  // const user = getProfileFromLS()
  const user = useSelector((state: RootState) => state.user.user)
  const { updateInfo, isPending } = useUpdateInfo()
  const formSchema = yup.object().shape({
    name: yup.string().required('Name is required !'),
    email: yup.string().email('Email is not in correct format !').required('Email is required !'),
    phoneNumber: yup
      .string()
      .matches(/^[0-9]+$/, 'Phone number must contain only digits')
      .min(10, 'Phone number must be at least 10 digits')
      .max(15, 'Phone number can be up to 15 digits')
      .required('Phone number is required !'),
    address: yup.string().required('Address is required !')
  })

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<FormData>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      name: user?.name || '',
      phoneNumber: user?.phoneNumber || '',
      address: user?.address || '',
      email: user?.email || ''
    }
  })

  const onSubmit = handleSubmit((data) => {
    if (
      data.name === user?.name &&
      data.email === user?.email &&
      data.address === user?.address &&
      data.phoneNumber === user?.phoneNumber
    )
      return
    updateInfo(data)
  })
  return (
    <>
      <FullPageSpin isSpinning={isPending}></FullPageSpin>
      <div className='cart-info' style={{ flex: 1 }}>
        <div className='row gy-3'>
          <div className='col-12'>
            <div>
              <h2 className='cart-info__heading'>
                <Link to='/profile'>
                  <IoArrowBackSharp className='back-icon'></IoArrowBackSharp>
                </Link>
                Personal info
              </h2>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: 16 }}>
                <form autoComplete='off' onSubmit={onSubmit} action='/' className='form auth__form'>
                  <div className='row row-cols-2 row-cols-sm-1 g-2'>
                    <div className='col'>
                      <div className='form__text-input'>
                        <input type='text' placeholder='Name' className='form__input' autoFocus {...register('name')} />
                      </div>
                      {errors?.name && <p className='form__error'>{errors?.name?.message}</p>}
                    </div>
                    <div className='col'>
                      <div className='form__text-input'>
                        <input
                          disabled
                          type='email'
                          placeholder='Email'
                          className='form__input'
                          {...register('email')}
                        />
                      </div>
                      {/* {errors?.address && <p className='form__error'>{errors?.address?.message}</p>} */}
                    </div>
                    <div className='col'>
                      <div className='form__text-input'>
                        <input
                          type='text'
                          placeholder='Phone number'
                          className='form__input'
                          {...register('phoneNumber')}
                        />
                      </div>
                      {errors?.phoneNumber && <p className='form__error'>{errors?.phoneNumber?.message}</p>}
                    </div>
                    <div className='col'>
                      <div className='form__text-input'>
                        <input type='text' placeholder='Address' className='form__input' {...register('address')} />
                      </div>
                      {errors?.address && <p className='form__error'>{errors?.address?.message}</p>}
                    </div>
                  </div>

                  <div className='auth__btn-group'>
                    <button
                      style={{
                        marginLeft: 'auto'
                      }}
                      className='btn btn--primary form__submit-btn'
                    >
                      {isPending ? <Spin /> : 'Update'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}></div>
        </div>
      </div>
    </>
  )
}

export default EditProfile
