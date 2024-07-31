import React from 'react'
import { FaPaypal, FaMoneyBill, FaStripe } from 'react-icons/fa'

const PaymentMethod = () => {
  const paymentMethodList = [
    {
      id: 3,
      name: 'Cash on delivery',
      icon: <FaMoneyBill className='icon payment-item__thumb' />,
      isAvailable: true
    },
    {
      id: 1,
      name: 'Paypal',
      icon: <FaPaypal className='icon payment-item__thumb' />,
      isAvailable: false
    },
    {
      id: 2,
      name: 'Stripe',
      icon: <FaStripe className='icon payment-item__thumb' />,
      isAvailable: false
    }
  ]
  return (
    <div>
      {/* Payment item 3 */}
      {paymentMethodList.map((item) => (
        <label key={item.id}>
          <article className={`payment-item payment-item--pointer ${!item.isAvailable && 'payment-item--disabled'}`}>
            {item.icon}
            <div className='payment-item__content'>
              <div className='payment-item__info'>
                <h3 className='payment-item__title'>{item.name}</h3>
                {/* <p className='payment-item__desc payment-item__desc--low'>Delivery: 2-3 days work</p> */}
              </div>
              <span className='cart-info__checkbox payment-item__checkbox'>
                <input
                  type='radio'
                  name='delivery-method'
                  className='cart-info__checkbox-input payment-item__checkbox-input'
                  disabled={!item.isAvailable}
                />
                <span className='payment-item__cost'>{!item.isAvailable && 'On progress'}</span>
              </span>
            </div>
          </article>
        </label>
      ))}
    </div>
  )
}

export default PaymentMethod
