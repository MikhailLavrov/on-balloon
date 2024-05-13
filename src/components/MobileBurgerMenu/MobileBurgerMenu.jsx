import React, { useEffect, useState } from 'react';
import { Button, Drawer, Image } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import c from './MobileBurgerMenu.module.scss';
import { Link } from 'react-router-dom';
import { setBurgerIsOpened } from '../../redux/burgerMenuSlice';
import { useDispatch, useSelector } from 'react-redux';
import { MobileTopMenu } from '../MobileTopMenu/MobileTopMenu';
import LOGO from '../../assets/logonew.webp';
import { ImagePreloader } from '../../utils/ImagePreloader/ImagePreloader';

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

  const handleMenuClose = () => {
    setOpen(false);
    isBurgerOpenedState && dispatch(setBurgerIsOpened({ isOpened: false }));
  };

  const MenuHeader = () => {
    return (
      <div className={c.menuHeader}>
        <Image
          src={LOGO}
          width={20}
          height={20}
          alt='Logo'
          preview={false}
          placeholder={<ImagePreloader />}
        />
        <span>Меню</span>
      </div>
    )
  }

  return (
    <div className={c.mobileBurgerMenu}>
      <Button 
        type="button"
        onClick={showDrawer}
        icon={<MenuOutlined style={{ fontSize: '20px' }} />}
        className={c.burgerButton}
      />
      <Drawer
        title={<MenuHeader />}
        placement={'right'}
        closable={true}
        onClose={handleMenuClose}
        open={open}
        className={`${c.drawer} catalog__drawer`}
      >
        <div className={c.menu__links}>
          <Link to={'/'} onClick={handleMenuClose}>Главная</Link>
          <Link to={'/favourites'} onClick={handleMenuClose}>Избранное</Link>
          <Link to={'/gallery'} onClick={handleMenuClose}>Галерея</Link>
          <Link to={'/contacts'} onClick={handleMenuClose}>Контакты</Link>
        </div>
        <MobileTopMenu handleMenuClose={handleMenuClose} isBurgerOpened={open} />
      </Drawer>
    </div>
  );
};
