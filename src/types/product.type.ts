export type Product = {
  _id: number
  name: string
  brand: string
  taste: string
  tags: string[]
  size: {
    label: string
    value: string
    quantity: number
    price: number
  }[]
  thumbImg: string
  images: string[]
  rated: number
  grindType: string[]
  description?: string
  discount?: number
  longDescription?: string
  origin?: string
  roastLevel?: string
}

export type ProductParams = {
  page?: number
  limit?: number
  sort?: string
  brand?: string
  category?: string
  search?: string
  origin?: string
}
