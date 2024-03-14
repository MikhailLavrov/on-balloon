import { createSlice } from '@reduxjs/toolkit';

export const topMenuNavSlice = createSlice({
  name: 'topMenuNav',
  initialState: {
    currentTopMenu: '',
    currentSubMenu: '',
  },  
  reducers: {
    setCurrentMenu: (state, action) => {
      state.currentTopMenu = action.payload.currentTopMenu;
      state.currentSubMenu = action.payload.currentSubMenu;
    },  
  },
});

export const { setCurrentMenu } = topMenuNavSlice.actions;

export default topMenuNavSlice.reducer;
