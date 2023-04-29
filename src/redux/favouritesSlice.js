import { createSlice } from '@reduxjs/toolkit'
import {assortmentData} from '../data/assortmentData';

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: [],
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = favouritesSlice.actions

export default favouritesSlice.reducer
