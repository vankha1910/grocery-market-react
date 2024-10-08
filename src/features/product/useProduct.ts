import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import { getListProduct } from '~/api/product.api'
import { ProductParams } from '~/types/product.type'
import { buildQueryParams } from '~/utils'
const RESULT_PER_PAGE = import.meta.env.VITE_RESULT_PER_PAGE
const useProducts = (params: ProductParams) => {
  const queryClient = useQueryClient()
  const [searchParams] = useSearchParams()
  const result = useQuery({
    queryKey: ['product-list', params],
    queryFn: () => getListProduct(buildQueryParams(params))
  })
  // handle pre fetching
  const currentPage = Number(searchParams.get('page')) || 1
  const pageCount = Math.ceil(result?.data?.total / RESULT_PER_PAGE)
  if (currentPage < pageCount) {
    queryClient.prefetchQuery({
      queryKey: [
        'product-list',
        {
          ...params,
          page: currentPage + 1
        }
      ],
      queryFn: () =>
        getListProduct(
          buildQueryParams({
            ...params,
            page: currentPage + 1
          })
        )
    })
  }
  if (currentPage > 1) {
    queryClient.prefetchQuery({
      queryKey: [
        'product-list',
        {
          ...params,
          page: currentPage - 1
        }
      ],
      queryFn: () =>
        getListProduct(
          buildQueryParams({
            ...params,
            page: currentPage - 1
          })
        )
    })
  }
  return result
}
export default useProducts
