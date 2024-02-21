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
  // ИЗ STATE - то что нажали с hero (balloons - photozone - animation - attractions)
  
  // Only one menu opened logic
  const [openKeys, setOpenKeys] = useState(
    [currentTopCategoryState && currentTopCategoryState !== '' ? currentTopCategoryState : catalogMenuData[1].key]
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

    // Get the first key from infoMenuData
    // const defaultKey = infoMenuData.length > 0 ? infoMenuData[0].children[0].key : null;
  return (
    <ConfigProvider theme={theme} >
      <Menu
        onClick={handleMenuClick}
        style={style}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        mode="inline"
        items={catalogMenuData}
        // defaultSelectedKeys={currentSelectedKey && currentSelectedKey !== '' ? currentSelectedKey : defaultKey}
        defaultSelectedKeys={defaultSelectedKeys}
        className={c.menu}
      />
    </ConfigProvider>
  )
};
