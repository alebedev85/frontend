import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { AmbassadorInfoType, AmbassadorsType } from '../../utils/types';

type InitialState = {
  ambassadorsList: AmbassadorsType[];
  ambassadorInfo: AmbassadorInfoType | null;
  openProfile: boolean;
};

const initialState: InitialState = {
  ambassadorsList: [],
  ambassadorInfo: null,
  openProfile: false,
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
    setOpenProfile: (state) => {
      state.openProfile = true;
    },
    resetAmbassadorInfo: (state) => {
      state.ambassadorInfo = null;
      state.openProfile = false;
    },
  },
});

export default ambassadorsSlice.reducer;
export const {
  setAmbassadorsList,
  setAmbassadorInfo,
  resetAmbassadorInfo,
  setOpenProfile,
} = ambassadorsSlice.actions;
export const ambassadorsListSelector = (state: RootState) =>
  state.ambassadors.ambassadorsList;
export const ambassadorsInfoSelector = (state: RootState) =>
  state.ambassadors.ambassadorInfo;
export const openProfileSelector = (state: RootState) =>
  state.ambassadors.openProfile;
