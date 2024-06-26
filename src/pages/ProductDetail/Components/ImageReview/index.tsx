import { useState } from 'react'
import './imageReview.scss'
interface ImageReviewProps {
  listProductImage: string[]
}
const ImageReview = ({ listProductImage }: ImageReviewProps) => {
  const [currentImage, setCurrentImage] = useState(listProductImage[0])
  const handleHover = (image: string) => {
    setCurrentImage(image)
  }
  return (
    <div className='prod-preview'>
      <div className='prod-preview__list'>
        <div className='prod-preview__item'>
          <img alt='' className='prod-preview__img' src={currentImage} />
        </div>
      </div>
      <div className='prod-preview__thumbs'>
        {listProductImage?.map((image, index) => (
          <img
            onMouseEnter={() => handleHover(image)}
            key={index}
            alt=''
            className={`prod-preview__thumb-img ${currentImage === image ? 'prod-preview__thumb-img--current' : ''}`}
            src={image}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageReview
