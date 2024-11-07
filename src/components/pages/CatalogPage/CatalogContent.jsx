import React, { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import c from './CatalogPage.module.scss';
import { Badge, Modal, Pagination, Segmented } from 'antd';
import { animationData } from '../../../data/catalogData/animationData';
import { commercialData } from '../../../data/catalogData/commercialData';
import { balloonsData } from '../../../data/catalogData/balloonsData';
import { photozoneData } from '../../../data/catalogData/photozoneData';
import { catalogMenuData } from './../../../data/catalogData/catalogMenuData';
import { BadgedProductCard } from '../../ProductCard/BadgedProductCard';
import { Button } from 'antd';
import { SlidersOutlined } from '@ant-design/icons';
import { ColorPalette } from '../../ColorPalette/ColorPalette';
import { CollectionPalette } from './../../CollectionPalette/CollectionPalette';

const allData = [...animationData, ...commercialData, ...balloonsData, ...photozoneData];

export const CatalogContent = () => {
  const {topcategory, category} = useParams();
  const [selectedTopCategory, setSelectedTopCategory] = useState(topcategory);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [searchParams] = useSearchParams();

  const filteredColor = searchParams.get('palette') || '';
  const filteredCollection = searchParams.get('collection') || '';
  const filterOptions = ['Цвет', 'Коллекция'];
  const [currentFilter, setCurrentFilter] = useState(filterOptions.length !== 0 ? filterOptions[0] : null);

  const showModal = () => {
    setIsFilterModalOpen(true);
  };
  const handleOk = () => {
    setTimeout(() => {
      setIsFilterModalOpen(false);
    }, 500);
  };
  const handleCancel = () => {
    setIsFilterModalOpen(false);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }, [category, currentPage, filteredColor, filteredCollection]);

  useEffect(() => {
    setCurrentPage(1)
  }, [category, topcategory, filteredColor, filteredCollection]);

  // Установим первый подраздел первой категории по умолчанию
  useEffect(() => {
    if (topcategory && topcategory !== '') {
      setSelectedTopCategory(topcategory);
    } else {
      setSelectedTopCategory(catalogMenuData[0].key || '');
    }
  }, [topcategory]);
  
  useEffect(() => {
    setCurrentFilter(filterOptions.length !== 0 ? filterOptions[0] : null)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topcategory, category]);
  
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
      .filter(item => !filteredCollection || (item.collection && item.collection.includes(filteredCollection)))
      .map((item, index) => <BadgedProductCard item={{...item}} key={index} />);
  };

  const filterAllCategoriesData = (data) => {
    return data
      .filter(item => !filteredColor || (item.palette && item.palette.includes(filteredColor)))
      .filter(item => !filteredCollection || (item.collection && item.collection.includes(filteredCollection)))
      .map((item, index) => <BadgedProductCard item={{...item}} key={index} />);
  };

  let catalogItems;
  switch (selectedTopCategory) {
    case 'trend':
      catalogItems = [
        allData.filter(item => item.hit).map((item, index) => <BadgedProductCard item={{...item}} key={index} />)
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
    case 'commercial':
      catalogItems = !category ? filterAllCategoriesData(commercialData) : filterCurrentCategoryData(commercialData);
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
            <div className={c.totalLine}>
              <p className={c.totalDataCountMobile}>Всего товаров: {totalDataCount}</p>
              {totalDataCount > 0 &&
              <>
                <Badge count={(filteredColor || filteredCollection) ? 1 : 0} >
                  <Button
                    onClick={showModal}
                    icon={<SlidersOutlined />}
                    className={c.filterButton}
                  >
                    Фильтр
                  </Button>
                </Badge>
                <Modal
                  title="Фильтр"
                  centered
                  footer={null}
                  open={isFilterModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  style={{overflow: 'auto'}}
                  className={c.filterModal}
                >
                  <Segmented
                    options={filterOptions}
                    value={currentFilter}
                    defaultValue={currentFilter}
                    block 
                    onChange={(value) => setCurrentFilter(value)}
                    className={c.filterSegmented}
                  />
                  <div className={c.filterModal__container}>
                    {currentFilter === 'Цвет' ? <ColorPalette outerHandler={handleOk} /> : <CollectionPalette outerHandler={handleOk} />}
                  </div>
                </Modal>
              </>
              }
            </div>
          )}
        </>
      )}
      <div className={c.infoLine}>
        <div className={c.pagination__wrapper}>
          {totalDataCount > itemsPerPage && <span>Страница:</span>}
          <PaginationComponent className={`${c.pagination} ${c.pagination__top}`} />
        </div>
        {topcategory === 'balloons' && (
        <p className={c.totalDataCount}>Всего товаров: {totalDataCount}</p>
        )}
      </div>
      <div className={c.catalog__content}>
        {paginationSlicedItems}
      </div>
      <PaginationComponent className={`${c.pagination} ${c.pagination__bottom}`} />
    </div>
  );
};
