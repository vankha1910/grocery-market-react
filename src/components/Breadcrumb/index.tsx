import { ArrowRight } from '~/assets'
import './breadcrumb.scss'
interface BreadcrumbProps {
  breadcrumbArray: string[]
}
const index = ({ breadcrumbArray }: BreadcrumbProps) => {
  return (
    <ul className='breadcrumbs'>
      {breadcrumbArray.map((item, index) => (
        <li key={index}>
          <a className='breadcrumbs__link' href='#!'>
            {item}
            {index !== breadcrumbArray.length - 1 && <img alt='' src={ArrowRight} />}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default index
