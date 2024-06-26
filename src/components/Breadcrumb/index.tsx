import { ArrowRight } from '~/assets'
import './breadcrumb.scss'
import { Link } from 'react-router-dom'
interface BreadcrumbProps {
  breadcrumbArray: string[]
}
const index = ({ breadcrumbArray }: BreadcrumbProps) => {
  const lower = (str: string) => str.toLowerCase()
  return (
    <ul className='breadcrumbs'>
      {breadcrumbArray.map((item, index) => (
        <li key={index}>
          <Link className='breadcrumbs__link' to={`/${lower(item)}`}>
            {item}
            {index !== breadcrumbArray.length - 1 && <img alt='' src={ArrowRight} />}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default index
