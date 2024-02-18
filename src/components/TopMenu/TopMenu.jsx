import { Menu, ConfigProvider } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentMenu } from '../../redux/menuNavSlice';
import { topMenuData } from '../../data/topMenuData';

export const TopMenu = () => {
  const currentMenu = useSelector(state => state.menuNav.currentMenu);
  const dispatch = useDispatch();

  const onClick = (e) => {
    dispatch(setCurrentMenu({ currentTopMenu: e.keyPath[e.keyPath.length - 1], currentMenu: e.key }));
  };
  
  const theme = {
    token: {
      colorPrimary: '#f83939',
      lineWidth: 0,
      fontSize: '10px',
      fontFamily: 'Tilda Sans, Arial, sans-serif'
    },
  }

  return (
    <ConfigProvider theme={theme}>
      <Menu
        onClick={onClick}
        selectedKeys={[currentMenu]}
        mode="horizontal"
        items={topMenuData}
        style={{
          backgroundColor: "transparent",
        }}
      />
    </ConfigProvider>
  )
}
