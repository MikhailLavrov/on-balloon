import React, { useState } from 'react';
import { AppstoreOutlined, BulbOutlined, BuildOutlined, SmileOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const CatalogMenuItems = [
  getItem('Воздушные шары', 'balloons', <BulbOutlined />, [
    getItem('14 февраля', '1'),
    getItem('Для него', '2'),
    getItem('Гендер-пати', '3'),
    getItem('Скидки, Акции', '4'),
    getItem('Готовые наборы шаров', '5'),
    getItem('Шары с рисунком и без', '6'),
    getItem('Фигуры, цифры', '7'),
    getItem('Готовые фотозоны', '8'),
    getItem('Гирлянды, арки, стойки', '9'),
  ]),
  getItem('Фотозоны', 'photozone', <AppstoreOutlined />, [
    getItem('С пайетками', '10'),
    getItem('С цветами', '11'),
    getItem('С шарами', '12'),
  ]),
  getItem('Аниматоры и шоу', 'animation', <SmileOutlined />, [
    getItem('Крио-шоу', '13'), 
    getItem('Шоу мыльных пузырей', '14'),
    getItem('Химическое шоу', '15'),
  ]),
  getItem('Аттракционы и оборудование', 'attractions', <BuildOutlined />, [
    getItem('Аттракционы', '16', null, 
      [getItem('Батут Сказка', '17'), 
      getItem('Батут Ботинок', '18'),
      getItem('Батут Спортивный', '19'),
    ]),
    getItem('Оборудование в аренду', '20', null, 
      [getItem('Сладкая вата', '21'), 
      getItem('Попкорн', '22'),
      getItem('Яблоки в карамели', '23'),
    ]),
  ]),
];

const onClick = (e) => {
  console.log(e.keyPath);
};

// submenu keys of first level
const rootSubmenuKeys = ['balloons', 'photozone', 'animation', 'attractions'];

const CatalogMenu = ({style}) => {
  const [openKeys, setOpenKeys] = useState(['']);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  
  return (
    <Menu
      onClick={onClick}
      style={style}
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      mode="inline"
      items={CatalogMenuItems}
    />
  )
};

export default CatalogMenu;
