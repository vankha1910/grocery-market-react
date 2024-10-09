import { Link } from 'react-router-dom'
import AuthLayout from '../../../layouts/AuthLayout'
import { GoogleIcon, LockIcon, LoginIntro, MessageIcon } from '~/assets'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import useSignIn from '~/features/auth/useLogin'
import FullPageSpin from '~/components/FullPageSpin'
const introDesc = `The best of luxury brand values, high quality products, and innovative services`
const authHeading = `Hello Again!`
const authDesc = `Welcome back to sign in. As a returning customer, you have access to your previously saved all information.`

type FormData = {
  email: string
  password: string
}

const Login = () => {
  const signIn = useSignIn()
  const [showPassword, setShowPassword] = useState(false)

  const loginSchema = yup.object().shape({
    email: yup.string().email('Email is not in correct format !').required('Email is required !'),
    password: yup.string().required('Password is required !').min(6, 'Password must be at least 6 characters !')
  })
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema)
  })

  const onSubmit = handleSubmit((data) => {
    signIn.mutate(data)
  })

  return (
    <>
      <FullPageSpin isSpinning={signIn.isPending}></FullPageSpin>
      <AuthLayout introImg={LoginIntro} introDesc={introDesc} authHeading={authHeading} authDesc={authDesc}>
        <form onSubmit={onSubmit} action='/' className='form auth__form'>
          <div className='form__group'>
            <div className='form__text-input'>
              <input type='email' placeholder='Email' className='form__input' autoFocus {...register('email')} />
              <img src={MessageIcon} alt='' className='form__input-icon' />
            </div>
            {errors?.email && <p className='form__error'>{errors?.email.message}</p>}
          </div>
          <div className='form__group'>
            <div className='form__text-input'>
              <input
                type={showPassword ? 'text' : 'password'}
                id=''
                placeholder='Password'
                className='form__input'
                {...register('password')}
              />
              <img
                src={LockIcon}
                alt=''
                className='form__input-icon pointer'
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
            {errors?.password && <p className='form__error'>{errors?.password.message}</p>}
          </div>
          <div className='form__group form__group--inline'>
            <Link to='/forgot-password' className='auth__link form__pull-right'>
              Forgot password?
            </Link>
          </div>
          <div className='form__group auth__btn-group'>
            <button type='submit' className='btn btn--primary auth__btn form__submit-btn'>
              Sign In
            </button>
            <button className='btn btn--outline auth__btn btn--no-margin'>
              <img src={GoogleIcon} alt='' className='btn__icon icon' />
              Sign in with Google
            </button>
          </div>
        </form>
        <p className='auth__text'>
          Don’t have an account yet?
          <Link to='/register' className='auth__link auth__text-link'>
            {' '}
            Sign Up
          </Link>
        </p>
      </AuthLayout>
    </>
  )
}

export default Login
