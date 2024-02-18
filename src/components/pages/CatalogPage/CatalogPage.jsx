import React, { useState } from 'react';
import { Badge, Breadcrumb } from 'antd';
import c from './CatalogPage.module.scss';
import { HomeOutlined } from '@ant-design/icons';
import { CatalogCard } from '../../CatalogCard/CatalogCard';
import { animationData } from '../../../data/catalogData/animationData';
import { attractionsData } from '../../../data/catalogData/attractionsData';
import { balloonsData } from '../../../data/catalogData/balloonsData';
import { photozoneData } from '../../../data/catalogData/photozoneData';
import { CatalogMenu } from './CatalogMenu/CatalogMenu';

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
  const [selectedTopCategory, setSelectedTopCategory] = useState('hot');
  const [selectedCategory, setSelectedCategory] = useState('hot');
  
  const onClick = (e) => {
    setSelectedTopCategory(e.keyPath[e.keyPath.length - 1]);
    setSelectedCategory(e.key);
  };

  const filterCatalogData = (data) => {
    return data
      .filter(item => item.category.includes(selectedCategory))
      .map((item) => (
        item.oldPrice ? (
          <Badge.Ribbon text="Акция" color="red" key={item.article}>
            <CatalogCard 
              {...item} 
              style={{fontFamily: 'Tilda Sans, Arial, sans-serif'}} 
            />
          </Badge.Ribbon>
        ) : item.hit ? (
          <Badge.Ribbon text="Хит" color="green" key={item.article}>
            <CatalogCard 
              {...item} 
              style={{fontFamily: 'Tilda Sans, Arial, sans-serif'}} 
            />
          </Badge.Ribbon>
        ) : (
          <CatalogCard 
            key={item.article} 
            {...item} 
            style={{fontFamily: 'Tilda Sans, Arial, sans-serif'}} 
          />
        )
      ));
  };

  let catalogItems;
  switch (selectedTopCategory) {
    case 'hot':
      catalogItems = [
        ...filterCatalogData(balloonsData),
        ...filterCatalogData(photozoneData),
        ...filterCatalogData(animationData),
        ...filterCatalogData(attractionsData)
      ];
      break;
    case 'balloons':
      catalogItems = filterCatalogData(balloonsData);
      break;
    case 'photozone':
      catalogItems = filterCatalogData(photozoneData);
      break;
    case 'animation':
      catalogItems = filterCatalogData(animationData);
      break;
    case 'attractions':
      catalogItems = filterCatalogData(attractionsData);
      break;
    default:
      catalogItems = null;
      break;
  }

  return (
    <section className={c.catalog}>
      <div className={`${c.catalog__container} container`}>
        <Breadcrumbs />
        <h2 className={c.catalog__title}>Каталог</h2>
        <div className={c.catalog__innerContainer}>
          <CatalogMenu
            handleMenuClick={onClick}
            theme={{
              components: {
                Menu: {
                  itemSelectedColor: 'black',
                  itemSelectedBg: '#cdcdcd',
                  fontFamily: 'Tilda Sans, Arial, sans-serif',
                },
              },
            }}
          />
          <div className={c.catalog__content}>
            {catalogItems}
          </div>
        </div>
      </div>
    </section>
  );
};

