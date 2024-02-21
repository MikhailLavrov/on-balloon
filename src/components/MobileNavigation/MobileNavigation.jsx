import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AlignLeftOutlined, EnvironmentOutlined, HeartOutlined, HomeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import c from './MobileNavigation.module.scss';
import { Drawer } from 'antd';
import { SearchComponent } from '../SearchComponent/SearchComponent';

export const MobileNavigation = () => {
  const location = useLocation();
  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const mobileNavigationData = [
    { title: 'Главная', link: '/', icon: <HomeOutlined style={{ fontSize: '20px' }} /> },
    { title: 'Каталог', link: '/catalog', onClick: toggleDrawer, icon: <AlignLeftOutlined style={{ fontSize: '20px' }} /> },
    { title: 'Корзина', link: '/cart', icon: <ShoppingCartOutlined style={{ fontSize: '20px' }} /> },
    { title: 'Избранное', link: '/favourites', icon: <HeartOutlined style={{ fontSize: '20px' }} /> },
    { title: 'Контакты', link: '/contacts', icon: <EnvironmentOutlined style={{ fontSize: '20px' }} /> }
  ];

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
      </Drawer>
    </div>
  );
};
