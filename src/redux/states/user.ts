import { UserInfo } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

export const EmptyUserState: UserInfo = {
  id: 0,
  name: "",
  email: ""
}

export const userSplice = createSlice({
  name: 'user',
  initialState: EmptyUserState,
  reducers: {
    createUser: (state, action) => action.payload,
    updateUser: (state, action) => ({ ...state, ...action.payload }),
    resetUser: () => EmptyUserState
  }
})

export const { createUser, updateUser, resetUser } = userSplice.actions;

export default userSplice.reducer;
