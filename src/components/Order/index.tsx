import { productImage1 } from '~/assets'
import { OrderType } from '~/types/order.type'
import './order.scss'
import { format } from 'date-fns'
const index = ({ order }: { order: OrderType }) => {
  const formattedDate = format(new Date(order?.orderDate), 'dd/MM/yyyy')
  return (
    <div className='order' key={order._id}>
      <p className='order__title'>
        Order #{order.orderCode || order._id}
        <span className={`order__status order__status--${order?.status}`}>{order.status}</span>
      </p>
      <p className='order__date'>Placed on {formattedDate}</p>
      <div className='order__products'>
        {order?.products.map((product, index) => (
          <div className='order-item' key={index}>
            <img className='order-item__img' src={product?.thumbnail || productImage1} alt='' />
            <div className='order-item__info'>
              <p className='order-item__title'>{product?.name}</p>
              <p className='order-item__price'>
                QNT: {product?.quantity} | $
                {product?.discount ? product?.price - (product?.price * product?.discount) / 100 : product?.price} each
              </p>
            </div>
            <p className='order-item__total-price'>
              $
              {product?.discount
                ? (product?.price - (product?.price * product?.discount) / 100) * product?.quantity
                : product?.price * product?.quantity}
            </p>
          </div>
        ))}
      </div>
      <hr />
      <p className='order__price'>
        Total price: <span className='order__price-value'>${order?.totalPrice}</span>
      </p>
    </div>
  )
}

export default index
