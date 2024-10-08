import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { updateUserInfoApi } from '~/api/user.api'
import { setProfileToLS } from '~/utils'

const useUpdateInfo = () => {
  const queryClient = useQueryClient()
  const { mutate: updateInfo, isPending } = useMutation({
    mutationFn: updateUserInfoApi,
    onSuccess: (data) => {
      if (data.status !== 'success') {
        toast.error('Some thing went wrong, please try again')
        return
      }

      toast.success('Update info successfully')
      const { user } = data.data
      setProfileToLS(user)
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
    onError: (error) => {
      console.log(error)
    }
  })
  return {
    updateInfo,
    isPending
  }
}

export default useUpdateInfo
