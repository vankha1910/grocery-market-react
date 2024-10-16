import './paymentCard.scss'

interface PaymentCardProps {
  cardType: string
  cartNumber: string
  cardOwner: string
  cardExpired: string
  cartImgIcon: string
  cartImgBg: string
  background?: string
}
const index = ({
  cardType,
  cartNumber,
  cardOwner,
  cardExpired,
  cartImgIcon,
  cartImgBg,
  background
}: PaymentCardProps) => {
  return (
    <article
      className='payment-card'
      style={{
        background: background
      }}
    >
      <img alt='payment' className='payment-card__img' src={cartImgBg} />
      <div className='payment-card__top'>
        <img alt='card-icon' src={cartImgIcon} />
        <span className='payment-card__type'>{cardType}</span>
      </div>
      <div className='payment-card__number'>{cartNumber}</div>
      <div className='payment-card__bottom'>
        <div>
          <p className='payment-card__label'>Card Holder</p>
          <p className='payment-card__value'>{cardOwner}</p>
        </div>
        <div className='payment-card__expired'>
          <p className='payment-card__label'>Expired</p>
          <p className='payment-card__value'>{cardExpired}</p>
        </div>
        <div className='payment-card__circle' />
      </div>
    </article>
  )
}

export default index
