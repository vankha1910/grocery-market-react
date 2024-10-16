import { Skeleton } from 'antd'
import './productSkeleton.scss'
const index = () => {
  return (
    <>
      {Array.from({ length: 8 }).map((_, index) => (
        <div className='col' key={index}>
          <SkeletonItem />
        </div>
      ))}
    </>
  )
}

const SkeletonItem = () => {
  return (
    <article className='product-card'>
      <div className='product-card__img-wrap'>
        <Skeleton.Image style={{ width: '100%' }} className='product-card__img-skeleton' active></Skeleton.Image>
      </div>
      <Skeleton.Input style={{ marginTop: 16, height: 20 }} className='product-card__title' active></Skeleton.Input>
      <Skeleton.Input style={{ height: 20, width: '100%' }} className='product-card__brand' active></Skeleton.Input>

      <div className='product-card__row'>
        {/* {<p className='product-card__price'>${product?.size[0]?.price ?? ''}</p>} */}
        <Skeleton.Input style={{ height: 20, width: '100%' }} className='product-card__price' active></Skeleton.Input>
        {/* <Skeleton.Input className='product-card__score' active></Skeleton.Input> */}
      </div>
    </article>
  )
}

export default index
