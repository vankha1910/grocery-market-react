import { slideImage1, slideImage1Mb } from '~/assets'
import './slideShow.scss'
// import ImageGallery from 'react-image-gallery'

// const images = [
//   {
//     original: 'https://picsum.photos/id/1018/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1018/250/150/'
//   },
//   {
//     original: 'https://picsum.photos/id/1015/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1015/250/150/'
//   },
//   {
//     original: 'https://picsum.photos/id/1019/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1019/250/150/'
//   }
// ]
const index = () => {
  return (
    <section className='home__container slideshow'>
      <div className='slideshow__wrapper'>
        <a href='#'>
          <picture>
            <source media='(max-width: 767.98px)' srcSet={slideImage1Mb} />
            <img className='slideshow__image' src={slideImage1} alt='' />
          </picture>
        </a>
      </div>
      <div className='slideshow__page'>
        <span className='slideshow__num'>1</span>
        <span className='slideshow__slider' />
        <span className='slideshow__num'>5</span>
      </div>
    </section>
  )
}

export default index
