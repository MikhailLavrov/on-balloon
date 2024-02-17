import c from './FavouritesPage.module.scss';
import { CatalogCard } from '../../CatalogCard/CatalogCard';
import { useSelector } from 'react-redux';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Breadcrumbs = () => (
  <Breadcrumb
    items={[
      {
        href: '/',
        title: <HomeOutlined />,
      },
      {
        title: 'Избранное',
      },
    ]}
    style={{fontFamily: 'Tilda Sans, Arial, sans-serif'}}
  />
);

export const FavouritesPage = () => {
  const favouritesState = useSelector(state => state.favourites.items)

  const favouritesList = favouritesState.map(item => {
    return (
      <CatalogCard key={item.article} {...item} style={{fontFamily: 'Tilda Sans, Arial, sans-serif'}}  />
    )
  })

  return (
    <section className={c.favourites}>
      <div className={`${c.favourites__container} ${c.container}`}>
        <Breadcrumbs />
        <h1 className={c.favourites__title}>Избранное</h1>
        {favouritesState && favouritesState.length !== 0 && (
          <div className={c.favourites__favouritesListContainer}>
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
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
