import { useState } from 'react';
import c from './DesktopMenu.module.scss';
import { Menu } from 'antd';
import { menuDataDesktop } from '../../data/menuData';

export const DesktopMenu = () => {
  const [current, setCurrent] = useState('home');

  const onClick = (e) => {
    setCurrent(e.key);
  };
  
  return (
    <Menu 
      className={c.desktopMenu}
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={menuDataDesktop}
      />
  )
}
