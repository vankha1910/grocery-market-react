import { useQuery } from '@tanstack/react-query'
import { getListProduct } from '~/api/product.api'

const useProducts = (params) => {
  const result = useQuery({
    queryKey: ['product-list', params],
    queryFn: () => getListProduct(params)
  })

  return result
}
export default useProducts
