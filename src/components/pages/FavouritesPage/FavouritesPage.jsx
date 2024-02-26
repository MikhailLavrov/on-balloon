import c from './FavouritesPage.module.scss';
import { CatalogCard } from '../../CatalogCard/CatalogCard';
import { useSelector } from 'react-redux';
import { Badge } from 'antd';
import { Link } from 'react-router-dom';
import {BreadcrumbsComponent} from '../../BreadcrumbsComponent/BreadcrumbsComponent'; 
import { MobileNavigationDrawer } from '../../MobileNavigation/MobileNavigation';
import { useState } from 'react';

export const FavouritesPage = () => {
  const favouritesState = useSelector(state => state.favourites.items)

  const [drawerVisible, setDrawerVisible] = useState(false);
  const [childrenDrawerVisible, setChildrenDrawerVisible] = useState(false);
  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
    childrenDrawerVisible && setChildrenDrawerVisible(false);
  };
  const showChildrenDrawer = () => {
    setChildrenDrawerVisible(true);
  };
  const onChildrenDrawerClose = () => {
    setChildrenDrawerVisible(false);
  };

  const favouritesList = favouritesState.map(item => (
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

  return (
    <section className={c.favourites}>
      <div className={`${c.favourites__container} ${c.container}`}>
        <BreadcrumbsComponent pageName={'Избранное'} />
        <h1 className={c.favourites__title}>Избранное</h1>
        {favouritesState && favouritesState.length !== 0 && (
          <div className={c.favourites__listContainer}>
            {favouritesList}
          </div>
        )}
        {(!favouritesState || favouritesState.length === 0) && (
          <div className={c.favourites__emptyContainer}>
            <div className={c.favourites__emptyImageWrapper}>
              <img width={200} src="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg" alt="Пустая страница" />
            </div>
            <div className={c.favourites__emptyContent}>
              <p className={c.favourites__emptyTitle}>Добавьте товары в избранное</p>
              <Link className={c.favourites__emptyLink} to={'/catalog'}>Перейти в каталог</Link>
              <button className={c.favourites__emptyLinkMobile} onClick={toggleDrawer}>Перейти в каталог</button>
            </div>
          </div>
        )}
      </div>
      <MobileNavigationDrawer toggleDrawer={toggleDrawer} drawerVisible={drawerVisible} childrenDrawerVisible={childrenDrawerVisible} showChildrenDrawer={showChildrenDrawer} onChildrenDrawerClose={onChildrenDrawerClose} />
    </section>
  )
}
