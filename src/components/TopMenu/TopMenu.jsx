import { useState } from 'react';
import { Menu, ConfigProvider } from 'antd';
import { topMenuData } from '../../data/topMenuData';

export const TopMenu = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
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
        selectedKeys={[current]}
        mode="horizontal"
        items={topMenuData}
        style={{
          backgroundColor: "transparent",
        }}
        />
    </ConfigProvider>
  )
}
