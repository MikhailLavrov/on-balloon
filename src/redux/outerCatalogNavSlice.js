import { createSlice } from '@reduxjs/toolkit';

export const outerCatalogNavSlice = createSlice({
  name: 'outerCatalogNav',
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

export const { setCurrentCategory } = outerCatalogNavSlice.actions;

export default outerCatalogNavSlice.reducer;
