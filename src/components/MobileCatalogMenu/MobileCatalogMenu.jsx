import { ConfigProvider, Menu } from 'antd';
import { useState } from 'react';
import { catalogMenuData } from '../../data/catalogMenuData';
import c from './MobileCatalogMenu.module.scss';
import { useSelector } from 'react-redux';
import { CollectionsTiles } from '../CollectionsTiles/CollectionsTiles';

// Get submenu keys of first level from catalogMenuData
const rootSubmenuKeys = catalogMenuData.reduce((acc, item) => {
  if (item.children) {
    acc.push(item.key);
  }
  return acc;
}, []);

export const MobileCatalogMenu = ({style, handleMenuClick, theme}) => {
  const currentTopCategoryState = useSelector(state => state.outerCatalogNav.currentTopCategory)
  
  // Only one menu opened logic
  const [openKeys, setOpenKeys] = useState(
    [currentTopCategoryState && currentTopCategoryState !== '' ? currentTopCategoryState : '']
    );

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
        className={c.menu}
      />
    </ConfigProvider>
  )
};
