import { useQuery } from '@tanstack/react-query'
import { getTopRatedProduct } from '~/api/product.api'

const useGetTopRatedProduct = () => {
  const result = useQuery({
    queryKey: ['top-rated-product'],
    queryFn: () => getTopRatedProduct()
  })
  return result
}

export default useGetTopRatedProduct
