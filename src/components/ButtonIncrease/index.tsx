import './ButtonIncrease.scss'
import { MinusIcon, PlusIcon } from '~/assets'

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
        <img className='button-increase__icon' src={MinusIcon} alt='' />
      </button>
      <span>{quantity}</span>
      <button disabled={isDisabledIncrease} onClick={handleIncrease} className='cart-item__input-btn'>
        <img className='button-increase__icon' src={PlusIcon} alt='' />
      </button>
    </div>
  )
}

export default index
