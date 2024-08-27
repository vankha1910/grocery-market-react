import { useMutation, useQuery } from '@tanstack/react-query'
import { Session } from 'inspector'
import { checkLoginApi } from '~/api/auth.api'
import { setProfileToLS, storedToken } from '~/utils'

const useCheckLogin = () => {
  const { mutate: checkLogin } = useMutation({
    mutationFn: checkLoginApi,
    onSuccess: async (res) => {
      const data = await res.json()
      if (data.status === 'success') {
        setProfileToLS(data.data.user)
        storedToken(data.token)
      }
    },
    onError: (error) => {
      // sessionStorage.removeItem('token')
    }
  })
  return { checkLogin }
}

export default useCheckLogin
