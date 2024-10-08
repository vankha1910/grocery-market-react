import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { deleteAddressApi } from '~/api/user.api'
import { deleteAddress } from '../address/addressSlice'
const useDeleteAddress = (addressId: string) => {
  const dispatch = useDispatch()
  const queryClient = useQueryClient()
  const { mutate: onDeleteAddress } = useMutation({
    mutationFn: () => {
      return deleteAddressApi(addressId)
    },
    onSuccess: (response) => {
      // const res = response.json()
      if (!response.ok) {
        toast.error('Some thing went wrong, please try again')
        return
      }
      toast.success('Add address successfully')
      dispatch(deleteAddress(addressId))
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
    onError: (error) => {
      console.log(error)
    }
  })

  return {
    onDeleteAddress
  }
}

export default useDeleteAddress
