import c from './FavouritesPage.module.scss';
import { useSelector } from 'react-redux';
import { BreadcrumbsComponent } from '../../BreadcrumbsComponent/BreadcrumbsComponent'; 
import { MobileCatalogDrawer } from '../../MobileCatalogDrawer/MobileCatalogDrawer';
import { EmptyToCatalog } from '../components/EmptyToCatalog/EmptyToCatalog';
import { FloatButtonComponent } from '../../FloatButtonComponent/FloatButtonComponent';
import { BadgedProductCard } from '../../ProductCard/BadgedProductCard';

const FavouritesPage = () => {
  const favouritesState = useSelector(state => state.favourites.items)

  const favouritesList = favouritesState.map((item, index) => <BadgedProductCard item={{...item}} key={index} />);

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
      <FloatButtonComponent />
    </section>
  )
}

export default FavouritesPage;
