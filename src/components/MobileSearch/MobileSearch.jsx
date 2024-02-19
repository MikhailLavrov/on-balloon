import c from './MobileSearch.module.scss';
import { SearchOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import SearchComponent from '../SearchComponent/SearchComponent';

const MobileSearch = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
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
        title="Поиск"
        placement="top"
        closable={true}
        onClose={onClose}
        open={open}
        
      >
        <SearchComponent />
      </Drawer>
    </div>
  );
};
export default MobileSearch;