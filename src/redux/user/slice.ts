import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserStateProps } from './types';

const initialState: UserStateProps = {
  test: '',
};

export const userSlice = createSlice({
  name: 'USER',
  initialState,
  reducers: {
    setTest: (state, { payload }) => {
      state.test = payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
