import { createSlice } from '@reduxjs/toolkit';

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: { count: 0, items: [] },
  reducers: {
    initShoppingCart: (state, action) => {
      state.count = action.payload.length;
      state.items = action.payload;
    },
    addToShoppingCart: (state, action) => {
      state.items.push(action.payload);
      state.count++;
    },
    deleteFromShoppingCart: (state, action) => {
      const index = state.items.findIndex(item => item.article === action.payload.article);
      if (index !== -1) {
        state.items.splice(index, 1);
        state.count--;
      }
    },
  },
});

export const { initShoppingCart, addToShoppingCart, deleteFromShoppingCart } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
