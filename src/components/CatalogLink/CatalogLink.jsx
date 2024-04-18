import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CloseOutlined } from '@ant-design/icons';
import c from './CatalogLink.module.scss';

export const CatalogLink = () => {
  const location = useLocation();

  // Проверка, находится ли текущий путь в каталоге
  const isInCatalog = location.pathname.includes('/catalog');

  const outerIconPath = 'https://cdn-icons-png.flaticon.com/512/190/190309.png';

  // Текст иконки и надписи на ссылке
  const icon = isInCatalog ? 
    <CloseOutlined aria-label="Закрыть каталог" /> 
    : <img className={c.catalog__linkIcon} src={outerIconPath} width={20} height={20} alt='Icon'/>;
  const linkText = isInCatalog ? 'Закрыть каталог' : 'Каталог товаров';
  const linkLabel = isInCatalog ? 'Закрыть каталог' : 'Каталог товаров';

  return (
    <div className={c.catalog}>
      <Link
        to={isInCatalog ? '/' : '/catalog/trend'}
        className={`${c.catalog__link} ${isInCatalog ? c.inCatalog : c.outCatalog}`}
        aria-label={linkLabel}
      >
        {icon}
        {linkText}
      </Link>
    </div>
  );
};

export default CatalogLink;
