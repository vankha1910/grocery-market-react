import './styles/main.scss'
import 'react-toastify/dist/ReactToastify.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
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
import { ToastContainer } from 'react-toastify'
import { useDarkMode } from './contexts/DarkModeContext'
function App() {
  const { isDarkMode } = useDarkMode()
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000
      }
    }
  })
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isDarkMode ? 'dark' : 'light'}
      ></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout></MainLayout>}>
            <Route index element={<HomePage />}></Route>
            <Route path='home' element={<HomePage />}></Route>
            <Route path='products' element={<Products />}></Route>
            <Route path='product/:productId' element={<ProductDetail />}></Route>
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
    </QueryClientProvider>
  )
}

export default App
