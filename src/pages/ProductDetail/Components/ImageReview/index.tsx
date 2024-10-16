import { useEffect, useState } from 'react'
import './imageReview.scss'
interface ImageReviewProps {
  listProductImage: string[]
}
const ImageReview = ({ listProductImage }: ImageReviewProps) => {
  const [currentImage, setCurrentImage] = useState('')
  const handleHover = (image: string) => {
    setCurrentImage(image)
  }

  useEffect(() => {
    if (listProductImage) {
      setCurrentImage(listProductImage[0])
    }
  }, [listProductImage])
  return (
    <div className='prod-preview'>
      <div className='prod-preview__list'>
        <div className='prod-preview__item'>
          <img alt='prod-preview-img' className='prod-preview__img' src={currentImage} />
        </div>
      </div>
      <div className='prod-preview__thumbs'>
        {listProductImage?.map((image, index) => (
          <img
            onMouseEnter={() => handleHover(image)}
            key={index}
            alt='prod-preview-img'
            className={`prod-preview__thumb-img ${currentImage === image ? 'prod-preview__thumb-img--current' : ''}`}
            src={image}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageReview
