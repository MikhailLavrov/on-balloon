import { createSlice } from '@reduxjs/toolkit';

export const menuNavSlice = createSlice({
  name: 'menuNav',
  initialState: {
    currentMenu: '',
    currentTopMenu: '',
  },  
  reducers: {
    setCurrentMenu: (state, action) => {
      state.currentTopMenu = action.payload.currentTopMenu;
      state.currentMenu = action.payload.currentMenu;
    },  
  },
});

export const { setCurrentMenu } = menuNavSlice.actions;

export default menuNavSlice.reducer;
