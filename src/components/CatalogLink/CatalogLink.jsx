import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CloseOutlined, PicCenterOutlined } from '@ant-design/icons';
import c from './CatalogLink.module.scss';

export const CatalogLink = () => {
  const location = useLocation();

  // Проверка, находится ли текущий путь в каталоге
  const isInCatalog = location.pathname.includes('/catalog');

  // Текст иконки и надписи на ссылке
  const icon = isInCatalog ? 
    <CloseOutlined aria-label="Закрыть каталог" /> 
    : <PicCenterOutlined />
  const linkText = isInCatalog ? 'Закрыть каталог' : 'Каталог товаров';
  const linkLabel = isInCatalog ? 'Закрыть каталог' : 'Каталог товаров';

  return (
    <Link
      to={isInCatalog ? '/' : '/catalog/trend'}
      className={`${c.catalogLink} ${isInCatalog ? c.inCatalog : c.outCatalog}`}
      aria-label={linkLabel}
    >
      {icon}
      {linkText}
    </Link>
  );
};

export default CatalogLink;
