import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { SearchComponent } from '../SearchComponent/SearchComponent';
import c from './MobileSearch.module.scss';

export const MobileSearch = () => {
  const [open, setOpen] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const showDrawer = () => {
    setOpen(true);
    setIsInputFocused(true); // Устанавливаем состояние для фокуса на вводе
  };

  const onClose = () => {
    setOpen(false);
    setIsInputFocused(false); // Сбрасываем состояние для фокуса на вводе
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
          icon={<SearchOutlined style={{ fontSize: '20px' }} />} 
        />
      </div>
      <Drawer
        size="default"
        title={<SearchComponent 
          getFocus
          onSearch={handleSearch} 
          autoFocus={isInputFocused}
        /> }
        placement="right"
        closable={true}
        onClose={onClose}
        open={open}
      >
      </Drawer>
    </div>
  );
};
