import './styles/main.scss'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Profile from './pages/Profile'
import Login from './pages/(auth)/Login'
import Register from './pages/(auth)/Register'
import ForgotPassword from './pages/(auth)/ForgotPassword'
import PageNotFound from './pages/PageNotFound'
import Checkout from './pages/Checkout'
import Shipping from './pages/Shipping'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout></MainLayout>}>
          <Route index element={<HomePage></HomePage>}></Route>
          <Route path='home' element={<HomePage></HomePage>}></Route>
          <Route path='product/:id' element={<ProductDetail></ProductDetail>}></Route>
          <Route path='profile' element={<Profile></Profile>}></Route>
          <Route path='checkout' element={<Checkout></Checkout>}></Route>
          <Route path='shipping' element={<Shipping></Shipping>}></Route>
        </Route>

        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
        <Route path='forgot-password' element={<ForgotPassword></ForgotPassword>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
