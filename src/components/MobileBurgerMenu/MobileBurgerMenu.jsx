import React, { useEffect, useState } from 'react';
import { Button, Drawer } from 'antd';
import { EnvironmentOutlined, HeartOutlined, HomeOutlined, MenuOutlined, PictureOutlined, RightOutlined } from '@ant-design/icons';
import c from './MobileBurgerMenu.module.scss';
import { Link } from 'react-router-dom';
import { setBurgerIsOpened } from '../../redux/burgerMenuSlice';
import { useDispatch, useSelector } from 'react-redux';
import { MobileTopMenu } from '../MobileTopMenu/MobileTopMenu';

export const MobileBurgerMenu = () => {
  const dispatch = useDispatch();
  const isBurgerOpenedState = useSelector(state => state.burgerMenu.isOpened);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(isBurgerOpenedState);
  }, [isBurgerOpenedState]);

  const showDrawer = () => {
    setOpen(true);
    !isBurgerOpenedState && dispatch(setBurgerIsOpened({ isOpened: true }));
  };

  const onClose = () => {
    setOpen(false);
    isBurgerOpenedState && dispatch(setBurgerIsOpened({ isOpened: false }));
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
        className={c.drawer}
      >
        <div className={c.menu__links}>

          <Link to={'/'} onClick={handleLinkClick}>
            <HomeOutlined /> 
            Главная 
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

        <MobileTopMenu handleLinkClick={handleLinkClick} isBurgerOpened={open} />
        
      </Drawer>
    </div>
  );
};
