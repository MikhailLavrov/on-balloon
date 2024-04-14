import { Menu, ConfigProvider } from 'antd';
import { infoMenuData } from '../../data/infoData/infoMenuData';
import { useNavigate } from 'react-router-dom';
import { CaretDownOutlined } from '@ant-design/icons';

export const TopMenu = () => {
  const navigate = useNavigate();

  const onClick = (e) => {
    navigate(`/info/${e.key}`)
  };
  
  const theme = {
    token: {
      colorPrimary: '#f83939',
      lineWidth: 0,
      fontSize: '15px',
      fontFamily: 'Tilda Sans, Arial, sans-serif'
    },
  }
  
  return (
    <ConfigProvider theme={theme}>
      <Menu
        onClick={onClick}
        selectedKeys={''}
        mode="horizontal"
        items={infoMenuData.map(item => ({
          ...item,
          icon: <CaretDownOutlined style={{fontSize: '10px'}} />
        }))}
        style={{
          backgroundColor: "transparent",
        }}
      />
    </ConfigProvider>
  )
}
