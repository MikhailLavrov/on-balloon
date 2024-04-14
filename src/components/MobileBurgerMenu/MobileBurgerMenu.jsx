import React, { useEffect, useState } from 'react';
import { Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import c from './MobileBurgerMenu.module.scss';
import { Link } from 'react-router-dom';
import { setBurgerIsOpened } from '../../redux/burgerMenuSlice';
import { useDispatch, useSelector } from 'react-redux';
import { MobileTopMenu } from '../MobileTopMenu/MobileTopMenu';
import LOGO from '../../assets/logonew.webp';

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

  const MenuHeader = () => {
    return (
      <div className={c.menuHeader}>
        <img src={LOGO} width={20} height={20} alt='Logo' />
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
        onClose={onClose}
        open={open}
        className={`${c.drawer} catalog__drawer`}
      >
        <div className={c.menu__links}>
          <Link to={'/'} onClick={handleLinkClick}>Главная</Link>
          <Link to={'/favourites'} onClick={handleLinkClick}>Избранное</Link>
          <Link to={'/gallery'} onClick={handleLinkClick}>Галерея</Link>
          <Link to={'/contacts'} onClick={handleLinkClick}>Контакты</Link>
        </div>
        <MobileTopMenu handleLinkClick={handleLinkClick} isBurgerOpened={open} />
      </Drawer>
    </div>
  );
};
