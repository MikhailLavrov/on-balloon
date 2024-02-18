import { configureStore } from '@reduxjs/toolkit'
import callMeBackReducer from './callMeBackSlice'
import favouritesReducer from './favouritesSlice'
import shoppingCartReducer from './shoppingCartSlice'
import menuNavReducer from './menuNavSlice'
import collectionsNavReducer from './collectionsNavSlice'

const store = configureStore({
  reducer: {
    callMeBack: callMeBackReducer,
    favourites: favouritesReducer,
    shoppingCart: shoppingCartReducer,
    menuNav: menuNavReducer,
    collectionsNav: collectionsNavReducer,
  },
});

export default store;
