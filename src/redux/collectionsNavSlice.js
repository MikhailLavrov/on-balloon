import { createSlice } from '@reduxjs/toolkit';

export const collectionsNavSlice = createSlice({
  name: 'collectionsNav',
  initialState: {
    currentCollection: '',
  },  
  reducers: {
    setCurrentCollection: (state, action) => {
      state.currentCollection = action.payload;
    },  
  },
});

export const { setCurrentCollection } = collectionsNavSlice.actions;

export default collectionsNavSlice.reducer;
