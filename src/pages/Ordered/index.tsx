import { Link } from 'react-router-dom'
import './ordered.scss'
import { CheckCompleted } from '~/assets'

const index = () => {
  return (
    <main className='checkout-page'>
      <div className='ordered ordered-container'>
        <img src={CheckCompleted} alt='' className='ordered__img' />
        <p className='ordered__title'>Thank you for your ordering!</p>
        <p className='ordered__desc'>We will send you an email shortly with the details of your order.</p>
        <div className='ordered__action'>
          <Link to='/my-order' className='btn btn--text ordered__btn'>
            View order
          </Link>
          <Link to='/products' className='btn btn--primary btn--no-margin ordered__btn'>
            Continue shopping
          </Link>
        </div>
      </div>
    </main>
  )
}

export default index
