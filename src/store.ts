import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/cart/cartSlice'
import addressSlice from './features/address/addressSlice'
import userSlice from './features/user/userSlice'
const store = configureStore({
  reducer: {
    cart: cartSlice,
    address: addressSlice,
    user: userSlice
  }
})
export type RootState = ReturnType<typeof store.getState>

export default store
