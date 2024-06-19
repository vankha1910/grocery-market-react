import { Link } from 'react-router-dom'
import AuthLayout from '../../../layouts/AuthLayout'
import { ForgotIntro, FormErrorIcon, GoogleIcon, MessageIcon } from '~/assets'
const index = () => {
  const authHeading = `Reset your password`
  const authDesc = `Enter your email and we'll send you a link to reset your password.`
  return (
    <AuthLayout introImg={ForgotIntro} authHeading={authHeading} authDesc={authDesc}>
      <>
        <form action='/login' className='form auth__form'>
          <div className='form__group'>
            <div className='form__text-input'>
              <input type='email' name='' id='' placeholder='Email' className='form__input' autoFocus required />
              <img src={MessageIcon} alt='' className='form__input-icon' />
              <img src={FormErrorIcon} alt='' className='form__input-icon-error' />
            </div>
            <p className='form__error'>Email is not in correct format</p>
          </div>
          <div className='form__group auth__btn-group'>
            <button className='btn btn--primary auth__btn form__submit-btn'>Reset password</button>
          </div>
        </form>
        <p className='auth__text'>
          <Link to='/login' className='auth__link auth__text-link'>
            Back to Sign In
          </Link>
        </p>
      </>
    </AuthLayout>
  )
}

export default index
