import { ConfigProvider, Menu } from 'antd';
import { infoMenuData } from '../../../../data/infoMenuData';
import c from './InfoMenu.module.scss';
import { useSelector } from 'react-redux';

// Get submenu keys of first level from infoMenuData
const rootSubmenuKeys = infoMenuData.reduce((acc, item) => {
if (item.children) {
  acc.push(item.key);
}
return acc;
}, []);

export const InfoMenu = ({style, handleMenuClick, theme}) => {
  const currentSelectedKey = useSelector(state => state.menuNav.currentMenu);

  // Get the first key from infoMenuData
  const defaultKey = infoMenuData.length > 0 ? infoMenuData[0].children[0].key : null;
  
  return (
    <ConfigProvider theme={theme} >
      <Menu
        onClick={handleMenuClick}
        style={style}
        defaultSelectedKeys={currentSelectedKey && currentSelectedKey !== '' ? currentSelectedKey : defaultKey}
        defaultOpenKeys={rootSubmenuKeys}
        mode="inline"
        items={infoMenuData}
        className={c.menu}
      />
    </ConfigProvider>
  )
};

