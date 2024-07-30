import { useQuery } from '@tanstack/react-query'
import { getProductDetail } from '~/api/product.api'
import { useParams } from 'react-router-dom'
const useGetProductDetail = () => {
  const { productId } = useParams()
  const result = useQuery({
    queryKey: ['product-detail', productId],
    queryFn: () => getProductDetail(productId as string)
  })
  return result
}

export default useGetProductDetail
