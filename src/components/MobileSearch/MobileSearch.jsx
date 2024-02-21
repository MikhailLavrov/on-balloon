// MobileSearch.jsx

import c from './MobileSearch.module.scss';
import { SearchOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { SearchComponent } from '../SearchComponent/SearchComponent';

export const MobileSearch = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleSearch = (searchValue) => {
    if (searchValue.trim() !== '') {
      onClose(); // Закрыть Drawer
    }
  };

  return (
    <div className={c.mobileSearch}>
      <div>
        <Button 
          type="button" 
          onClick={showDrawer} 
          className={c.searchButton} 
          icon={<SearchOutlined style={{fontSize: '20px'}} />} 
        />
      </div>
      <Drawer
        size='default'
        title="Поиск"
        placement="top"
        closable={true}
        onClose={onClose}
        open={open}
        bodyStyle={{height: 'auto'}}
      >
        <SearchComponent onSearch={handleSearch} /> {/* Передача функции */}
      </Drawer>
    </div>
  );
};
