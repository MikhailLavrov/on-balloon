import { createSlice } from '@reduxjs/toolkit';

export const catalogDrawerSlice = createSlice({
  name: 'catalogDrawer',
  initialState: {
    mainDrawerIsOpened: false,
    childrenDrawerIsOpened: false,
  },  
  reducers: {
    setDrawerState: (state, action) => {
      const { mainDrawerIsOpened, childrenDrawerIsOpened } = action.payload;
      if (mainDrawerIsOpened !== undefined) {
        state.mainDrawerIsOpened = mainDrawerIsOpened;
      }
      if (childrenDrawerIsOpened !== undefined) {
        state.childrenDrawerIsOpened = childrenDrawerIsOpened;
      }
    },  
  },
});

export const { setDrawerState } = catalogDrawerSlice.actions;

export default catalogDrawerSlice.reducer;
