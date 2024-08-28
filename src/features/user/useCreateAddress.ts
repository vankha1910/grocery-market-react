import { useMutation, useQueryClient } from '@tanstack/react-query'
import {} from 'react-query'
import { createAddressApi } from '~/api/user.api'
import { toast } from 'react-toastify'

const useCreateAddress = () => {
  const queryClient = useQueryClient()
  const { mutate: createAddress } = useMutation({
    mutationFn: createAddressApi,
    onSuccess: () => {
      toast.success('Add address successfully')
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
    onError: (error) => {
      console.log(error)
    }
  })
  return {
    createAddress
  }
}

export default useCreateAddress
