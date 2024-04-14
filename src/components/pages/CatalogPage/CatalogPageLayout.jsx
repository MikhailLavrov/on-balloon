import React, { useEffect, useState } from 'react';
import c from './CatalogPage.module.scss';
import { CatalogMenu } from '../../CatalogMenu/CatalogMenu';
import { BreadcrumbsComponent } from '../../BreadcrumbsComponent/BreadcrumbsComponent';
import { FloatButtonComponent } from '../../FloatButtonComponent/FloatButtonComponent';
import { CatalogContent } from "./CatalogContent";
import { Button, Affix, Badge } from 'antd';
import { useParams, useSearchParams } from 'react-router-dom';
import { setDrawerState } from '../../../redux/catalogDrawerSlice';
import { useDispatch, useSelector } from 'react-redux';
import { SettingOutlined } from '@ant-design/icons';
import { ColorPalette } from './../../ColorPalette/ColorPalette';
import { topLevelTranslations, sublevelTranslations } from '../../../data/catalogData/catalogMenuTranslations';

export const CatalogPageLayout = () => {
  const {topcategory, category} = useParams();
  const dispatch = useDispatch()
  const drawerVisibleState = useSelector(state => state.catalogDrawer.mainDrawerIsOpened)
  const [isFilterOpened, setIsFilterOpened] = useState(false);
  const [searchParams] = useSearchParams();

  // Проверяем наличие параметров в строке запроса и устанавливаем значение isFilterOpened
  useEffect(() => {
    setIsFilterOpened(searchParams.toString() !== ''); // Устанавливаем true, если есть параметры, иначе false
  }, [searchParams]);
  
  // При смене категории, скролл наверх
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isFilterOpened]);

  const filteredColor = searchParams.get('palette') || '';
  
  const translatedCategory = topLevelTranslations[topcategory];
  const translatedSubcategory = sublevelTranslations[category];

  const onMenuClickHandler = () => {
    !drawerVisibleState && dispatch(setDrawerState({mainDrawerIsOpened: true}))
  }

  const toggleFilterHandler = () => {
    !isFilterOpened ? setIsFilterOpened(true) : setIsFilterOpened(false);
  }

  const FilterToggleButton = () => {
    return (
      <Button className={c.catalog__mobileHeaderFilterButton} onClick={toggleFilterHandler}>
        <SettingOutlined />
      </Button>
    )
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
            {filteredColor !== '' ? 
            <Badge dot color={filteredColor}>
              <FilterToggleButton />
            </Badge>
            : <FilterToggleButton />
            }
        </div>
      </Affix>
      {isFilterOpened &&
      <div className={c.catalog__mobileHeaderPalette}>
        <ColorPalette />
      </div>
      }
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
