import { ArrowRight } from '~/assets'
import './breadcrumb.scss'
const index = () => {
  return (
    <ul className='breadcrumbs'>
      <li>
        <a className='breadcrumbs__link' href='#!'>
          Departments
          <img alt='' src={ArrowRight} />
        </a>
      </li>
      <li>
        <a className='breadcrumbs__link' href='#!'>
          Coffee
          <img alt='' src={ArrowRight} />
        </a>
      </li>
      <li>
        <a className='breadcrumbs__link' href='#!'>
          Coffee Beans
          <img alt='' src={ArrowRight} />
        </a>
      </li>
      <li>
        <a className='breadcrumbs__link breadcrumbs__link--current' href='#!'>
          LavAzza
        </a>
      </li>
    </ul>
  )
}

export default index
