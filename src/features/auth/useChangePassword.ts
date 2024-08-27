import { useMutation, QueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { changePasswordApi } from '~/api/auth.api'

export const useChangePassword = () => {
  const queryClient = new QueryClient()
  const navigate = useNavigate()
  const changePassword = useMutation({
    mutationFn: ({ currentPassword, newPassword }: { currentPassword: string; newPassword: string }) =>
      changePasswordApi(currentPassword, newPassword),
    onSuccess: async (res) => {
      const data = await res.json()
      if (res.ok) {
        toast.success(`Change password successfully`)
        setTimeout(() => {
          navigate('/login')
        }, 1000)
      } else {
        toast.error("Current password doesn't match")
      }
    },
    onError: (error) => {
      console.error(error)
      toast.error("Current password doesn't match")
    }
  })
  return changePassword
}
