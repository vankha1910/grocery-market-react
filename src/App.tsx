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
import Favourite from './pages/Favourite'
import Products from './pages/Products'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout></MainLayout>}>
          <Route index element={<HomePage />}></Route>
          <Route path='home' element={<HomePage />}></Route>
          <Route path='products' element={<Products />}></Route>
          <Route path='product/:id' element={<ProductDetail />}></Route>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='checkout' element={<Checkout />}></Route>
          <Route path='shipping' element={<Shipping />}></Route>
          <Route path='favourite' element={<Favourite />}></Route>
        </Route>

        <Route path='login' element={<Login />}></Route>
        <Route path='register' element={<Register />}></Route>
        <Route path='forgot-password' element={<ForgotPassword />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
