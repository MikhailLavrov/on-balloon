import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { AlignLeftOutlined, EnvironmentOutlined, HeartOutlined, HomeOutlined, MenuOutlined, PictureOutlined } from '@ant-design/icons';
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
        placement={'left'}
        closable={true}
        onClose={onClose}
        visible={open} // Заменено на visible
      >
        <div className={c.menu__links}>
          <Link to={'/'} onClick={handleLinkClick}><HomeOutlined /> Главная</Link>
          <Link to={'/catalog'} onClick={handleLinkClick}><AlignLeftOutlined /> Каталог</Link>
          <Link to={'/favourites'} onClick={handleLinkClick}><HeartOutlined /> Избранное</Link>
          <Link to={'/gallery'} onClick={handleLinkClick}><PictureOutlined /> Галерея</Link>
          <Link to={'/contacts'} onClick={handleLinkClick}><EnvironmentOutlined /> Контакты</Link>
        </div>
        
      </Drawer>
    </div>
  );
};
