import React, { useEffect, useState } from 'react';
import { Badge, Breadcrumb } from 'antd';
import c from './CatalogPage.module.scss';
import { HomeOutlined } from '@ant-design/icons';
import { CatalogCard } from '../../CatalogCard/CatalogCard';
import { animationData } from '../../../data/catalogData/animationData';
import { attractionsData } from '../../../data/catalogData/attractionsData';
import { balloonsData } from '../../../data/catalogData/balloonsData';
import { photozoneData } from '../../../data/catalogData/photozoneData';
import { CatalogMenu } from './CatalogMenu/CatalogMenu';
import { useSelector } from 'react-redux';
import { catalogMenuData } from '../../../data/catalogMenuData';

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
  const currentTopCollectionState = useSelector(state => state.collectionsNav.currentCollection);
  
  const [selectedTopCategory, setSelectedTopCategory] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    if (currentTopCollectionState && currentTopCollectionState !== '') {
      setSelectedTopCategory(currentTopCollectionState);
      
      // Найдем подраздел в меню, соответствующий текущей топовой категории
      const topLevelCategory = catalogMenuData.find(item => item.key === currentTopCollectionState);
      if (topLevelCategory) {
        // Установим первый подраздел в качестве выбранной категории
        setSelectedCategory(topLevelCategory.children?.[0]?.key || '');
      }
    } else {
      setSelectedTopCategory(catalogMenuData[0].key || '');
      setSelectedCategory(catalogMenuData[0].key || ''); // Установим первый подраздел первой категории по умолчанию
    }
  }, [currentTopCollectionState, setSelectedTopCategory, setSelectedCategory]);
  

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
            <CatalogCard {...item} />
          </Badge.Ribbon>
        ) : item.hit ? (
          <Badge.Ribbon text="Хит" color="green" key={item.article}>
            <CatalogCard {...item} />
          </Badge.Ribbon>
        ) : (
          <CatalogCard key={item.article} {...item} />
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

