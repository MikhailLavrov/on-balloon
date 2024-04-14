import { Menu, ConfigProvider } from 'antd';
import { useDispatch } from 'react-redux';
import { setCurrentMenu } from '../../redux/topMenuNavSlice';
import c from './MobileTopMenu.module.scss';
import { useState } from 'react';
import { infoMenuData } from '../../data/infoData/infoMenuData';

// Get submenu keys of first level from catalogMenuData
const rootSubmenuKeys = infoMenuData.reduce((acc, item) => {
  if (item.children) {
    acc.push(item.key);
  }
  return acc;
}, []);

export const MobileTopMenu = ({handleLinkClick, isBurgerOpened}) => {
  const dispatch = useDispatch();

  const [openKeys, setOpenKeys] = useState(['']);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const onClick = (e) => {
    dispatch(setCurrentMenu({ currentTopMenu: e.keyPath[e.keyPath.length - 1], currentSubMenu: e.key }));
    handleLinkClick(!isBurgerOpened)
  };

  return (
    <ConfigProvider 
      theme={{
        components: {
          Menu: {
            lineWidth: 0,
            fontSize: '10px',
            fontFamily: 'Tilda Sans, Arial, sans-serif',
            itemBorderRadius: 0,
            subMenuItemBorderRadius: 0,
            itemActiveBg: '#f7f8f9',
            itemHoverBg: '#f7f8f9',
            subMenuItemBg: '#f7f8f9',
            itemMarginBlock: 10,
            itemMarginInline: 0,
            itemPaddingInline: 10,
          }
        }}}>
      <Menu
        className={c.menu}
        onClick={onClick}
        selectedKeys={''}
        mode="inline"
        items={infoMenuData}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{
          backgroundColor: "transparent",
        }}
      />
    </ConfigProvider>
  )
}
