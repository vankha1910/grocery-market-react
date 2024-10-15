import { useMutation, useQueryClient } from '@tanstack/react-query'
import { signUpApi } from '~/api/auth.api'
import { FormRegisterData } from '~/types/auth.type'
import { toast } from 'react-toastify'
import { setProfileToLS, storedToken } from '~/utils'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '~/contexts/AuthContext'
import { useDispatch } from 'react-redux'
import { setUserInfo } from '../user/userSlice'
const useSignUp = () => {
  const dispatch = useDispatch()
  const { setIsAuthenticated } = useAuth()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { mutate: signup, isPending } = useMutation({
    mutationFn: ({ email, password, confirmPassword }: FormRegisterData) => signUpApi(email, password, confirmPassword),
    onSuccess: async (res) => {
      const data = await res.json()
      if (res.ok) {
        toast.success(`Register successfully`)
        setProfileToLS(data.data.user)
        storedToken(data.token)
        queryClient.setQueryData(['user'], data.data.user)
        dispatch(setUserInfo(data.data.user))
        setIsAuthenticated(true)
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
  return {
    signup,
    isPending
  }
}
export default useSignUp
