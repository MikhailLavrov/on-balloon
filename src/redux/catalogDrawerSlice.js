import { createSlice } from '@reduxjs/toolkit';

export const catalogDrawerSlice = createSlice({
  name: 'catalogDrawer',
  initialState: {
    mainDrawerIsOpened: false,
  },  
  reducers: {
    setDrawerState: (state, action) => {
      const { mainDrawerIsOpened } = action.payload;
      if (mainDrawerIsOpened !== undefined) {
        state.mainDrawerIsOpened = mainDrawerIsOpened;
      }
    },  
  },
});

export const { setDrawerState } = catalogDrawerSlice.actions;

export default catalogDrawerSlice.reducer;
