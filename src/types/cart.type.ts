import { Address } from './address.type'

export type CartItemType = {
  cartItemId: number
  productId: string
  name: string
  thumbImg: string
  discount: number
  size: {
    label: string
    value: string
    quantity: number
    price: number
  }[]
  selectedSize: {
    label: string
    value: string
    quantity: number
    price: number
  }
  grindType: string[]
  selectedGrind: string
}

export type CartState = {
  cart: CartItemType[]
  totalPrice: number
  // address: Address
  // paymentMethod: string
}

export type AddressState = {
  currentAddress: Address
  paymentMethod: string
}
