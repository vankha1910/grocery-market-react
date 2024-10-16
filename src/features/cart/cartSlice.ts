import { createSlice } from '@reduxjs/toolkit'
import { CartItemType, CartState } from '~/types/cart.type'
import { toast } from 'react-toastify'
import { uniqueId } from 'lodash'

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
const initialState: CartState = {
  cart: JSON.parse(localStorage.getItem('cart') || '[]'),
  totalPrice: handleUpdateTotalPrice(JSON.parse(localStorage.getItem('cart') || '[]') || 0)
  // address: (getProfileFromLS()?.addresses && getProfileFromLS()?.addresses[0]) || '{}',
  // paymentMethod: 'cod'
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
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.cartItemId !== action.payload)
      localStorage.setItem('cart', JSON.stringify(state.cart))
      state.totalPrice = handleUpdateTotalPrice(state.cart)
    },
    increaseQuantity: (state, action) => {
      const index = state.cart.findIndex((item) => item.cartItemId === action.payload)
      const updatedCart = [...state.cart]
      const existingProduct = updatedCart[index]
      existingProduct.selectedSize.quantity += 1
      state.cart = updatedCart
      state.totalPrice = handleUpdateTotalPrice(state.cart)
      localStorage.setItem('cart', JSON.stringify(state.cart))
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
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    // setAddress: (state, action) => {
    //   state.address = action.payload
    // },

    // setPaymentMethod: (state, action) => {
    //   state.paymentMethod = action.payload
    // },
    clearCart: (state) => {
      state.cart = []
      localStorage.setItem('cart', JSON.stringify(state.cart))
      state.totalPrice = 0
    }
  }
})
export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  // setAddress,
  // setPaymentMethod,
  clearCart
} = cartSlide.actions

export default cartSlide.reducer
