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
        to={location.pathname.indexOf('/catalog') !== -1 ? '/' : '/catalog/trend'}
        className={c.catalog__link}
        style={location.pathname.indexOf('/catalog') !== -1 ? { backgroundColor: '#fff', color: '#000', boxShadow: '0 0 0 1px #d9d9d9 inset' } : {}}
        aria-label={location.pathname.indexOf('/catalog') !== -1 ? 'Закрыть каталог' : 'Каталог товаров'}
      >
        {location.pathname.indexOf('/catalog') !== -1 ? <CloseOutlined aria-label="Закрыть каталог" /> : <AlignLeftOutlined aria-label="Открыть каталог" />}
        {location.pathname.indexOf('/catalog') !== -1 ? 'Закрыть каталог' : 'Каталог товаров'}
      </Link>
    </div>
  );
};
