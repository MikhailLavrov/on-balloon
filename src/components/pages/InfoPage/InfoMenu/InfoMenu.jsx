import { ConfigProvider, Menu } from 'antd';
import { infoMenuData } from '../../../../data/infoMenuData';
import c from './InfoMenu.module.scss';
import { useSelector } from 'react-redux';

export const InfoMenu = ({style, handleMenuClick, theme}) => {
  const currentSelectedKey = useSelector(state => state.menuNav.currentMenu);

  return (
    <ConfigProvider theme={theme} >
      <Menu
        onClick={handleMenuClick}
        style={style}
        defaultSelectedKeys={currentSelectedKey !== '' ? currentSelectedKey : 'news'}
        defaultOpenKeys={['aboutcompany', 'forclients', 'shipping']}
        mode="inline"
        items={infoMenuData}
        className={c.menu}
      />
    </ConfigProvider>
  )
};
