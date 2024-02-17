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




// import { createSlice } from '@reduxjs/toolkit'

// export const favouritesSlice = createSlice({
//   name: 'favourites',
//   initialState: {
//     count: 0,
//     items: [],
//   },
//   reducers: {
//     addToFavorites: (state , action) => {
//       return {
//         ...state,
//         count: state.count + 1,
//         items: [...state.items, action.payload],
//       };
//     },
//     removeFromFavorites: (state, action) => {
//       const updatedItems = state.items.filter(item => item.article !== action.payload.article);
//       return {
//         ...state,
//         count: state.count - 1,
//         items: updatedItems,
//       };
//     },
//   }
// })

// export const { addToFavorites, removeFromFavorites } = favouritesSlice.actions

// export default favouritesSlice.reducer
