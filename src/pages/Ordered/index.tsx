import { Link } from 'react-router-dom'
import './ordered.scss'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { useEffect } from 'react'
const Ordered = () => {
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: {
        y: 0.6
      }
    })
  }, [])
  return (
    <main className='checkout-page'>
      <div className='ordered ordered-container'>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <IoMdCheckmarkCircleOutline className='ordered__img'></IoMdCheckmarkCircleOutline>
          <p className='ordered__title'>Order Successfully Placed!</p>
          <p className='ordered__desc'>We will send you an email shortly with the details of your order.</p>
          <div className='ordered__action'>
            <Link to='/profile/my-orders' className='btn btn--outline btn--text ordered__btn'>
              View order
            </Link>
            <Link to='/products' className='btn btn--primary btn--no-margin ordered__btn'>
              Continue shopping
            </Link>
          </div>
        </motion.div>
        {/* <img src={CheckCompleted} alt='' className='ordered__img' /> */}
      </div>
    </main>
  )
}

export default Ordered
