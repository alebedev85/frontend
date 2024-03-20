import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { UserType } from '../../utils/types';

type InitialState = {
  isAuth: boolean;
  user: UserType | null;
};

const initialState: InitialState = {
  isAuth: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => {
      state.isAuth = true;
      state.user = action.payload;
    },
    logOut: () => initialState,
  },
});

export default authSlice.reducer;
export const { setUser, logOut } = authSlice.actions;
export const authSelector = (state: RootState) => state.auth;
