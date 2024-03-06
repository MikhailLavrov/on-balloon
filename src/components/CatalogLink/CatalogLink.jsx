import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AlignLeftOutlined, CloseOutlined } from '@ant-design/icons';
import c from './CatalogLink.module.scss';

// Линк для хедера
export const CatalogLink = () => {
  const location = useLocation();

  return (
    <div className={c.catalog}>
      <Link 
        to={location.pathname==='/catalog' ? '/' : '/catalog'}
        className={c.catalog__link}
        style={location.pathname==='/catalog' ? {backgroundColor: '#fff', color: '#000', boxShadow: '0 0 0 1px #d9d9d9 inset'} : {}}
      >
        {location.pathname==='/catalog' ? <CloseOutlined /> : <AlignLeftOutlined />} 
        {location.pathname==='/catalog' ? 'Закрыть каталог' : 'Каталог товаров'}
      </Link>
    </div>
  );
};
