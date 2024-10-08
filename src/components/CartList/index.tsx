import CartItem from '../CartItem'
import { useSelector } from 'react-redux'
import { RootState } from '~/store'
import { CartItemType } from '~/types/cart.type'
const CartList = () => {
  const cartList = useSelector<RootState>((state) => state.cart.cart) as CartItemType[]

  return (
    <div className='cart-info__list'>
      {/* Cart item 1 */}
      {cartList?.map((item: CartItemType, index: number) => <CartItem key={index} cartItem={item}></CartItem>)}
    </div>
  )
}

export default CartList
