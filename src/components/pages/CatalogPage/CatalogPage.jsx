import React, { useState } from 'react';
import { Breadcrumb } from 'antd';
import c from './CatalogPage.module.scss';
import { HomeOutlined } from '@ant-design/icons';
import { CatalogCard } from '../../CatalogCard/CatalogCard';
import { animationData } from '../../../data/catalogData/animationData';
import { attractionsData } from '../../../data/catalogData/attractionsData';
import { balloonsData } from '../../../data/catalogData/balloonsData';
import { photozoneData } from '../../../data/catalogData/photozoneData';
import { CatalogMenu } from '../../CatalogMenu/CatalogMenu';

const Breadcrumbs = () => (
  <Breadcrumb
    items={[
      {
        href: '/',
        title: <HomeOutlined />,
      },
      {
        title: 'Каталог',
      },
    ]}
    style={{fontFamily: 'Tilda Sans, Arial, sans-serif'}}
  />
);

export const CatalogPage = () => {
  const [selectedTopCategory, setSelectedTopCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const onClick = (e) => {
    setSelectedTopCategory(e.keyPath[e.keyPath.length - 1]);
    setSelectedCategory(e.key);
  };

  const filterCatalogData = (data, category) => {
    return data.filter(item => item.category.includes(category)).map((item, index) => (
      <CatalogCard 
        key={index} 
        {...item} 
        style={{fontFamily: 'Tilda Sans, Arial, sans-serif'}} 
      />
    ));
  };

  let catalogItems;
  switch (selectedTopCategory) {
    case 'balloons':
      catalogItems = filterCatalogData(balloonsData, selectedCategory);
      break;
    case 'photozone':
      catalogItems = filterCatalogData(photozoneData, selectedCategory);
      break;
    case 'animation':
      catalogItems = filterCatalogData(animationData, selectedCategory);
      break;
    case 'attractions':
      catalogItems = filterCatalogData(attractionsData, selectedCategory);
      break;
    default:
      catalogItems = null;
      break;
  }

  return (
    <section className={c.catalog}>
      <div className={`${c.catalog__container} ${c.container}`}>
        <Breadcrumbs />
        <div className={c.catalog__info}>
          <h2 className={c.catalog__title}>Каталог</h2>
        </div>
        <div className={c.catalog__innerContainer}>
          <CatalogMenu 
            handleMenuClick={onClick}
            style={{fontFamily: 'Tilda Sans, Arial, sans-serif'}}
          />
          <div className={c.catalog__content}>
            {catalogItems}
          </div>
        </div>
      </div>
    </section>
  );
};

