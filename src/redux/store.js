import { configureStore } from '@reduxjs/toolkit'
import callMeBackReducer from './callMeBackSlice'
import favouritesReducer from './favouritesSlice'
import shoppingCartReducer from './shoppingCartSlice'
import menuNavReducer from './menuNavSlice'
import outerCatalogNavReducer from './outerCatalogNavSlice'
import burgerMenuReducer from './burgerMenuSlice'
import catalogDrawerReducer from './catalogDrawerSlice'

const store = configureStore({
  reducer: {
    callMeBack: callMeBackReducer,
    favourites: favouritesReducer,
    shoppingCart: shoppingCartReducer,
    menuNav: menuNavReducer,
    outerCatalogNav: outerCatalogNavReducer,
    burgerMenu: burgerMenuReducer,
    catalogDrawer: catalogDrawerReducer,
  },
});

export default store;
