import { createSlice } from '@reduxjs/toolkit'
import { CartItemType } from '~/types/cart.type'
import { toast } from 'react-toastify'
import { uniqueId } from 'lodash'
type CartState = {
  cart: CartItemType[]
  totalPrice: number
}

const initialState: CartState = {
  cart: [],
  totalPrice: 0
}
const handleUpdateTotalPrice = (cartList: CartItemType[]) => {
  return Number.parseFloat(
    cartList
      .reduce(
        (total, item) =>
          total +
          (item.selectedSize.price - (item.selectedSize.price * item.discount) / 100) * item.selectedSize.quantity,
        0
      )
      .toFixed(2)
  )
}
const cartSlide = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload
      const isExisting = state.cart.findIndex(
        (item) =>
          item.productId === product.productId &&
          item.selectedSize.label === product.selectedSize.label &&
          item.selectedGrind === product.selectedGrind
      )
      if (isExisting === -1) {
        state.cart.unshift({
          ...product,
          cartItemId: uniqueId()
        })
      } else {
        const updatedCart = [...state.cart]
        const existingProduct = updatedCart[isExisting]
        existingProduct.selectedSize.quantity += product.selectedSize.quantity
        state.cart = updatedCart
      }
      state.totalPrice = handleUpdateTotalPrice(state.cart)
      toast.success('Add product to cart successful')
    },
    removeFromCart: (state, action) => {
      // return state.filter((item) => item.id !== action.payload)
    },
    increaseQuantity: (state, action) => {
      const index = state.cart.findIndex((item) => item.cartItemId === action.payload)
      const updatedCart = [...state.cart]
      const existingProduct = updatedCart[index]
      existingProduct.selectedSize.quantity += 1
      state.cart = updatedCart
      state.totalPrice = handleUpdateTotalPrice(state.cart)
    },
    decreaseQuantity: (state, action) => {
      const index = state.cart.findIndex((item) => item.cartItemId === action.payload)
      const updatedCart = [...state.cart]
      const existingProduct = updatedCart[index]
      if (existingProduct.selectedSize.quantity === 1) {
        state.cart = updatedCart.filter((item) => item.cartItemId !== action.payload)
      } else {
        existingProduct.selectedSize.quantity -= 1
        state.cart = updatedCart
      }

      state.totalPrice = handleUpdateTotalPrice(state.cart)
    }
  }
})
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlide.actions

export default cartSlide.reducer
