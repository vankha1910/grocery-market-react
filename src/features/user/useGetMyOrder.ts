import { useQuery } from '@tanstack/react-query'
import { getMyOrderApi } from '~/api/user.api'
import { ProductParams } from '~/types/product.type'
import { buildQueryParams } from '~/utils'

const useGetMyOrder = (params: ProductParams) => {
  const result = useQuery({
    queryKey: ['my-order', params],
    queryFn: () => getMyOrderApi(buildQueryParams(params))
  })
  return result
}
export default useGetMyOrder
