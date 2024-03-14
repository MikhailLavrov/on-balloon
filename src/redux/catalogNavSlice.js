import { createSlice } from '@reduxjs/toolkit';

export const catalogNavSlice = createSlice({
  name: 'catalogNav',
  initialState: {
    currentTopCategory: '',
    currentCategory: '',
  },
  reducers: {
    setCurrentCategory: (state, action) => {
      state.currentTopCategory = action.payload.currentTopCategory;
      state.currentCategory = action.payload.currentCategory;
    },
  },
});

export const { setCurrentCategory } = catalogNavSlice.actions;

export default catalogNavSlice.reducer;
