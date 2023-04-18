import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/configureStore';

const userState = (state: RootState) => {
  return state.user;
};

export const selectTest = createSelector(userState, (state) => state.test);
