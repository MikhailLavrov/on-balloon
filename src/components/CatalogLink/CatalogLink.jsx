import React, { useState } from 'react';
import { Button, Drawer, Space } from 'antd';
import { DoubleRightOutlined, MenuOutlined } from '@ant-design/icons';
import c from './CatalogLink.module.scss';
import CatalogMenu from '../CatalogMenu/CatalogMenu';

const Catalog = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onGoToCatalog = () => {
    setOpen(false);
  };

  return (
    <div className={c.catalog}>
      <Button type="button" onClick={showDrawer} icon={<MenuOutlined />}  className={c.catalog_button} >
        Каталог товаров
      </Button>
      <Drawer
        title="Каталог товаров"
        placement={'left'}
        closable={true}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button 
              onClick={onGoToCatalog} 
              href='/catalog' 
              style={{backgroundColor: '#f83939', color: '#fff', border: 'none'}}>
                В каталог<DoubleRightOutlined />
            </Button>
          </Space>
        }
      >
        <CatalogMenu />
      </Drawer>
    </div>
  );
};

export default Catalog;
