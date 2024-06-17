import './category.scss'
import { categoryProduct1, categoryProduct2, categoryProduct3 } from '~/assets'
import CategoryItem from '../CategoryItem'

const categoryList = [
  {
    img: categoryProduct1,
    price: '$24 - $150',
    desc: 'New sumatra mandeling coffe blend'
  },
  {
    img: categoryProduct2,
    price: '$32 - $160',
    desc: 'Lavazza top class whole bean coffee blend'
  },
  {
    img: categoryProduct3,
    price: '$32 - $160',
    desc: 'Lavazza top class whole bean coffee blend'
  }
]
const index = () => {
  return (
    <section className='home__container category'>
      <h2 className='category__heading'>Browse Categories</h2>
      <div className='home__cate row row-cols-3 row-cols-md-1'>
        {categoryList.map((item, index) => (
          <div key={index} className='col'>
            <CategoryItem categoryItem={item}></CategoryItem>
          </div>
        ))}
      </div>
    </section>
  )
}

export default index
