import { ConfigProvider, Menu } from 'antd';
import { infoMenuData } from '../../data/infoData/infoMenuData';
import c from './InfoMenu.module.scss';
import { useNavigate, useParams } from 'react-router-dom';

// Get submenu keys of first level from infoMenuData
const rootSubmenuKeys = infoMenuData.reduce((acc, item) => {
if (item.children) {
  acc.push(item.key);
}
return acc;
}, []);

export const InfoMenu = ({ style, theme }) => {
  const { chapter } = useParams();
  const navigate = useNavigate();

  // Get the first key from infoMenuData
  const defaultKey = infoMenuData.length > 0 ? infoMenuData[0].children[0].key : null;

  const handleMenuClick = (e) => {
    navigate(`/info/${e.key}`);
  };

  return (
    <ConfigProvider theme={theme}>
      <Menu
        onClick={(e) => handleMenuClick(e)}
        style={style}
        selectedKeys={[chapter && chapter !== '' ? chapter : defaultKey]}
        defaultOpenKeys={rootSubmenuKeys}
        mode="inline"
        items={infoMenuData}
        className={c.menu}
      />
    </ConfigProvider>
  );
};
