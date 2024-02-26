import React, { useEffect, useState } from 'react';
import c from './MobileNavigation.module.scss';
import { initFavourites } from '../../redux/favouritesSlice';
import { initShoppingCart } from '../../redux/shoppingCartSlice';
import { setBurgerIsOpened } from '../../redux/burgerMenuSlice';
import { MobileNavigationItem } from './MobileNavigationItem';
import { MobileNavigationData } from '../../data/mobileNavigationData';
import { useDispatch, useSelector } from 'react-redux';
import { MobileCatalogDrawer } from './MobileCatalogDrawer';

export const MobileNavigation = () => {
  const isBurgerOpenedState = useSelector(state => state.burgerMenu.isOpened)

  const mobileNavigationData = MobileNavigationData();

  const dispatch = useDispatch();

  useEffect(() => {
    const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites')) || [];
    dispatch(initFavourites(favoritesFromStorage))
    const shoppingCartFromStorage = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    dispatch(initShoppingCart(shoppingCartFromStorage))
  }, [dispatch]);

  // Drawer
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [childrenDrawerVisible, setChildrenDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
    childrenDrawerVisible && setChildrenDrawerVisible(false);
  };
  const showChildrenDrawer = () => {
    setChildrenDrawerVisible(true);
  };
  const onChildrenDrawerClose = () => {
    setChildrenDrawerVisible(false);
  };

  const onNavLinkClick = () => {
    setDrawerVisible(false);
    onChildrenDrawerClose();
    isBurgerOpenedState && dispatch(setBurgerIsOpened({ isOpened: false }));
  }

  return (
    <div className={c.mobileNavigation}>
      <div className={c.mobileNavigation__container}>
        {mobileNavigationData.map((item, index) => (
          <MobileNavigationItem item={item} onNavLinkClick={onNavLinkClick} drawerLinkAction={toggleDrawer} key={index} />
        ))}
      </div>
      <MobileCatalogDrawer
        drawerVisible={drawerVisible}
        childrenDrawerVisible={childrenDrawerVisible}
        toggleDrawer={toggleDrawer}
        showChildrenDrawer={showChildrenDrawer}
        onChildrenDrawerClose={onChildrenDrawerClose}
      />
    </div>
  );
};
