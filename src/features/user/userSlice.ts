import { createSlice } from '@reduxjs/toolkit'
import { User } from '~/types/auth.type'
import { getProfileFromLS } from '~/utils'

const currentUser = getProfileFromLS()

const initialState: { user: User } = {
  user: currentUser
}

const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    setUserInfo: (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload
      }
    },
    setUserAvatar: (state, action) => {
      state.user = {
        ...state.user,
        avatar: action.payload
      }
    }
  }
})

export const { setUserInfo, setUserAvatar } = userSlice.actions

export default userSlice.reducer
