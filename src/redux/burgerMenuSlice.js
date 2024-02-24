import { createSlice } from '@reduxjs/toolkit';

export const burgerMenuSlice = createSlice({
  name: 'burgerMenu',
  initialState: {
    isOpened: false,
  },  
  reducers: {
    setBurgerIsOpened: (state, action) => {
      state.isOpened = action.payload.isOpened;
    },  
  },
});

export const { setBurgerIsOpened } = burgerMenuSlice.actions;

export default burgerMenuSlice.reducer;
