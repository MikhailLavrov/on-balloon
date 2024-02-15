import React, { useEffect, useRef, useState } from 'react';
import { Button, Drawer, Space } from 'antd';
import { DoubleRightOutlined, AlignLeftOutlined, CloseOutlined } from '@ant-design/icons';
import c from './CatalogLink.module.scss';
// import CatalogMenu from '../CatalogMenu/CatalogMenu';
import { useLocation } from 'react-router-dom';

const Catalog = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  // const btn =  useRef()
  // console.log(location.pathname)

  // useEffect(() => {
  //   if (location.pathname==='/catalog') {
  //     console.log('щас в каталоге')
  //     console.log(btn.current.href)

  //   }
  // }, [location])

  // const showDrawer = () => {
  //   setOpen(true);
  // };
  // const onClose = () => {
  //   setOpen(false);
  // };
  // const onGoToCatalog = () => {
  //   setOpen(false);
  // };

  return (
    <div className={c.catalog}>
      <Button 
        // ref={btn}
        type="button" 
        // onClick={showDrawer} 
        href={location.pathname==='/catalog' ? '/' : '/catalog'}
        icon={location.pathname==='/catalog' ? <CloseOutlined /> : <AlignLeftOutlined />} 
        className={c.catalog__button} 
        size='large'
      >
        Каталог товаров
      </Button>
      {/* <Drawer
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
      </Drawer> */}
    </div>
  );
};

export default Catalog;
