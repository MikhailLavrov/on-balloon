import { Drawer, Menu } from 'antd';
import { menuData } from '../../data/menuData';

export const DrawerComponent = ({ open, toggleMenu }) => {
  const drawerOptions = {
    placement: 'top',
    closable: false,
    onClose: toggleMenu,
    open: open,
    height: 'auto',
    bodyStyle: {paddingLeft: 0, paddingRight: 0},
    contentWrapperStyle: {top: '50px'},
  };

  const menuOptions = {
    mode: 'inline',
    items: menuData,
    onClick: toggleMenu,
  };

  return (
    <Drawer {...drawerOptions}>
      <Menu {...menuOptions}/>
    </Drawer>
  );
};
