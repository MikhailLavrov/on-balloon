import { configureStore } from '@reduxjs/toolkit'
import callMeBackReducer from './favouritesSlice'

const store = configureStore({
  reducer: callMeBackReducer
})

export default store;
