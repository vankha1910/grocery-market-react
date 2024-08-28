import useGetMyOrder from '~/features/user/useGetMyOrder'
import { Table } from 'antd'
const MyOrder = () => {
  const { data } = useGetMyOrder()
  console.log(data)
  // const orders = data?.data?.order
  // const dataOrder = orders?.map((item, index) => {
  //   return {
  //     number: index + 1,
  //     totalPrice: item.totalPrice,
  //     date: item.orderDate,
  //     status: item.status
  //   }
  // })
  const columns = [
    {
      title: 'Number',
      dataIndex: 'number',
      key: 'number'
    },
    {
      title: 'Product Name',
      dataIndex: 'productName',
      key: 'productName'
    },
    {
      title: 'Total Price',
      dataIndex: 'totalPrice',
      key: 'totalPrice'
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status'
    }
  ]
  return (
    <div className='cart-info'>
      <div className='row gy-1'>
        <div className='col-12'>
          <h2 className='cart-info__heading'>My Order</h2>
        </div>
        <Table dataSource={[]} style={{ width: '100%' }} columns={columns}></Table>
      </div>
    </div>
  )
}

export default MyOrder
