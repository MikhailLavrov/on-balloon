import c from './ShoppingCartPage.module.scss';
import { CatalogRowCard } from '../../CatalogRowCard/CatalogRowCard';
import { useSelector } from 'react-redux';
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { BreadcrumbsComponent } from '../../BreadcrumbsComponent/BreadcrumbsComponent';
import { useEffect, useState } from 'react';
import { MobileCatalogDrawer } from '../../MobileNavigation/MobileCatalogDrawer';

export const ShoppingCartPage = () => {
  const shoppingCartState = useSelector(state => state.shoppingCart.items)
  const [currentCartItems, setCurrentCartItems] = useState(shoppingCartState);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [childrenDrawerVisible, setChildrenDrawerVisible] = useState(false);
  const navigate = useNavigate();

  // Инициализируем состав корзины из state
  useEffect(() => {
    setCurrentCartItems(shoppingCartState);
  }, [shoppingCartState])

  const shoppingCartList = currentCartItems.map((item) => (
    <CatalogRowCard {...item} key={item.article} />
  ));

  // Открытие Drawer каталога (мобилка) при пустой корзине
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

  // Получаем общую стоимость корзины С УЧЕТОМ ЦЕНЫ БЕЗ СКИДКИ
  let getTotalPrice = (array) => {
    let totalPrice = 0;
    const itemCount = array.length;
    
    for (let i = 0; i < itemCount; i++) {
      if (array[i].oldPrice) {
        totalPrice += (array[i].oldPrice * array[i].count);
      } else {
        totalPrice += (array[i].price * array[i].count);
      }
    }
    
    return totalPrice;
  }
  const totalPrice = getTotalPrice(shoppingCartState);
  
  // Получаем ОБЩУЮ СКИДКУ
  let getTotalDiscount = (array) => {
    let totalDiscount = 0;
    const itemCount = array.length;
    
    for (let i = 0; i < itemCount; i++) {
      if (array[i].oldPrice) {
        const discount = array[i].oldPrice - array[i].price;
        totalDiscount += (discount * array[i].count);
      }
    }
    
    return totalDiscount;
  }
  const totalDiscount = getTotalDiscount(shoppingCartState);

  // Получаем общую стоимость корзины С УЧЕТОМ СКИДКИ
  let getTotalPriceWithDiscount = (array) => {
    let totalPriceWithDiscount = 0;
    const itemCount = array.length;
  
    for (let i = 0; i < itemCount; i++) {
      const itemPrice = array[i].price;
      const itemCount = array[i].count;
      totalPriceWithDiscount += (itemPrice * itemCount);
    }
  
    return { totalPriceWithDiscount, itemCount };
  }
  const { totalPriceWithDiscount, itemCount } = getTotalPriceWithDiscount(shoppingCartState);
  
  // Количество позиций в корзине
  let itemsAmount = '';
  if (itemCount === 1) {
    itemsAmount = `${itemCount} товар`;
  } else if (itemCount > 1 && itemCount < 5) {
    itemsAmount = `${itemCount} товара`;
  } else {
    itemsAmount = `${itemCount} товаров`;
  }

  const toOrderHandler = () => {
    navigate('/cart/order');
  }

  return (
    <section className={c.shoppingCart}>
      <div className={`${c.shoppingCart__container} ${c.container}`}>
        <BreadcrumbsComponent pageName={'Корзина'} />
        <h1 className={c.shoppingCart__title}>Корзина</h1>
        {shoppingCartState && shoppingCartState.length !== 0 && (
          <div className={c.shoppingCart__mainContent}>
            <div className={c.shoppingCart__listContainer}>
              {shoppingCartList}
            </div>
            <div className={c.shoppingCart__footer}>
              <p className={c.shoppingCart__footerTitle}>Ваша корзина</p>
              <div className={c.shoppingCart__countRow}>
                <p>{itemsAmount}</p>
                <span></span>
                <p>{totalPrice.toLocaleString('ru-RU')} руб.</p>
              </div>
              {
                totalDiscount 
                ? <div className={c.shoppingCart__discountRow}>
                    <p>Скидка</p>
                    <span></span>
                    <p>{totalDiscount.toLocaleString('ru-RU')} руб.</p>
                  </div>
                : null
              }
              <div className={c.shoppingCart__totalRow}>
                <p className={c.shoppingCart__totalRowLabel}>Итого:</p>
                <span></span>
                <div className={c.shoppingCart__totalRowPriceBox}>
                  {
                    totalDiscount 
                    ? <p className={c.shoppingCart__totalDiscountPrice}>{totalPrice.toLocaleString('ru-RU')} руб.</p> 
                    : null
                  }
                  <p className={c.shoppingCart__totalPrice}>{totalPriceWithDiscount.toLocaleString('ru-RU')} руб.</p>
                </div>
              </div>
              <Button size='large' className={c.shoppingCart__toOrderLink} onClick={toOrderHandler}>Перейти к оформлению</Button>
            </div>
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
              <button className={c.shoppingCart__emptyLinkMobile} onClick={toggleDrawer}>Перейти в каталог</button>
            </div>
          </div>
          )}
      </div>
      <MobileCatalogDrawer toggleDrawer={toggleDrawer} drawerVisible={drawerVisible} childrenDrawerVisible={childrenDrawerVisible} showChildrenDrawer={showChildrenDrawer} onChildrenDrawerClose={onChildrenDrawerClose} />
    </section>
  )
}
