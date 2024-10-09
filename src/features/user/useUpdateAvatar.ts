import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { updateAvatarApi } from '~/api/user.api'
import { setProfileToLS } from '~/utils'
import { setUserInfo } from './userSlice'
const useUpdateAvatar = () => {
  const dispatch = useDispatch()
  const queryClient = useQueryClient()
  const { mutate: updateAvatar, isPending } = useMutation({
    mutationFn: updateAvatarApi,
    onSuccess: (data) => {
      if (data.status === 'success') {
        toast.success('Update avatar successfully')
        const { user } = data.data
        dispatch(setUserInfo(user))
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
