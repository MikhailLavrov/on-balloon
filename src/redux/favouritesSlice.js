import { createSlice } from '@reduxjs/toolkit';

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: 0,
  reducers: {
    initFavourite: (state, action) => {
      return state = action.payload;
    },
    addToFavourites: state => {
      return state + 1;
    },
    deleteFromFavourites: state => {
      return state - 1;
    },
  },
});

export const { initFavourite, addToFavourites, deleteFromFavourites } = favouritesSlice.actions;

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
