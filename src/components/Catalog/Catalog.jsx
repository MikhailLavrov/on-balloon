import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import c from './Catalog.module.scss';

const Catalog = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className={c.catalog}>
      <Button type="button" onClick={showDrawer} icon={<MenuOutlined />}  className={c.catalog_button} >
        Каталог товаров
      </Button>
      <Drawer
        title="Каталог товаров"
        placement={'right'}
        closable={false}
        onClose={onClose}
        open={open}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

export default Catalog;
