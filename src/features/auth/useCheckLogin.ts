import { useMutation, useQuery } from '@tanstack/react-query'
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
      console.log(error)
    }
  })
  return { checkLogin }
}

export default useCheckLogin
