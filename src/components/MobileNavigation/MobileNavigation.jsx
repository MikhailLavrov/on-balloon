import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AlignLeftOutlined, EnvironmentOutlined, HeartOutlined, HomeOutlined, RightOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import c from './MobileNavigation.module.scss';
import { Badge, Drawer } from 'antd';
import { SearchComponent } from '../SearchComponent/SearchComponent';
import { useDispatch, useSelector } from 'react-redux';
import { initFavourites } from '../../redux/favouritesSlice';
import { initShoppingCart } from '../../redux/shoppingCartSlice';
import { setCurrentCategory } from '../../redux/outerCatalogNavSlice';
import { CollectionsTiles } from '../CollectionsTiles/CollectionsTiles';
import { catalogMenuData } from '../../data/catalogMenuData';

const SubMenuContent = ({currentTopCategory, outerHandler}) => {
  const category = catalogMenuData.find(item => item.key === currentTopCategory)
  const dispatch = useDispatch();

  const onClickHandler = (key) => {
    dispatch(setCurrentCategory({currentCategory: key, currentTopCategory: currentTopCategory}))
    if (outerHandler) {
      outerHandler();
    }
  }
  
  return (
    <div className={c.innerDrawer__content}>
      {category.children.map((item, index) => {
        return (
          <Link to={'/catalog'} key={index} onClick={() => onClickHandler(item.key)}>
            {item.label} <RightOutlined style={{fontSize: '12px', color: '#888888'}} />
          </Link>
        )})
      }
    </div>
  )
}

const MobileNavigationDrawer = ({drawerVisible, childrenDrawerVisible, toggleDrawer, showChildrenDrawer, onChildrenDrawerClose}) => {
  const [currentTopCategory, setCurrentTopCategory] = useState(null);

  const outerDrawerHandler = () => {
    onChildrenDrawerClose();
    toggleDrawer();
  }

  // Функция для обработки выбора тайла
  const onCollectionClick = (key) => {
    setCurrentTopCategory(key);
    showChildrenDrawer();
  };

  return (
    <Drawer
      title="Каталог"
      placement="left"
      closable={true}
      onClose={() => toggleDrawer()}
      open={drawerVisible}
      bodyStyle={{paddingBottom: 80}}
    >

      <SearchComponent onCloseDrawer={() => toggleDrawer()} className={c.searchComp} />

      <div className={c.mobileNavigation__tiles}>
        <CollectionsTiles outerHandler={(key) => onCollectionClick(key)} />
      </div>

      <Drawer
        title="Подраздел"
        placement="left"
        closable={true}
        onClose={onChildrenDrawerClose}
        open={childrenDrawerVisible}
        bodyStyle={{paddingBottom: 80}}
      >
        <SubMenuContent currentTopCategory={currentTopCategory} outerHandler={outerDrawerHandler} />
        
      </Drawer>
    </Drawer>
  )
}


export const MobileNavigation = () => {
  // Счетчики Корзина + Избранное
  const favouritesCountState = useSelector(state => state.favourites.count);
  const shoppingCartCountState = useSelector(state => state.shoppingCart.count);
  const currentTopCategoryState = useSelector(state => state.outerCatalogNav.currentTopCategory);

  // const [currentTopCategory, setCurrentTopCategory] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites')) || [];
    dispatch(initFavourites(favoritesFromStorage))
    const shoppingCartFromStorage = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    dispatch(initShoppingCart(shoppingCartFromStorage))

    // console.log(currentTopCategoryState)
  }, [dispatch, currentTopCategoryState]);

  const location = useLocation();
  
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

  const onNavLinkClick = () => {
    setDrawerVisible(false);
    onChildrenDrawerClose();
  }
  
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
                onClick={() => onNavLinkClick()}
              >
                {item.icon} {item.title}
              </Link>
            )}
          </div>
        ))}
      </div>
      <MobileNavigationDrawer 
        drawerVisible={drawerVisible}
        childrenDrawerVisible={childrenDrawerVisible}
        toggleDrawer={toggleDrawer}
        showChildrenDrawer={showChildrenDrawer}
        onChildrenDrawerClose={onChildrenDrawerClose}
      />
    </div>
  );
};