import './categoryItem.scss'

type CategoryItemProps = {
  categoryItem: {
    img: string
    price: string
    desc: string
  }
}
const index = ({ categoryItem }: CategoryItemProps) => {
  return (
    <article className='cate-item'>
      <img src={categoryItem?.img} alt='' className='cate-item__img' />
      <div className='cate-item__info'>
        <h3 className='cate-item__title'>{categoryItem?.price}</h3>
        <p className='cate-item__desc'>{categoryItem?.desc}</p>
      </div>
    </article>
  )
}

export default index
