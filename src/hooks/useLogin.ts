import { useMutation, useQueryClient } from '@tanstack/react-query'
import { signInApi } from '../api/auth.api'
import { FormRegisterData } from '~/types/auth.type'
import { toast } from 'react-toastify'
import { setProfileToLS, storedToken } from '~/utils'
import { useNavigate } from 'react-router-dom'

type FormLoginData = Omit<FormRegisterData, 'confirmPassword'>

const useSignIn = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const signIn = useMutation({
    mutationFn: ({ email, password }: FormLoginData) => signInApi(email, password),
    onSuccess: async (res) => {
      const data = await res.json()
      if (res.ok) {
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
  return signIn
}
export default useSignIn
