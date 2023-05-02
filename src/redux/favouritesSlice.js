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
      })
    },
    deleteFavourite: (state, action) => {
      const index = state.findIndex(item => item.key === action.payload.key)
      if (index !== -1) {
        state.splice(index, 1)
      }
    },
  }
})

// Action creators are generated for each case reducer function
export const { addFavourite, deleteFavourite } = favouritesSlice.actions

export default favouritesSlice.reducer
