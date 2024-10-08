import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createOrderApi } from '~/api/order.api'
import { clearCart } from './cartSlice'
import { useDispatch } from 'react-redux'
const useCreateOrder = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { mutate: createOrder, isPending } = useMutation({
    mutationFn: createOrderApi,
    onSuccess: async (res) => {
      // const data = await res.json()
      if (!res.ok) {
        toast.error('Some thing went wrong, please try again')
      }
      queryClient.invalidateQueries({ queryKey: ['cart'] })
      dispatch(clearCart())
      toast.success('Order successfully')
      setTimeout(() => {
        navigate('/ordered')
      }, 1000)
    },
    onError: (error) => {
      console.log(error)
    }
  })

  return {
    createOrder,
    isPending
  }
}

export default useCreateOrder
