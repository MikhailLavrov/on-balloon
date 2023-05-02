import { useState } from 'react';
import c from './DesktopMenu.module.scss';
import { HomeOutlined, BulbOutlined, FireOutlined, PictureOutlined, LineOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

export const DesktopMenu = () => {
  const [current, setCurrent] = useState('home');

  const onClick = (e) => {
    setCurrent(e.key);
  };

  const menuDataDesktop = [
    {label: <Link to={'/'}>Главная</Link>, key: 'home', icon: <HomeOutlined />},
    {label: <Link to={'/hot'}>Спецпредложения</Link>, key: 'hot', icon: <FireOutlined />},
    {label: <Link to={'/gallery'}>Галерея работ</Link>, key: 'gallery', icon: <PictureOutlined />},
    {label: 'Услуги', key: 'services', icon: <BulbOutlined />,
      children: [
        {label: 'Украшение сцены', key: 'sceneDecor', icon: <LineOutlined />},
        {label: 'Украшение помещения', key: 'roomDecor', icon: <LineOutlined />},
      ],
    },
  ];
  
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
