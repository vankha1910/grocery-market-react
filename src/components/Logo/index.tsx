import { Link } from 'react-router-dom'
import { Logo } from '~/assets'
import './logo.scss'

interface LogoProps {
  isFooter?: boolean
}
const index = ({ isFooter = false }: LogoProps) => {
  return (
    <Link to='/' className={`logo  ${isFooter ? 'footer__logo' : 'top-bar__logo '}`}>
      <img src={Logo} alt='mycoffee logo' className='logo__img' />
      <h1 className='logo__title'>mycoffee</h1>
    </Link>
  )
}

export default index
