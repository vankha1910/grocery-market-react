import MainLayout from '../../layouts/MainLayout'
import SlideShow from './Components/SlideShow'
import Category from './Components/Category'
import ProductList from './Components/ProductList'
import './home.scss'
const HomePage = () => {
  return (
    <MainLayout>
      <div className='home container'>
        <SlideShow></SlideShow>
        <Category></Category>
        <ProductList></ProductList>
      </div>
    </MainLayout>
  )
}

export default HomePage
