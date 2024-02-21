import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
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
  return (
    <div>
      <Button type="button" onClick={showDrawer} icon={<MenuOutlined style={{fontSize: '20px'}} />}  className={c.burgerButton}></Button>
      <Drawer
        title="Мобильное меню"
        placement={'top'}
        closable={true}
        onClose={onClose}
        open={open}
      >
        <Link to={'/catalog'}>Каталог</Link>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};
