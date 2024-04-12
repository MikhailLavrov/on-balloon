import React from 'react';
import c from './CatalogPage.module.scss';
import { CatalogMenu } from '../../CatalogMenu/CatalogMenu';
import { BreadcrumbsComponent } from '../../BreadcrumbsComponent/BreadcrumbsComponent';
import { FloatButtonComponent } from '../../FloatButtonComponent/FloatButtonComponent';
import { CatalogContent } from "./CatalogContent";
import { Button } from 'antd';
import { useParams } from 'react-router-dom';
import { catalogMenuData } from '../../../data/catalogMenuData';
import { setDrawerState } from '../../../redux/catalogDrawerSlice';
import { useDispatch, useSelector } from 'react-redux';

export const CatalogPageLayout = () => {
  const {topcategory} = useParams();
  const dispatch = useDispatch()
  const drawerVisibleState = useSelector(state => state.catalogDrawer.mainDrawerIsOpened)
  
  const translatedCategory = catalogMenuData.find(item => item.key === topcategory).label;

  const onClickHandler = () => {
    !drawerVisibleState && dispatch(setDrawerState({mainDrawerIsOpened: true}))
  }
  
  return (
    <section className={c.catalog}>
      <div className={c.catalog__mobileHeader}>
        <Button className={c.catalog__mobileHeaderButton} onClick={onClickHandler}>{'<'} Меню</Button>
        <span>{translatedCategory}</span>
      </div>
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
