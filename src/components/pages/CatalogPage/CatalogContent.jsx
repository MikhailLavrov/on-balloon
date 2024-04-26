import React, { useEffect, useState } from 'react';
import { Badge, Pagination } from 'antd';
import c from './CatalogPage.module.scss';
import { CatalogCard } from '../../CatalogCard/CatalogCard';
import { animationData } from '../../../data/catalogData/animationData';
import { attractionsData } from '../../../data/catalogData/attractionsData';
import { balloonsData } from '../../../data/catalogData/balloonsData';
import { photozoneData } from '../../../data/catalogData/photozoneData';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { catalogMenuData } from './../../../data/catalogData/catalogMenuData';
import { ColorPalette } from '../../ColorPalette/ColorPalette';

const allData = [...animationData, ...attractionsData, ...balloonsData, ...photozoneData];

export const CatalogContent = () => {
  const {topcategory, category} = useParams();
  const [selectedTopCategory, setSelectedTopCategory] = useState(topcategory);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();

  const filteredColor = searchParams.get('palette') || '';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category, currentPage]);

  useEffect(() => {
    setCurrentPage(1)
  }, [category, topcategory, filteredColor]);

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
        className={`${c.subcategory__link} ${subcategory.key === category ? c.subcategory__linkActive : ''}`}
      >
        {subcategory.label}
      </Link>
    ));
  };

  const filterCurrentCategoryData = (data) => {
    return data
      .filter(item => item.category.includes(category))
      .filter(item => !filteredColor || (item.palette && item.palette.includes(filteredColor)))
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

  const filterAllCategoriesData = (data) => {
    return data
      .filter(item => !filteredColor || (item.palette && item.palette.includes(filteredColor)))
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
      catalogItems = !category ? filterAllCategoriesData(balloonsData) : filterCurrentCategoryData(balloonsData);
      break;
    case 'photozone':
      catalogItems = !category ? filterAllCategoriesData(photozoneData) : filterCurrentCategoryData(photozoneData);
      break;
    case 'animation':
      catalogItems = !category ? filterAllCategoriesData(animationData) : filterCurrentCategoryData(animationData);
      break;
    case 'attractions':
      catalogItems = !category ? filterAllCategoriesData(attractionsData) : filterCurrentCategoryData(attractionsData);
      break;
    default:
      catalogItems = null;
      break;
  }

  const totalDataCount = catalogItems.length;
  const itemsPerPage = 20;

  const onChange = (page) => {
    setCurrentPage(page);
  };

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const paginationSlicedItems = catalogItems.slice(firstItemIndex, lastItemIndex)

  const PaginationComponent = ({className}) => {
    return (
      <Pagination
        className={`catalog__pagination ${className}`}
        current={currentPage}
        defaultCurrent={1}
        defaultPageSize={itemsPerPage}
        total={totalDataCount}
        onChange={onChange}
        hideOnSinglePage
        showSizeChanger={false}
        responsive={true}
        showTitle={false}
        simple={true}
      />
    )
  }

  return (
    <div className={c.content__container}>
      {selectedTopCategory && (
        <>
          <div className={c.subcategories__container}>
            {catalogMenuData.map((menuTopCategory) =>
              menuTopCategory.key === selectedTopCategory && menuTopCategory.children ? (
                <div key={menuTopCategory.key} className={c.subcategories}>
                  <Link
                    key={'all'}
                    to={`/catalog/${selectedTopCategory}`}
                    className={`${c.subcategory__link} ${!category ? c.subcategory__linkActive : ''}`}
                  >
                    Все
                  </Link>
                  {renderSubcategories(menuTopCategory.children)}
                </div>
              ) : null
              )}
          </div>
          {topcategory === 'balloons' && (
            <div className={c.mobileColorPalette}>
              <ColorPalette />
            </div>
          )}
        </>
      )}
      <div className={c.pagination__wrapper}>
        {totalDataCount > itemsPerPage && <span>Страница:</span>}
        <PaginationComponent className={`${c.pagination} ${c.pagination__top}`} />
      </div>
      <div className={c.catalog__content}>
        {paginationSlicedItems}
      </div>
      <PaginationComponent className={`${c.pagination} ${c.pagination__bottom}`} />
    </div>
  );
};

