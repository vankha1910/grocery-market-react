// type Role = 'User' | 'Admin'
// enum Roles {
//   User = 'user',
//   Admin = 'admin'

import { Address } from './address.type'

// }
export type FormRegisterData = {
  email: string
  password: string
  confirmPassword: string
}
export interface User {
  _id: string
  email: string
  name?: string
  avatar?: string
  address?: string
  phoneNumber?: string
  addresses?: Address[]
}
