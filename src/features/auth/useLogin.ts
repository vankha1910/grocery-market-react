import { useMutation, useQueryClient } from '@tanstack/react-query'
import { signInApi } from '../../api/auth.api'
import { FormRegisterData } from '~/types/auth.type'
import { toast } from 'react-toastify'
import { setProfileToLS, storedToken } from '~/utils'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '~/contexts/AuthContext'
import { setUserInfo } from '../user/userSlice'
import { useDispatch } from 'react-redux'

type FormLoginData = Omit<FormRegisterData, 'confirmPassword'>

const useSignIn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { setIsAuthenticated } = useAuth()
  const queryClient = useQueryClient()
  const signIn = useMutation({
    mutationFn: ({ email, password }: FormLoginData) => signInApi(email, password),
    onSuccess: async (res) => {
      const data = await res.json()
      if (res.ok) {
        setProfileToLS(data.data.user)
        storedToken(data.token)
        queryClient.setQueryData(['user'], data.data.user)
        dispatch(setUserInfo(data.data.user))
        setIsAuthenticated(true)
        setTimeout(() => {
          navigate('/')
        }, 500)
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
  return signIn
}
export default useSignIn
