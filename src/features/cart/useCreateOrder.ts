import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { createOrderApi } from '~/api/order.api'

const useCreateOrder = () => {
  const queryClient = useQueryClient()
  const { mutate: createOrder } = useMutation({
    mutationFn: createOrderApi,
    onSuccess: async (res) => {
      const data = await res.json()
      if (!res.ok) {
        toast.error('Some thing went wrong, please try again')
      }
      queryClient.invalidateQueries({ queryKey: ['cart'] })
      toast.success('Order successfully')
    },
    onError: (error) => {
      console.log(error)
    }
  })

  return {
    createOrder
  }
}

export default useCreateOrder
