import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { AmbassadorsType } from '../../utils/types';

type InitialState = {
  ambassadorsList: AmbassadorsType[];
  openProfile: boolean;
  ambassadorId: string;
};

const initialState: InitialState = {
  ambassadorsList: [],
  openProfile: false,
  ambassadorId: '',
};

const ambassadorsSlice = createSlice({
  name: 'ambassadors',
  initialState,
  reducers: {
    setAmbassadorsList: (state, action: PayloadAction<AmbassadorsType[]>) => {
      state.ambassadorsList = action.payload;
    },
    setAmbassadorInfo: (state, action: PayloadAction<string>) => {
      state.ambassadorId = action.payload;
      state.openProfile = true;
    },
    resetAmbassadorInfo: (state) => {
      state.ambassadorId = '';
      state.openProfile = false;
    },
  },
});

export default ambassadorsSlice.reducer;
export const { setAmbassadorsList, setAmbassadorInfo, resetAmbassadorInfo } =
  ambassadorsSlice.actions;
export const ambassadorsListSelector = (state: RootState) =>
  state.ambassadors.ambassadorsList;
export const ambassadorsIdSelector = (state: RootState) =>
  state.ambassadors.ambassadorId;
export const ambassadorsSelector = (state: RootState) => state.ambassadors;
