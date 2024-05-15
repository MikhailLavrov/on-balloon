import { configureStore } from '@reduxjs/toolkit'
import favouritesReducer from './favouritesSlice'
import shoppingCartReducer from './shoppingCartSlice'
import burgerMenuReducer from './burgerMenuSlice'
import catalogDrawerReducer from './catalogDrawerSlice'
import costumeSliceReducer from './costumeSlice'

const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
    shoppingCart: shoppingCartReducer,
    burgerMenu: burgerMenuReducer,
    catalogDrawer: catalogDrawerReducer,
    costume: costumeSliceReducer,
  },
});

export default store;
