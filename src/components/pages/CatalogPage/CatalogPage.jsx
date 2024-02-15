import { Breadcrumb } from 'antd';
import c from './CatalogPage.module.scss';
import { HomeOutlined } from '@ant-design/icons';
import CatalogMenu from '../../CatalogMenu/CatalogMenu';
// import CatalogCard from '../../CatalogCard/CatalogCard';
// import { catalogData } from '../../../data/catalogData';

const Breadcrumbs = () => (
  <Breadcrumb
    items={[
      {
        href: '/',
        title: <HomeOutlined />,
      },
      {
        title: 'Каталог',
      },
    ]}
  />
);

// const catalogCards = catalogData.map((card, index) => (
//   <CatalogCard key={index} title={card.title} image={card.image} price={card.price} article={card.article} style={{aspectRatio: 1/1}} />
// ))
// title, image, price, article, style
export const CatalogPage = () => {

  return (
    <section className={c.catalog}>
      <div className={`${c.catalog__container} ${c.container}`}>
        <Breadcrumbs />
        <div className={c.catalog__info}>
          <h2 className={c.catalog__title}>Каталог</h2>
        </div>
        <div className={c.catalog__innerContainer}>
          <CatalogMenu/>
          <div className={c.catalog__content}>
           {/* {catalogCards} */}
            {/* <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard /> */}
          </div>
        </div>
      </div>
    </section>
  )
}
