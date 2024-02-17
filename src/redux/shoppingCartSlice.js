import { createSlice } from '@reduxjs/toolkit';

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: 0,
  reducers: {
    initShoppingCart: (state, action) => {
      return state = action.payload;
    },
    addToShoppingCart: state => {
      return state + 1;
    },
    deleteFromShoppingCart: state => {
      return state - 1;
    },
  },
});

export const { initShoppingCart, addToShoppingCart, deleteFromShoppingCart } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;



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
