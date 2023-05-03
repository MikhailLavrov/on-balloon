import { createSlice } from '@reduxjs/toolkit'

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: [],
  reducers: {
    addFavourite: (state, action) => {
      state.push({
        key: action.payload.key,
        label: action.payload.label,
        iconurl: action.payload.iconurl,
        price: action.payload.price,
        unit: action.payload.unit,
      })
    },
    deleteFavourite: (state, action) => {
      const index = state.findIndex(item => item.key === action.payload.key)
      if (index !== -1) {
        state.splice(index, 1)
      }
    },
    updateFavourites: (state, action) => {
      state = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { addFavourite, deleteFavourite, updateFavourites } = favouritesSlice.actions

export default favouritesSlice.reducer
