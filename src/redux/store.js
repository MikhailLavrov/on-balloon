import { configureStore } from '@reduxjs/toolkit'
import callMeBackReducer from './callMeBackSlice'
import favouritesReducer from './favouritesSlice'
import shoppingCartReducer from './shoppingCartSlice'
import menuNavReducer from './menuNavSlice'
import outerCatalogNavReducer from './outerCatalogNavSlice'

const store = configureStore({
  reducer: {
    callMeBack: callMeBackReducer,
    favourites: favouritesReducer,
    shoppingCart: shoppingCartReducer,
    menuNav: menuNavReducer,
    outerCatalogNav: outerCatalogNavReducer,
  },
});

export default store;
