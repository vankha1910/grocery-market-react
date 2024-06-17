import { Avatar, CartIcon, HeartIcon, SearchIcon } from '~/assets'
import './topAction.scss'
const index = () => {
  return (
    <div className='top-act'>
      <div className='top-act__group top-act__group--single'>
        <button className='top-act__btn'>
          <img className='icon top-act__icon' src={SearchIcon} alt='Search icon' />
        </button>
      </div>
      <div className='top-act__group'>
        <a href='./favourite.html' className='top-act__btn'>
          <img className='icon top-act__icon' src={HeartIcon} />
          <span className='top-act__title'>03</span>
        </a>
        <div className='top-act__separate' />
        <a href='./checkout.html' className='top-act__btn'>
          <img className='icon top-act__icon' src={CartIcon} />
          <span className='top-act__title'>$65.54</span>
        </a>
      </div>
      <div className='top-act__user'>
        <img className='top-act__avatar' src={Avatar} alt='' />
      </div>
    </div>
  )
}

export default index
