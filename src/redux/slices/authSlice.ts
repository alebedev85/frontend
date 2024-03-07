import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { UserType } from '../../types';

type InitialState = {
  isAuth: boolean;
  user: UserType | null;
};

const initialState: InitialState = {
  isAuth: true,
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
  },
});

export default authSlice.reducer;
export const { setUser } = authSlice.actions;
export const authSelector = (state: RootState) => state.auth;
