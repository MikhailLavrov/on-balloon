import c from './ShoppingCartPage.module.scss';
import { CatalogCard } from '../../CatalogCard/CatalogCard';
import { useSelector } from 'react-redux';
import { Breadcrumb, Button, Divider } from 'antd';
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

  let totalPrice = (array) => {
    let price = 0;
    const itemCount = array.length; // Получаем количество товаров в корзине
  
    for (let i = 0; i < itemCount; i++) {
      const itemPrice = array[i].price;
      price += itemPrice;
    }
  
    return { price, itemCount };
  }
  
  const { price, itemCount } = totalPrice(shoppingCartState);
  
  let totalDescription = '';
  if (itemCount === 1) {
    totalDescription = `${itemCount} товар на сумму ${price.toLocaleString('ru-RU')} руб.`;
  } else if (itemCount > 1 && itemCount < 5) {
    totalDescription = `${itemCount} товара на сумму ${price.toLocaleString('ru-RU')} руб.`;
  } else {
    totalDescription = `${itemCount} товаров на сумму ${price.toLocaleString('ru-RU')} руб.`;
  }

  return (
    <section className={c.shoppingCart}>
      <div className={`${c.shoppingCart__container} ${c.container}`}>
        <Breadcrumbs />
        <h1 className={c.shoppingCart__title}>Корзина</h1>
        {shoppingCartState && shoppingCartState.length !== 0 && (
          <>
            <div className={c.shoppingCart__listContainer}>
              {shoppingCartList}
            </div>
            <Divider orientation="right">Всего в корзине:</Divider>
            <div className={c.shoppingCart__footer}>
              <div className={c.shoppingCart__totalDescription}>
                {totalDescription}
              </div>
              <Button size='large' className={c.shoppingCart__checkoutLink}>Оформить заказ</Button>
            </div>
          </>
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
