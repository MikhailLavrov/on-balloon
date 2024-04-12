import React, { useEffect } from 'react';
import c from './MobileNavigation.module.scss';
import { initFavourites } from '../../redux/favouritesSlice';
import { initShoppingCart } from '../../redux/shoppingCartSlice';
import { setBurgerIsOpened } from '../../redux/burgerMenuSlice';
import { MobileCatalogDrawer } from '../MobileCatalogDrawer/MobileCatalogDrawer';
import { MobileNavigationItem } from './MobileNavigationItem';
import { MobileNavigationData } from '../../data/mobileNavigationData';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawerState } from '../../redux/catalogDrawerSlice';

export const MobileNavigation = () => {
  const isBurgerOpenedState = useSelector(state => state.burgerMenu.isOpened)
  const drawerVisibleState = useSelector(state => state.catalogDrawer.mainDrawerIsOpened)

  const mobileNavigationData = MobileNavigationData();

  const dispatch = useDispatch();

  useEffect(() => {
    const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites')) || [];
    dispatch(initFavourites(favoritesFromStorage))
    const shoppingCartFromStorage = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    dispatch(initShoppingCart(shoppingCartFromStorage))
  }, [dispatch]);

  
  const onNavLinkClick = () => {
    drawerVisibleState && dispatch(setDrawerState({mainDrawerIsOpened: false}))
    isBurgerOpenedState && dispatch(setBurgerIsOpened({ isOpened: false }));
  }

  return (
    <div className={c.mobileNavigation}>
      <div className={c.mobileNavigation__container}>
        {mobileNavigationData.map((item, index) => (
          <MobileNavigationItem 
            key={index}
            item={item} 
            onNavLinkClick={onNavLinkClick} 
          />
        ))}
      </div>
      <MobileCatalogDrawer />
    </div>
  );
};
