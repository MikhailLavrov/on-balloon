import { createSlice } from '@reduxjs/toolkit';

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: { count: 0, items: [] },
  reducers: {
    initFavourites: (state, action) => {
      state.count = action.payload.length;
      state.items = action.payload;
    },
    addToFavourites: (state, action) => {
      state.items.push(action.payload);
      state.count++;
    },
    deleteFromFavourites: (state, action) => {
      const index = state.items.findIndex(item => item.article === action.payload.article);
      if (index !== -1) {
        state.items.splice(index, 1);
        state.count--;
      }
    },
  },
});

export const { initFavourites, addToFavourites, deleteFromFavourites } = favouritesSlice.actions;

export default favouritesSlice.reducer;
