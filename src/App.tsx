import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import PageNotFound from './pages/PageNotFound'
import './styles/main.scss'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout></MainLayout>}>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='product/:id' element={<ProductDetail></ProductDetail>}></Route>
          <Route path='profile' element={<Profile></Profile>}></Route>
        </Route>

        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
