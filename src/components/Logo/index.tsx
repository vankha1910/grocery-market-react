import { Logo } from '~/assets'
import './logo.scss'
const index = () => {
  return (
    <a href='./index.html' className='logo top-bar__logo'>
      <img src={Logo} alt='grocery market' className='logo__img' />
      <h1 className='logo__title'>grocerymart</h1>
    </a>
  )
}

export default index
