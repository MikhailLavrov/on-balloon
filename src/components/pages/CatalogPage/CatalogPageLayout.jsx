import React from 'react';
import { Button, Affix } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import c from './CatalogPage.module.scss';
import { CatalogMenu } from '../../CatalogMenu/CatalogMenu';
import { BreadcrumbsComponent } from '../../BreadcrumbsComponent/BreadcrumbsComponent';
import { FloatButtonComponent } from '../../FloatButtonComponent/FloatButtonComponent';
import { CatalogContent } from "./CatalogContent";
import { setDrawerState } from '../../../redux/catalogDrawerSlice';
import { topLevelTranslations, sublevelTranslations } from '../../../data/catalogData/catalogMenuTranslations';

export const CatalogPageLayout = () => {
  const {topcategory, category} = useParams();
  const dispatch = useDispatch()
  const drawerVisibleState = useSelector(state => state.catalogDrawer.mainDrawerIsOpened)
  
  const translatedCategory = topLevelTranslations[topcategory];
  const translatedSubcategory = sublevelTranslations[category];

  const onMenuClickHandler = () => {
    !drawerVisibleState && dispatch(setDrawerState({mainDrawerIsOpened: true}))
  }
  
  return (
    <section className={c.catalog}>
      <Affix>
        <div className={c.catalog__mobileHeader}>
            <Button className={c.catalog__mobileHeaderBackButton} onClick={onMenuClickHandler}>{'<'} Меню</Button>
            <div className={c.catalog__mobileHeaderCategoryWrapper}>
              <span className={c.catalog__mobileHeaderCategory}>{translatedCategory}</span>
              <span className={c.catalog__mobileHeaderSubcategory}>{translatedSubcategory}</span>
            </div>
        </div>
      </Affix>
      <div className='container'>
        <BreadcrumbsComponent pageName={"Каталог"} />
        <div className={c.catalog__innerContainer}>
          <div className={c.catalog__catalogMenu}>
            <CatalogMenu/>
          </div>
          <CatalogContent />
        </div>
        <FloatButtonComponent />
      </div>
    </section>
  );
};
