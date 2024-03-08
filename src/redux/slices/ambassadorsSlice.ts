import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { AmbassadorInfoType, AmbassadorsType } from '../../utils/types';

type InitialState = {
  ambassadorsList: AmbassadorsType[];
  ambassadorInfo: AmbassadorInfoType | null;
};

const initialState: InitialState = {
  ambassadorsList: [],
  ambassadorInfo: null,
};

const ambassadorsSlice = createSlice({
  name: 'ambassadors',
  initialState,
  reducers: {
    setAmbassadorsList: (state, action: PayloadAction<AmbassadorsType[]>) => {
      state.ambassadorsList = action.payload;
    },
    setAmbassadorInfo: (state, action: PayloadAction<AmbassadorInfoType>) => {
      state.ambassadorInfo = action.payload;
    },
    resetAmbassadorInfo: (state) => {
      state.ambassadorInfo = null;
    },
  },
});

export default ambassadorsSlice.reducer;
export const { setAmbassadorsList, setAmbassadorInfo, resetAmbassadorInfo } =
  ambassadorsSlice.actions;
export const ambassadorsListSelector = (state: RootState) =>
  state.ambassadors.ambassadorsList;
export const ambassadorsInfoSelector = (state: RootState) =>
  state.ambassadors.ambassadorInfo;
