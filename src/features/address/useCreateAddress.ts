import { useMutation, useQueryClient } from '@tanstack/react-query'
import {} from 'react-query'
import { createAddressApi } from '~/api/user.api'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addNewAddress } from './addressSlice'

const useCreateAddress = () => {
  const dispatch = useDispatch()
  const queryClient = useQueryClient()
  const { mutate: createAddress, isSuccess } = useMutation({
    mutationFn: createAddressApi,
    onSuccess: async (res) => {
      const data = await res.json()
      if (data.status !== 'success') {
        toast.error('Some thing went wrong, please try again')
        return
      }
      dispatch(addNewAddress(data.data.address))
      toast.success('Add address successfully')
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
    onError: (error) => {
      console.log(error)
    }
  })
  return {
    createAddress,
    isSuccess
  }
}

export default useCreateAddress
