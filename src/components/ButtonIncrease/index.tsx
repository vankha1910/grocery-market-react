import './ButtonIncrease.scss'
import { FaPlus, FaMinus } from 'react-icons/fa6'

type Props = {
  quantity: number
  isDisabledIncrease?: boolean
  isDisabledDecrease?: boolean
  handleIncrease: () => void
  handleDecrease: () => void
}

const index = ({
  quantity,
  handleIncrease,
  handleDecrease,
  isDisabledDecrease = false,
  isDisabledIncrease = false
}: Props) => {
  return (
    <div className='button-increase'>
      <button disabled={isDisabledDecrease} onClick={handleDecrease} className='cart-item__input-btn'>
        <FaMinus className='button-increase__icon' />
      </button>
      <span>{quantity}</span>
      <button disabled={isDisabledIncrease} onClick={handleIncrease} className='cart-item__input-btn'>
        <FaPlus className='button-increase__icon' />
      </button>
    </div>
  )
}

export default index
