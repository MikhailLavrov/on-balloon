import { configureStore } from '@reduxjs/toolkit'
import favouritesReducer from './favouritesSlice';

export default configureStore({
  reducer: {
    favourites: favouritesReducer
  }
})
