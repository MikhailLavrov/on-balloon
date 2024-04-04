import React, { useEffect, useState } from 'react';
import { Badge, Affix } from 'antd';
import c from './CatalogPage.module.scss';
import { CatalogCard } from '../../CatalogCard/CatalogCard';
import { catalogMenuData } from '../../../data/catalogMenuData';
import { animationData } from '../../../data/catalogData/animationData';
import { attractionsData } from '../../../data/catalogData/attractionsData';
import { balloonsData } from '../../../data/catalogData/balloonsData';
import { photozoneData } from '../../../data/catalogData/photozoneData';
import { CatalogMenu } from '../../CatalogMenu/CatalogMenu';
import { useDispatch, useSelector } from 'react-redux';
import { BreadcrumbsComponent } from '../../BreadcrumbsComponent/BreadcrumbsComponent';
import { FloatButtonComponent } from '../../FloatButtonComponent/FloatButtonComponent';
import { LeftOutlined } from '@ant-design/icons';
import { InnerMobileCatalogDrawer } from '../../MobileCatalogDrawer/InnerMobileCatalogDrawer';
import { setDrawerState } from '../../../redux/catalogDrawerSlice';
import { topLevelTranslations, sublevelTranslations } from '../../../data/catalogData/catalogMenuTranslations';

const allData = [...animationData, ...attractionsData, ...balloonsData, ...photozoneData];

export const CatalogPage = () => {
  const currentTopCategoryState = useSelector(state => state.catalogNav.currentTopCategory);
  const currentCategoryState = useSelector(state => state.catalogNav.currentCategory);
  
  const [selectedTopCategory, setSelectedTopCategory] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedCategory]);
  
  useEffect(() => {
    if (currentTopCategoryState && currentTopCategoryState !== '') {
      setSelectedTopCategory(currentTopCategoryState);
      
      // Найдем подраздел в меню, соответствующий текущей топовой категории
      const topLevelCategory = catalogMenuData.find(item => item.key === currentTopCategoryState);
      if (currentCategoryState && currentCategoryState !== '') {
        setSelectedCategory(currentCategoryState);
      } else {
        // Установим первый подраздел в качестве выбранной категории
        topLevelCategory && setSelectedCategory(topLevelCategory.children?.[0]?.key || '');
      }
    } else {
      setSelectedTopCategory(catalogMenuData[0].key || '');
      setSelectedCategory(catalogMenuData[0].key || ''); // Установим первый подраздел первой категории по умолчанию
    }
  }, [currentTopCategoryState, currentCategoryState]);
  
  const onClick = (e) => {
    setSelectedTopCategory(e.keyPath[e.keyPath.length - 1]);
    setSelectedCategory(e.key);
  };

  const filterCatalogData = (data) => {
    return data
      .filter(item => item.category.includes(selectedCategory))
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
      ));
  };

  let catalogItems;
  switch (selectedTopCategory) {
    case 'hit':
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

  // Логика открытия drawer с подкатегориями при действии НАЗАД
  const mainDrawerVisibleState = useSelector(state => state.catalogDrawer.mainDrawerIsOpened)
  const childrenDrawerVisibleState = useSelector(state => state.catalogDrawer.childrenDrawerIsOpened)

  const openChildrenDrawer = () => {
    !childrenDrawerVisibleState && dispatch(setDrawerState({childrenDrawerIsOpened: true}))
  };

  const openDrawer = () => {
    !mainDrawerVisibleState && dispatch(setDrawerState({mainDrawerIsOpened: true}))
  };

  return (
    <section className={c.catalog}>
      <Affix>
        <div className={c.catalog__mobileHeader}>
          <div className={c.catalog__backToCategoryLink}>
            {currentTopCategoryState ?
            <button onClick={openChildrenDrawer}>
              <LeftOutlined className={c.catalog__titleIcon} />
            </button>
            : <button onClick={openDrawer}>
              <LeftOutlined className={c.catalog__titleIcon} />
            </button>
            }
          </div>
          <h2 className={c.catalog__title}>
            {currentTopCategoryState && currentCategoryState ? 
              `${topLevelTranslations[currentTopCategoryState]}: ${sublevelTranslations[currentCategoryState]}`
            : `Хиты`
            }
          </h2>
        </div>
      </Affix>
      <div className={`${c.catalog__container} container`}>
        <BreadcrumbsComponent pageName={'Каталог'} />

        <InnerMobileCatalogDrawer />

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
        <FloatButtonComponent />
      </div>
    </section>
  );
};

