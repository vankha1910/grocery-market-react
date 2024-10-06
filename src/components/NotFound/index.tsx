import './notFound.scss'
import { Link } from 'react-router-dom'
const index = ({
  title,
  description,
  icon,
  showAction
}: {
  title: string
  description: string
  icon: React.ReactNode
  showAction?: boolean
}) => {
  return (
    <div className='not-found'>
      {icon}
      <h2 className='not-found__title'>{title}</h2>
      <p className='not-found__desc'>{description} </p>
      {showAction && (
        <Link to='/products' className='btn btn--primary hero__btn '>
          Shopping now
        </Link>
      )}
    </div>
  )
}

export default index
