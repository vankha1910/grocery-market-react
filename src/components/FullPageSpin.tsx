import { Spin } from 'antd'

const FullPageSpin = ({ isSpinning }: { isSpinning: boolean }) => {
  return <Spin fullscreen spinning={isSpinning} size='large'></Spin>
}

export default FullPageSpin
