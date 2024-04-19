import React from 'react';
import { useNavigate } from 'react-router-dom';
import c from './MobileTopMenu.module.scss';
import { infoMenuData } from '../../data/infoData/infoMenuData';
import { Collapse, ConfigProvider } from 'antd';

export const MobileTopMenu = ({ handleMenuClose }) => {
  const navigate = useNavigate();

  const onClick = (key) => {
    handleMenuClose();
    navigate(`/info/${key}`);
  };

  const items = infoMenuData.map((parentItem) => (
    {
      key: parentItem.key,
      label: parentItem.label,
      children: parentItem.children.map((childItem) => (
        <div
          key={childItem.key}
          onClick={() => onClick(childItem.key)}
          className={c.mobileTopMenu__option}
        >
            {childItem.label}
        </div>
      )),
    }
  ));

  return (
    <div className={c.mobileTopMenu}>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "Tilda Sans",
            fontSize: '20px',
            fontSizeIcon: '12px',
          },
          components: {
            Collapse: {
              headerPadding: '20px',
              headerBg: 'white',
              contentPadding: '15px 20px',
            },
          },
        }}
      >
        <Collapse accordion className={c.mobileTopMenu__collapse} items={items} expandIconPosition="right" />
      </ConfigProvider>
    </div>
  );
};

export default MobileTopMenu;
