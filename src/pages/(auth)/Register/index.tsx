import { Link } from 'react-router-dom'
import AuthLayout from '../../../layouts/AuthLayout'
import { GoogleIcon, LockIcon, LoginIntro, MessageIcon } from '~/assets'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import useSignUp from '~/features/auth/useSignUp'
import { Spin } from 'antd'
import FullPageSpin from '~/components/FullPageSpin'
import { useEffect, useState } from 'react'
const introDesc = `The best of luxury brand values, high quality products, and innovative services`
const authHeading = `Sign Up`
const authDesc = `Let’s create your account and Shop like a pro and save money.`

type FormData = {
  email: string
  password: string
  confirmPassword: string
}
const Register = () => {
  const { signup, isPending } = useSignUp()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const registerSchema = yup.object().shape({
    email: yup
      .string()
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Email is not in correct format !')
      .email('Email is not in correct format !')
      .required('Email is required !'),
    password: yup.string().required('Password is required !').min(6, 'Password must be at least 6 characters !'),
    confirmPassword: yup
      .string()
      .required('Password is required !')
      .min(6, 'Password must be at least 6 characters !')
      .oneOf([yup.ref('password')], 'Passwords must match !')
  })
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<FormData>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  const onSubmit = handleSubmit((data) => {
    signup(data)
  })

  useEffect(() => {
    document.title = 'Register | Coffee shop'
  }, [])
  return (
    <>
      <FullPageSpin isSpinning={isPending}></FullPageSpin>
      <AuthLayout introImg={LoginIntro} introDesc={introDesc} authHeading={authHeading} authDesc={authDesc}>
        <>
          <form noValidate autoComplete='off' onSubmit={onSubmit} action='/' className='form auth__form'>
            <div className='form__group'>
              <div className='form__text-input'>
                <input type='email' placeholder='Email' className='form__input' autoFocus {...register('email')} />
                <img src={MessageIcon} alt='' className='form__input-icon' />
                {/* <img src={FormErrorIcon} alt='' className='form__input-icon-error' /> */}
              </div>
              {errors?.email && <p className='form__error'>{errors?.email?.message}</p>}
            </div>
            <div className='form__group'>
              <div className='form__text-input'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Password'
                  className='form__input'
                  {...register('password')}
                />
                <img
                  onClick={() => setShowPassword(!showPassword)}
                  src={LockIcon}
                  alt=''
                  className='form__input-icon'
                  style={{ cursor: 'pointer' }}
                />
                {/* <img src={FormErrorIcon} alt='' className='form__input-icon-error' /> */}
              </div>
              {errors?.password && <p className='form__error'>{errors?.password?.message}</p>}
            </div>
            <div className='form__group'>
              <div className='form__text-input'>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder='Confirm password'
                  className='form__input'
                  {...register('confirmPassword')}
                />
                <img
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  src={LockIcon}
                  alt=''
                  className='form__input-icon'
                  style={{ cursor: 'pointer' }}
                />
                {/* <img src={FormErrorIcon} alt='' className='form__input-icon-error' /> */}
              </div>
              {errors?.confirmPassword && <p className='form__error'>{errors?.confirmPassword?.message}</p>}
            </div>
            <div className='form__group form__group--inline'></div>
            <div className='form__group auth__btn-group'>
              <button disabled={isPending} className='btn btn--primary auth__btn form__submit-btn'>
                {isPending ? <Spin></Spin> : 'Sign Up'}
              </button>
              <button className='btn btn--outline auth__btn btn--no-margin'>
                <img src={GoogleIcon} alt='' className='btn__icon icon' />
                Sign up with Google
              </button>
            </div>
          </form>
          <p className='auth__text'>
            You have an account yet?
            <Link to='/login' className='auth__link auth__text-link'>
              {' '}
              Sign In
            </Link>
          </p>
        </>
      </AuthLayout>
    </>
  )
}

export default Register
