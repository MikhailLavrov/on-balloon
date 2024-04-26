import { configureStore } from '@reduxjs/toolkit'
import favouritesReducer from './favouritesSlice'
import shoppingCartReducer from './shoppingCartSlice'
import burgerMenuReducer from './burgerMenuSlice'
import catalogDrawerReducer from './catalogDrawerSlice'

const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
    shoppingCart: shoppingCartReducer,
    burgerMenu: burgerMenuReducer,
    catalogDrawer: catalogDrawerReducer,
  },
});

export default store;
