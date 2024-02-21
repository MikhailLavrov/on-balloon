import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from 'antd';
import { AlignLeftOutlined, CloseOutlined } from '@ant-design/icons';
import c from './CatalogLink.module.scss';

// Линк для хедера
export const CatalogLink = () => {
  const location = useLocation();

  return (
    <div className={c.catalog}>
      <Button 
        type="button" 
        href={location.pathname==='/catalog' ? '/' : '/catalog'}
        icon={location.pathname==='/catalog' ? <CloseOutlined /> : <AlignLeftOutlined />} 
        className={c.catalog__button}
        style={location.pathname==='/catalog' ? {backgroundColor: '#fff', color: '#000', boxShadow: '0 0 0 1px #000 inset'} : ''}
        size='large'
      >
        {location.pathname==='/catalog' ? 'Закрыть каталог' : 'Каталог товаров'}
      </Button>
    </div>
  );
};
