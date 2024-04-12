import React, { useEffect, useState } from 'react';
import { Badge } from 'antd';
import c from './CatalogPage.module.scss';
import { CatalogCard } from '../../CatalogCard/CatalogCard';
import { catalogMenuData } from '../../../data/catalogMenuData';
import { animationData } from '../../../data/catalogData/animationData';
import { attractionsData } from '../../../data/catalogData/attractionsData';
import { balloonsData } from '../../../data/catalogData/balloonsData';
import { photozoneData } from '../../../data/catalogData/photozoneData';
import { Link, useParams } from 'react-router-dom';

const allData = [...animationData, ...attractionsData, ...balloonsData, ...photozoneData];

export const CatalogContent = () => {
  const {topcategory, category} = useParams();
  const [selectedTopCategory, setSelectedTopCategory] = useState(topcategory);

  // const coloredData = allData.filter(item => item.palette)
  // console.log(coloredData)

  // При смене категории, скролл наверх
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

   // Установим первый подраздел первой категории по умолчанию
  useEffect(() => {
    if (topcategory && topcategory !== '') {
      setSelectedTopCategory(topcategory);
    } else {
      setSelectedTopCategory(catalogMenuData[0].key || '');
    }
  }, [topcategory]);
  
  const renderSubcategories = (subcategoryData) => {
    return subcategoryData.map((subcategory) => (
      <Link
        key={subcategory.key}
        to={`/catalog/${selectedTopCategory}/${subcategory.key}`}
        className={c.subcategory__link}
        style={{ backgroundColor: subcategory.key === category ? '#9e7ffd' : '#eeeeee',
        color: subcategory.key === category ? '#fff' : '#000', transition: 'all 200ms ease' }}
      >
        {subcategory.label}
      </Link>
    ));
  };

  const filterCatalogData = (data) => {
    return data
      .filter(item => item.category.includes(category))
      .map((item) => (
        item.oldPrice ? (
          <Badge.Ribbon className={c.styledBadge} text="Акция" color="red" key={item.article}>
            <CatalogCard {...item} />
          </Badge.Ribbon>
        ) : item.hit ? (
          <Badge.Ribbon className={c.styledBadge} text="Хит" color="green" key={item.article}>
            <CatalogCard {...item} />
          </Badge.Ribbon>
        ) : (
          <CatalogCard key={item.article} {...item} />
        )
      )
    );
  };

  let catalogItems;
  switch (selectedTopCategory) {
    case 'trend':
      catalogItems = [
        allData.filter(item => item.hit).map((item) => (
          item.oldPrice ? (
            <Badge.Ribbon className={c.styledBadge} text="Акция" color="red" key={item.article}>
              <CatalogCard {...item} />
            </Badge.Ribbon>
          ) : item.hit ? (
            <Badge.Ribbon className={c.styledBadge} text="Хит" color="green" key={item.article}>
              <CatalogCard {...item} />
            </Badge.Ribbon>
          ) : (
            <CatalogCard key={item.article} {...item} />
          )
        ))
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
    <div className={c.content__container}>
      {selectedTopCategory && (
        <div className={c.subcategories__container}>
          {catalogMenuData.map((category) =>
            category.key === selectedTopCategory && category.children ? (
              <div key={category.key} className={c.subcategories}>
                {renderSubcategories(category.children)}
              </div>
            ) : null
          )}
        </div>
      )}
  
      <div className={c.catalog__content}>
        {catalogItems}
      </div>
    </div>
  );
};

