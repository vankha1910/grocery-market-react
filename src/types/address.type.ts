export type Address = {
  _id: string
  name: string
  address: string
  phone?: string
}

export type AddressStateType = {
  addressList: Address[]
  currentAddress: Address | null
  paymentMethod: string
}
