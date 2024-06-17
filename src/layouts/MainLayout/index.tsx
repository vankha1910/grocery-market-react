import { ReactNode } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
const index = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  )
}

export default index
