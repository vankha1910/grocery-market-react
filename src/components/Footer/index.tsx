import './footer.scss'
import Logo from '../Logo'
import { FacebookIcon, LinkedinIcon, TiktokIcon, TwitterIcon, YoutubeIcon } from '~/assets'
import { Link } from 'react-router-dom'
const index = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer__row'>
          {/* Footer column 1 */}
          <div className='footer__col'>
            {/* Logo */}
            <Logo isFooter></Logo>
            {/* <p className='footer__desc'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, maxime et veniam eligendi rem voluptatibus.
            </p>
            <p className='footer__help-text'>Receive product news and updates.</p> */}
            {/* <form action='' className='footer__form'>
              <input type='text' className='footer__input' placeholder='Email address' />
              <button className='btn btn--primary'>SEND</button>
            </form> */}
          </div>
          {/* Footer column 2 */}
          <div className='footer__col'>
            <h3 className='footer__heading'>Shop</h3>
            <ul className='footer__list'>
              <li>
                <Link to='#' className='footer__link'>
                  All Departments
                </Link>
              </li>
              <li>
                <Link to='#' className='footer__link'>
                  Fashion Deals
                </Link>
              </li>
              <li>
                <Link to='#' className='footer__link'>
                  Electronics Discounts
                </Link>
              </li>
              <li>
                <Link to='#' className='footer__link'>
                  Home &amp; Living Specials
                </Link>
              </li>
              <li>
                <Link to='#' className='footer__link'>
                  Beauty Bargains
                </Link>
              </li>
            </ul>
          </div>
          {/* Footer column 3 */}
          <div className='footer__col'>
            <h3 className='footer__heading'>Support</h3>
            <ul className='footer__list'>
              <li>
                <Link to='#' className='footer__link'>
                  Store locator
                </Link>
              </li>
              <li>
                <Link to='#' className='footer__link'>
                  Order status
                </Link>
              </li>
            </ul>
          </div>
          {/* Footer column 4 */}
          <div className='footer__col'>
            <h3 className='footer__heading'>Company</h3>
            <ul className='footer__list'>
              <li>
                <Link to='#' className='footer__link'>
                  Customer Service
                </Link>
              </li>
              <li>
                <Link to='#' className='footer__link'>
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to='#' className='footer__link'>
                  Privacy
                </Link>
              </li>
              <li>
                <Link to='#' className='footer__link'>
                  Careers
                </Link>
              </li>
              <li>
                <Link to='#' className='footer__link'>
                  About
                </Link>
              </li>
              <li>
                <Link to='#' className='footer__link'>
                  Affiliates
                </Link>
              </li>
            </ul>
          </div>
          {/* Footer column 5 */}
          <div className='footer__col' id='contact'>
            <h3 className='footer__heading'>Contact</h3>
            <ul className='footer__list'>
              <li>
                <p className='footer__label'>Email</p>
                <Link to='mailto:contact@grocerymart.com' className='footer__link'>
                  {' '}
                  contact@grocerymart.com{' '}
                </Link>
              </li>
              <li>
                <p className='footer__label'>Hotline</p>
                <Link to='tel:18008888' className='footer__link'>
                  18008888
                </Link>
              </li>
              <li>
                <p className='footer__label'>Address</p>
                <p className='footer__text'>
                  No. 11D, Lot A10, Nam Trung Yen urban area, Yen Hoa Ward, Cau Giay District, City. Hanoi
                </p>
              </li>
              <li>
                <p className='footer__label'>Hours</p>
                <p className='footer__text'>M - F 08:00am - 06:00pm</p>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer__bottom'>
          <p className='footer__copyright'>© 2010 - 2025 Grocery Mart. All rights reserved.</p>
          <div className='footer__socials'>
            <Link to='#' className='footer__social-link footer__social-link--facebook'>
              <img src={FacebookIcon} alt='' className='footer__social-icon' />
            </Link>
            <Link to='#' className='footer__social-link footer__social-link--youtube'>
              <img src={YoutubeIcon} alt='' className='footer__social-icon' />
            </Link>
            <Link to='#' className='footer__social-link footer__social-link--tiktok'>
              <img src={TiktokIcon} alt='' className='footer__social-icon' />
            </Link>
            <Link to='#' className='footer__social-link footer__social-link--twitter'>
              <img src={TwitterIcon} alt='' className='footer__social-icon' />
            </Link>
            <Link to='#' className='footer__social-link footer__social-link--linkedin'>
              <img src={LinkedinIcon} alt='' className='footer__social-icon' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
