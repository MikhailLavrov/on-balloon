import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AlignLeftOutlined, EnvironmentOutlined, HeartOutlined, HomeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import c from './MobileNavigation.module.scss';
import { Badge, Drawer } from 'antd';
import { SearchComponent } from '../SearchComponent/SearchComponent';
import { useDispatch, useSelector } from 'react-redux';
import { initFavourites } from '../../redux/favouritesSlice';
import { initShoppingCart } from '../../redux/shoppingCartSlice';
import { MobileCatalogMenu } from '../MobileCatalogMenu/MobileCatalogMenu';
import { CatalogCard } from '../CatalogCard/CatalogCard';
import { catalogMenuData } from '../../data/catalogMenuData';
import { balloonsData } from '../../data/catalogData/balloonsData';
import { photozoneData } from '../../data/catalogData/photozoneData';
import { animationData } from '../../data/catalogData/animationData';
import { attractionsData } from '../../data/catalogData/attractionsData';
import { setCurrentCategory } from '../../redux/outerCatalogNavSlice';

export const MobileNavigation = () => {
  // Счетчики Корзина + Избранное
  const favouritesCountState = useSelector(state => state.favourites.count);
  const shoppingCartCountState = useSelector(state => state.shoppingCart.count);
  const dispatch = useDispatch();
  useEffect(() => {
    const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites')) || [];
    dispatch(initFavourites(favoritesFromStorage))
    const shoppingCartFromStorage = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    dispatch(initShoppingCart(shoppingCartFromStorage))
  }, [dispatch]);

  const location = useLocation();
  const navigate = useNavigate();
  
  // Drawer
  const [drawerVisible, setDrawerVisible] = useState(false);
  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const mobileNavigationData = [
    { 
      title: 'Главная', 
      link: '/', 
      icon: <HomeOutlined style={{ fontSize: '20px' }} /> 
    },
    { 
      title: 'Каталог', 
      link: '/catalog', onClick: toggleDrawer, 
      icon: <AlignLeftOutlined style={{ fontSize: '20px' }} /> 
    },
    { 
      title: 'Корзина', 
      link: '/cart', 
      icon: <Badge size='small' count={shoppingCartCountState}><ShoppingCartOutlined style={{ fontSize: '20px' }} /></Badge>
    },
    { 
      title: 'Избранное', 
      link: '/favourites', 
      icon: <Badge size='small' count={favouritesCountState}><HeartOutlined style={{ fontSize: '20px' }} /></Badge>
    },
    { 
      title: 'Контакты', 
      link: '/contacts', 
      icon: <EnvironmentOutlined style={{ fontSize: '20px' }} /> 
    }
  ];
  
  // =============================== Каталог меню ===============================

  const onClick = (e) => {
    dispatch(setCurrentCategory(
      {
        currentTopCategory: e.keyPath[e.keyPath.length - 1],
        currentCategory: e.key,
      }
    ));
    
    navigate('/catalog');
    setDrawerVisible(false);
  };

  return (
    <div className={c.mobileNavigation}>
      <div className={c.mobileNavigation__container}>
        {mobileNavigationData.map(item => (
          <div className={c.mobileNavigation__linkWrapper} key={item.title}>
            {item.onClick ? (
              <div 
                className={`${c.mobileNavigation__link} ${location.pathname === item.link ? c.active : ''}`} 
                onClick={item.onClick}
              >
                {item.icon} {item.title}
              </div>
            ) : (
              <Link
                to={item.link}
                className={`${c.mobileNavigation__link} ${location.pathname === item.link ? c.active : ''}`}
                onClick={() => setDrawerVisible(false)}
              >
                {item.icon} {item.title}
              </Link>
            )}
          </div>
        ))}
      </div>
      <Drawer
        title="Каталог"
        placement="left"
        closable={true}
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        bodyStyle={{paddingBottom: 80}}
      >
        <SearchComponent onCloseDrawer={() => setDrawerVisible(false)} className={c.searchComp} />
        <MobileCatalogMenu
          handleMenuClick={onClick}
          theme={{
            components: {
              Menu: {
                itemSelectedColor: 'black',
                itemSelectedBg: '#cdcdcd',
                fontFamily: 'Tilda Sans, Arial, sans-serif',
              },
            },
          }}
        />
      </Drawer>
    </div>
  );
};
