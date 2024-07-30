import { useMutation, useQueryClient } from '@tanstack/react-query'
import { signUpApi } from '~/api/auth.api'
import { FormRegisterData } from '~/types/auth.type'
import { toast } from 'react-toastify'
import { setProfileToLS, storedToken } from '~/utils'
import { useNavigate } from 'react-router-dom'
const useSignUp = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const signup = useMutation({
    mutationFn: ({ email, password, confirmPassword }: FormRegisterData) => signUpApi(email, password, confirmPassword),
    onSuccess: async (res) => {
      const data = await res.json()
      if (res.ok) {
        toast.success(`Register successfully`)
        setProfileToLS(data.data.user)
        storedToken(data.token)
        setTimeout(() => {
          navigate('/')
        }, 1000)
      } else {
        toast.error(data.message)
      }
    },
    onError: (error) => {
      console.log(`error ${error}`)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['auth'] })
    }
  })
  return signup
}
export default useSignUp
