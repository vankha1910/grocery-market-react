import { useQuery } from '@tanstack/react-query'
import { getMyOrderApi } from '~/api/user.api'

const useGetMyOrder = () => {
  const result = useQuery({
    queryKey: ['my-order'],
    queryFn: getMyOrderApi
  })
  return result
}
export default useGetMyOrder
