import c from './ShoppingCartPage.module.scss';
import { CatalogCard } from '../../CatalogCard/CatalogCard';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { BreadcrumbsComponent } from '../../BreadcrumbsComponent/BreadcrumbsComponent';
import { deleteFromShoppingCart } from '../../../redux/shoppingCartSlice';
import { useEffect, useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { MobileCatalogDrawer } from '../../MobileNavigation/MobileCatalogDrawer';

export const ShoppingCartPage = () => {
  const shoppingCartState = useSelector(state => state.shoppingCart.items)
  const [currentCartItems, setCurrentCartItems] = useState(shoppingCartState);
  const dispatch = useDispatch();

  useEffect(() => {
    setCurrentCartItems(shoppingCartState);
  }, [shoppingCartState])

  const deleteFromCartHandler = (item) => {
    let goods = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    const index = goods.findIndex(product => product.article === item.article);
    if (index !== -1) {
      goods = goods.filter((_, i) => i !== index);
      dispatch(deleteFromShoppingCart(item))
    }
    localStorage.setItem('shoppingCart', JSON.stringify(goods));
  }

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

  const shoppingCartList = currentCartItems.map((item) => (
    <div className={c.outerCatalogCardWraper} key={item.article}>
      <CatalogCard {...item} />
      <button className={c.catalogCard__delButton} onClick={() => deleteFromCartHandler(item)}><CloseOutlined /></button>
    </div>
  ));

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
        <BreadcrumbsComponent pageName={'Корзина'} />
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
              <button className={c.shoppingCart__emptyLinkMobile} onClick={toggleDrawer}>Перейти в каталог</button>
            </div>
          </div>
          )}
      </div>
      <MobileCatalogDrawer toggleDrawer={toggleDrawer} drawerVisible={drawerVisible} childrenDrawerVisible={childrenDrawerVisible} showChildrenDrawer={showChildrenDrawer} onChildrenDrawerClose={onChildrenDrawerClose} />
    </section>
  )
}
