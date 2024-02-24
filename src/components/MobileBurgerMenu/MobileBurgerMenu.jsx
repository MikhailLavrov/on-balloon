import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { AlignLeftOutlined, EnvironmentOutlined, HeartOutlined, HomeOutlined, MenuOutlined, PictureOutlined, RightOutlined } from '@ant-design/icons';
import c from './MobileBurgerMenu.module.scss';
import { Link } from 'react-router-dom';

export const MobileBurgerMenu = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleLinkClick = () => {
    onClose(); // Закрыть бургер-меню при клике на ссылку
  };

  return (
    <div className={c.mobileBurgerMenu}>
      <Button 
        type="button"
        onClick={showDrawer}
        icon={<MenuOutlined style={{ fontSize: '20px' }} />}
        className={c.burgerButton}
      />
      <Drawer
        title="Меню"
        placement={'right'}
        closable={true}
        onClose={onClose}
        open={open}
      >
        <div className={c.menu__links}>

          <Link to={'/'} onClick={handleLinkClick}>
            <HomeOutlined /> 
            Главная 
            <RightOutlined style={{fontSize: '12px', color: '#888888', marginLeft: 'auto'}} />
          </Link>

          <Link to={'/catalog'} onClick={handleLinkClick}>
            <AlignLeftOutlined /> 
            Каталог 
            <RightOutlined style={{fontSize: '12px', color: '#888888', marginLeft: 'auto'}} />
          </Link>

          <Link to={'/favourites'} onClick={handleLinkClick}>
            <HeartOutlined /> 
            Избранное 
            <RightOutlined style={{fontSize: '12px', color: '#888888', marginLeft: 'auto'}} />
          </Link>

          <Link to={'/gallery'} onClick={handleLinkClick}>
            <PictureOutlined /> 
            Галерея 
            <RightOutlined style={{fontSize: '12px', color: '#888888', marginLeft: 'auto'}} />
          </Link>

          <Link to={'/contacts'} onClick={handleLinkClick}>
            <EnvironmentOutlined /> 
            Контакты 
            <RightOutlined style={{fontSize: '12px', color: '#888888', marginLeft: 'auto'}} />
          </Link>

        </div>
        
      </Drawer>
    </div>
  );
};
