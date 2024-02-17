import c from './ShoppingCartPage.module.scss';
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
        title: 'Корзина',
      },
    ]}
    style={{fontFamily: 'Tilda Sans, Arial, sans-serif'}}
  />
);

export const ShoppingCartPage = () => {
  const shoppingCartState = useSelector(state => state.shoppingCart.items)

  const shoppingCartList = shoppingCartState.map(item => {
    return (
      <CatalogCard key={item.article} {...item} style={{fontFamily: 'Tilda Sans, Arial, sans-serif'}}  />
    )
  })

  return (
    <section className={c.shoppingCart}>
      <div className={`${c.shoppingCart__container} ${c.container}`}>
        <Breadcrumbs />
        <h1 className={c.shoppingCart__title}>Корзина</h1>
        {shoppingCartState && shoppingCartState.length !== 0 && (
          <div className={c.shoppingCart__listContainer}>
            {shoppingCartList}
          </div>
        )}
        {(!shoppingCartState || shoppingCartState.length === 0) && (
          <div className={c.shoppingCart__emptyContainer}>
            <div className={c.shoppingCart__emptyImageWrapper}>
              <img width={200} src="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg" alt="Пустая страница" />
            </div>
            <div className={c.shoppingCart__emptyContent}>
              <p className={c.shoppingCart__emptyTitle}>Добавьте товары в корзину</p>
              <Link className={c.shoppingCart__emptyLink} to={'/catalog'}>Перейти в каталог</Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
