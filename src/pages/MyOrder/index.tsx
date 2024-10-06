import useGetMyOrder from '~/features/user/useGetMyOrder'
import './orders.scss'
import { useSearchParams } from 'react-router-dom'
import Order from '../../components/Order'
import { OrderType } from '~/types/order.type'
import { useState } from 'react'
import { Card, Col, Pagination, Row, Skeleton } from 'antd'
import { LuPackageX } from 'react-icons/lu'
import NotFound from '~/components/NotFound'
const MyOrder = () => {
  const orderStatus = ['all', 'pending', 'processing', 'shipped', 'delivered', 'cancelled']
  const [searchParams, setSearchParams] = useSearchParams()
  const [params, setParams] = useState({
    status: searchParams.get('status') || '',
    page: Number(searchParams.get('page')) || 1
  })
  const { data, isFetching } = useGetMyOrder(params)
  const orders = data?.data?.orders
  const counts = data?.count
  const handleClick = (value: string) => {
    if (value === 'all') {
      setParams((pre) => ({ ...pre, status: '' }))
      searchParams.delete('status')
      setSearchParams(searchParams)
      return
    }
    setParams((pre) => ({ ...pre, status: value }))
    searchParams.set('status', value)
    setSearchParams(searchParams)
  }
  const handlePagination = (page: number) => {
    setParams((pre) => ({ ...pre, page }))
    searchParams.set('page', page.toString())
    setSearchParams(searchParams)
  }
  return (
    <div className='cart-info' style={{ flex: 1 }}>
      <div className='row gy-3'>
        <div className='col-12'>
          <div>
            <h2 className='cart-info__heading'>My Order</h2>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '16px' }}>
              {/* filtered data */}
              {orderStatus.map((item) => (
                <button
                  key={item}
                  onClick={() => handleClick(item)}
                  className={`button-filtered ${item === 'all' && searchParams.get('status') === null && 'active'} ${searchParams.get('status') === item ? 'active' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className='orders-list'>
            {isFetching ? (
              <>
                <SkeletonElement />
                <SkeletonElement />
              </>
            ) : (
              <>{orders?.map((order: OrderType) => <Order key={order._id} order={order}></Order>)}</>
            )}
          </div>
          {orders?.length === 0 && (
            <NotFound
              icon={<LuPackageX className='not-found__icon' />}
              title='No order found'
              description="We couldn't find any products matching your criteria"
              showAction
            ></NotFound>
          )}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          {orders?.length > 0 && (
            <Pagination
              current={params.page}
              total={counts && counts[searchParams.get('status') || 'all']}
              pageSize={8}
              onChange={handlePagination}
            />
          )}
        </div>

        {/* <Table dataSource={[]} style={{ width: '100%' }} columns={columns}></Table> */}
      </div>
    </div>
  )
}

const SkeletonElement = () => {
  return (
    <Card style={{ marginBottom: 16, border: '1px solid gray' }}>
      {/* Order Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Skeleton.Input style={{ width: 200, marginBottom: 10 }} active size='small' />
        <Skeleton.Input style={{ width: 50, marginBottom: 10 }} active size='small' />
      </div>
      <Skeleton.Input style={{ width: 150, marginBottom: 32 }} active size='small' />

      {/* Row for Product Image and Info */}
      <Row align='middle' gutter={16}>
        <Col>
          {/* Product Image Skeleton */}
          <Skeleton.Image active style={{ width: 60, height: 80 }} />
        </Col>
        <Col flex='auto' style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Product Info Skeleton */}
          <Skeleton.Input style={{ width: 150 }} active size='small' />
          <Skeleton.Input style={{ width: 100, marginTop: 8 }} active size='small' />
        </Col>
        <Col>
          {/* Price Skeleton */}
          <Skeleton.Input style={{ width: 60 }} active size='small' />
        </Col>
      </Row>
      <hr style={{ marginTop: 16, marginBottom: 16 }} />

      {/* Total Price Skeleton */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Skeleton.Input style={{ width: 100 }} active size='small' />
        <Skeleton.Input style={{ width: 60 }} active size='small' />
      </div>
    </Card>
  )
}

export default MyOrder
