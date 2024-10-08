import { createSlice } from '@reduxjs/toolkit'
import { AddressStateType } from '~/types/address.type'
import { getProfileFromLS } from '~/utils'

const currentUser = getProfileFromLS()
const addressList = currentUser?.addresses

const initialState: AddressStateType = {
  addressList: addressList || [],
  currentAddress: (addressList && addressList[0]) || null,
  paymentMethod: 'cod'
}

const addressSlide = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setAddressList: (state, action) => {
      state.addressList = action.payload
    },
    addNewAddress: (state, action) => {
      if (!state.currentAddress) state.currentAddress = action.payload

      state.addressList.push(action.payload)
    },
    setCurrentAddress: (state, action) => {
      state.currentAddress = action.payload
    },
    deleteAddress: (state, action) => {
      if (state.currentAddress?._id === action.payload) state.currentAddress = null
      state.addressList = state.addressList.filter((address) => address._id !== action.payload)
    }
  }
})
export const { setAddressList, setCurrentAddress, deleteAddress, addNewAddress } = addressSlide.actions

export default addressSlide.reducer
