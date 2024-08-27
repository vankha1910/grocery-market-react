import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { updateAvatarApi } from '~/api/user.api'
import { setProfileToLS } from '~/utils'
const useUpdateAvatar = () => {
  const queryClient = useQueryClient()
  const { mutate: updateAvatar, isPending } = useMutation({
    mutationFn: updateAvatarApi,
    onSuccess: (data) => {
      console.log(data)
      if (data.status === 'success') {
        toast.success('Update avatar successfully')
        const { user } = data.data
        setProfileToLS(user)
        queryClient.invalidateQueries({ queryKey: ['user'] })
      } else {
        toast.error('Some thing went wrong, please try again')
      }
    },
    onError: (error) => {
      console.log(error)
    }
  })

  return {
    updateAvatar,
    isPending
  }
}

export default useUpdateAvatar
