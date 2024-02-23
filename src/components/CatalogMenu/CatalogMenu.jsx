import { ConfigProvider, Menu } from 'antd';
import { useState } from 'react';
import { catalogMenuData } from '../../data/catalogMenuData';
import c from './CatalogMenu.module.scss';
import { useSelector } from 'react-redux';

// Get submenu keys of first level from catalogMenuData
const rootSubmenuKeys = catalogMenuData.reduce((acc, item) => {
  if (item.children) {
    acc.push(item.key);
  }
  return acc;
}, []);

export const CatalogMenu = ({style, handleMenuClick, theme}) => {
  const currentTopCategoryState = useSelector(state => state.outerCatalogNav.currentTopCategory)
  
  // Only one menu opened logic
  const [openKeys, setOpenKeys] = useState(
    [currentTopCategoryState && currentTopCategoryState]
    );

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const defaultSelectedKeys = currentTopCategoryState && currentTopCategoryState !== '' 
    ? [catalogMenuData.find(item => item.key === currentTopCategoryState).children[0].key]
    : [catalogMenuData[0].key];

  return (
    <ConfigProvider theme={theme} >
      <Menu
        onClick={handleMenuClick}
        style={style}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        mode="inline"
        items={catalogMenuData}
        defaultSelectedKeys={defaultSelectedKeys}
        className={c.menu}
      />
    </ConfigProvider>
  )
};
