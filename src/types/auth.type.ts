// type Role = 'User' | 'Admin'
// enum Roles {
//   User = 'user',
//   Admin = 'admin'
// }
export type FormRegisterData = {
  email: string
  password: string
  confirmPassword: string
}
export interface User {
  _id: string
  roles: string
  email: string
  name?: string
  avatar?: string
  address?: string
  phone?: string
}
