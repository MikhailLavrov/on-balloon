import { configureStore } from '@reduxjs/toolkit'
import callMeBackReducer from './callMeBackSlice'
import favouritesReducer from './favouritesSlice'
import shoppingCartReducer from './shoppingCartSlice'

const store = configureStore({
  reducer: {
    callMeBack: callMeBackReducer,
    favourites: favouritesReducer,
    shoppingCart: shoppingCartReducer,
  },
});

export default store;
