import './previewItem.scss'

type PreviewItemProps = {
  productImage: string
  productName: string
  productPrice: number
}
const index = ({ product }: { product: PreviewItemProps }) => {
  const { productImage, productName, productPrice } = product
  return (
    <article className='cart-preview-item'>
      <div className='cart-preview-item__img-wrap'>
        <img src={productImage} alt='' className='cart-preview-item__thumb' />
      </div>
      <h3 className='cart-preview-item__title'>{productName}</h3>
      <p className='cart-preview-item__price'>${productPrice}</p>
    </article>
  )
}

export default index
