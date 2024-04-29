import c from './FavouritesPage.module.scss';
import { ProductCard } from '../../ProductCard/ProductCard';
import { useSelector } from 'react-redux';
import { Badge } from 'antd';
import { BreadcrumbsComponent } from '../../BreadcrumbsComponent/BreadcrumbsComponent'; 
import { MobileCatalogDrawer } from '../../MobileCatalogDrawer/MobileCatalogDrawer';
import { EmptyToCatalog } from '../components/EmptyToCatalog/EmptyToCatalog';

export const FavouritesPage = () => {
  const favouritesState = useSelector(state => state.favourites.items)

  const favouritesList = favouritesState.map(item => (
    item.oldPrice ? (
      <Badge.Ribbon className={c.styledBadge} text="Акция" color="red" key={item.article}>
        <ProductCard {...item} />
      </Badge.Ribbon>
    ) : item.hit ? (
      <Badge.Ribbon className={c.styledBadge} text="Хит" color="green" key={item.article}>
        <ProductCard {...item} />
      </Badge.Ribbon>
    ) : (
      <ProductCard key={item.article} {...item} />
    )
  ));

  return (
    <section className={c.favourites}>
      <div className={`${c.favourites__container} container`}>
        <BreadcrumbsComponent pageName={'Избранное'} />
        <h1 className={c.favourites__title}>Избранное</h1>
        {favouritesState && favouritesState.length !== 0 && (
          <div className={c.favourites__listContainer}>
            {favouritesList}
          </div>
        )}
        {(!favouritesState || favouritesState.length === 0) && (
          <EmptyToCatalog />
        )}
      </div>
      <MobileCatalogDrawer />
    </section>
  )
}
