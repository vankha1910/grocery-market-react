import { Link } from 'react-router-dom'
import AuthLayout from '../../../layouts/AuthLayout'
import { FormErrorIcon, GoogleIcon, LockIcon, LoginIntro, MessageIcon } from '~/assets'
const index = () => {
  const introDesc = `The best of luxury brand values, high quality products, and innovative services`
  const authHeading = `Hello Again!`
  const authDesc = `Welcome back to sign in. As a returning customer, you have access to your previously saved all information.`
  return (
    <AuthLayout introImg={LoginIntro} introDesc={introDesc} authHeading={authHeading} authDesc={authDesc}>
      <form action='/' className='form auth__form'>
        <div className='form__group'>
          <div className='form__text-input'>
            <input type='email' name='' id='' placeholder='Email' className='form__input' autoFocus required />
            <img src={MessageIcon} alt='' className='form__input-icon' />
            <img src={FormErrorIcon} alt='' className='form__input-icon-error' />
          </div>
          <p className='form__error'>Email is not in correct format</p>
        </div>
        <div className='form__group'>
          <div className='form__text-input'>
            <input
              type='password'
              name=''
              id=''
              placeholder='Password'
              className='form__input'
              required
              minLength={6}
            />
            <img src={LockIcon} alt='' className='form__input-icon' />
            <img src={FormErrorIcon} alt='' className='form__input-icon-error' />
          </div>
          <p className='form__error'>Password must be at least 6 characters</p>
        </div>
        <div className='form__group form__group--inline'>
          {/* <label className='form__checkbox'>
            <input type='checkbox' name='' id='' className='form__checkbox-input d-none' />
            <span className='form__checkbox-label'>Set as default card</span>
          </label> */}
          <Link to='/forgot-password' className='auth__link form__pull-right'>
            Forgot password?
          </Link>
        </div>
        <div className='form__group auth__btn-group'>
          <button className='btn btn--primary auth__btn form__submit-btn'>Sign In</button>
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
  )
}

export default index
