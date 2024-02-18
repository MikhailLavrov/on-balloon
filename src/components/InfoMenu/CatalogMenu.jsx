import { ConfigProvider, Menu } from 'antd';
import { useState } from 'react';
import { catalogMenuData } from '../../../../data/catalogMenuData';
import c from './CatalogMenu.module.scss';

// submenu keys of first level
const rootSubmenuKeys = ['balloons', 'photozone', 'animation', 'attractions'];

export const CatalogMenu = ({style, handleMenuClick, theme}) => {
  // Only one menu opened logic
  const [openKeys, setOpenKeys] = useState(['hot', 'balloons']);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <ConfigProvider theme={theme} >
      <Menu
        onClick={handleMenuClick}
        style={style}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        mode="inline"
        items={catalogMenuData}
        defaultSelectedKeys={['hot']}
        className={c.menu}
      />
    </ConfigProvider>
  )
};