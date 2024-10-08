export type ProductOrder = {
  _id: string
  name: string
  price: number
  quantity: number
  thumbnail?: string
  discount?: number
}

export type OrderType = {
  _id: string
  orderDate: string
  totalPrice: number
  status: string
  orderCode?: string
  products: ProductOrder[]
}
export type Order = {
  products: {
    _id: string
    quantity: number
    price: number
    size: string
    grind: string
    discount: number
    name: string
  }[]
  shippingAddress: {
    _id: string
    address: string
    name: string
    phone?: string
  }
  paymentMethod: string
  totalPrice: number
}
