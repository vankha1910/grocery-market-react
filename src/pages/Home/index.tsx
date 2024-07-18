import SlideShow from './Components/SlideShow'
import Category from './Components/Category'
import ProductList from './Components/ProductList'
import Hero from './Components/Hero'
import './home.scss'
const HomePage = () => {
  return (
    <div className='home '>
      <Hero></Hero>
      <Category></Category>
      <ProductList></ProductList>
    </div>
  )
}

export default HomePage
