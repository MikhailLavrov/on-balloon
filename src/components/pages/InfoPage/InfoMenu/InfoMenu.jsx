import { ConfigProvider, Menu } from 'antd';
import { infoMenuData } from '../../../../data/infoMenuData';
import c from './InfoMenu.module.scss';

export const InfoMenu = ({style, handleMenuClick, theme}) => {
  return (
    <ConfigProvider theme={theme} >
      <Menu
        onClick={handleMenuClick}
        style={style}
        defaultSelectedKeys={['news']}
        defaultOpenKeys={['aboutcompany', 'forclients', 'shipping']}
        mode="inline"
        items={infoMenuData}
        className={c.menu}
      />
    </ConfigProvider>
  )
};
