import AuthLayout from '../../../layouts/AuthLayout'
import { LockIcon, LoginIntro } from '~/assets'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Spin } from 'antd'
import { useChangePassword } from '~/features/auth/useChangePassword'
import { useEffect } from 'react'
const introDesc = `The best of luxury brand values, high quality products, and innovative services`
const authHeading = `Change Password`
const authDesc = `  `

type FormData = {
  currentPassword: string
  newPassword: string
  confirmNewPassword: string
}
const ChangePassword = () => {
  const changePassword = useChangePassword()

  const registerSchema = yup.object().shape({
    currentPassword: yup.string().required('Password is required !').min(6, 'Password must be at least 6 characters !'),
    newPassword: yup.string().required('Password is required !').min(6, 'Password must be at least 6 characters !'),
    confirmNewPassword: yup
      .string()
      .required('Password is required !')
      .min(6, 'Password must be at least 6 characters !')
    // .equals([yup.ref('password')], 'Passwords must match !')
  })
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<FormData>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    }
  })

  const onSubmit = handleSubmit((data) => {
    changePassword.mutate(data)
  })

  useEffect(() => {
    document.title = 'Change Password | Coffee shop'
  }, [])
  return (
    <AuthLayout introImg={LoginIntro} introDesc={introDesc} authHeading={authHeading} authDesc={authDesc}>
      <>
        <form autoComplete='off' onSubmit={onSubmit} action='/' className='form auth__form'>
          <div className='form__group'>
            <div className='form__text-input'>
              <input
                type='password'
                placeholder='Current Password'
                className='form__input'
                autoFocus
                {...register('currentPassword')}
              />
              <img src={LockIcon} alt='' className='form__input-icon' />
              {/* <img src={FormErrorIcon} alt='' className='form__input-icon-error' /> */}
            </div>
            {errors?.currentPassword && <p className='form__error'>{errors?.currentPassword?.message}</p>}
          </div>
          <div className='form__group'>
            <div className='form__text-input'>
              <input type='password' placeholder='New Password' className='form__input' {...register('newPassword')} />
              <img src={LockIcon} alt='' className='form__input-icon' />
              {/* <img src={FormErrorIcon} alt='' className='form__input-icon-error' /> */}
            </div>
            {errors?.newPassword && <p className='form__error'>{errors?.newPassword?.message}</p>}
          </div>
          <div className='form__group'>
            <div className='form__text-input'>
              <input
                type='password'
                placeholder='Confirm password'
                className='form__input'
                {...register('confirmNewPassword')}
              />
              <img src={LockIcon} alt='' className='form__input-icon' />
              {/* <img src={FormErrorIcon} alt='' className='form__input-icon-error' /> */}
            </div>
            {errors?.confirmNewPassword && <p className='form__error'>{errors?.confirmNewPassword?.message}</p>}
          </div>
          <div className='form__group form__group--inline'></div>
          <div className='form__group auth__btn-group'>
            <button disabled={changePassword?.isPending} className='btn btn--primary auth__btn form__submit-btn'>
              {changePassword?.isPending ? <Spin></Spin> : 'Change Password'}
            </button>
          </div>
        </form>
      </>
    </AuthLayout>
  )
}

export default ChangePassword
