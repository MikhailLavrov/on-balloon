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
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentCartItems(shoppingCartState);
  }, [shoppingCartState])
  
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
    <CatalogRowCard {...item} key={item.article} />
  ));

  let totalOldPrice = (array) => {
    let wholeOldPrice = 0;
    const itemCount = array.length; // Получаем количество товаров в корзине
    
    for (let i = 0; i < itemCount; i++) {
      if (array[i].oldPrice) {
        wholeOldPrice += (array[i].oldPrice * array[i].count);
      } else {
        wholeOldPrice += (array[i].price * array[i].count);
      }
    }
    
    return { wholeOldPrice };
  }
  
  const { wholeOldPrice } = totalOldPrice(shoppingCartState);

  let totalPrice = (array) => {
    let price = 0;
    const itemCount = array.length; // Получаем количество товаров в корзине
  
    for (let i = 0; i < itemCount; i++) {
      const itemPrice = array[i].price;
      const itemCount = array[i].count;
      price += (itemPrice * itemCount);
    }
  
    return { price, itemCount };
  }
  
  const { price, itemCount } = totalPrice(shoppingCartState);
  
  let totalDiscount = (array) => {
    let wholeDiscount = 0;
    const itemCount = array.length; // Получаем количество товаров в корзине
    
    for (let i = 0; i < itemCount; i++) {
      if (array[i].oldPrice) {
        const discount = array[i].oldPrice - array[i].price;
        wholeDiscount += (discount * array[i].count);
      }
    }
    
    return { wholeDiscount };
  }
  
  const { wholeDiscount } = totalDiscount(shoppingCartState);
    
  let countRow = '';
  if (itemCount === 1) {
    countRow = `${itemCount} товар`;
  } else if (itemCount > 1 && itemCount < 5) {
    countRow = `${itemCount} товара`;
  } else {
    countRow = `${itemCount} товаров`;
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
                <p>{countRow}</p>
                <span></span>
                <p>{wholeOldPrice.toLocaleString('ru-RU')} руб.</p>
              </div>
              {
              wholeDiscount ?
              <div className={c.shoppingCart__discountRow}>
                <p>Скидка</p>
                <span></span>
                <p>{wholeDiscount.toLocaleString('ru-RU')} руб.</p>
              </div>
              : null
              }
              <div className={c.shoppingCart__totalRow}>
                <p className={c.shoppingCart__totalRowLabel}>Итого:</p>
                <span></span>
                <div className={c.shoppingCart__totalRowPriceBox}>
                  {wholeDiscount ? <p className={c.shoppingCart__totalDiscountPrice}>{wholeOldPrice.toLocaleString('ru-RU')} руб.</p> : null}
                  <p className={c.shoppingCart__totalPrice}>{price.toLocaleString('ru-RU')} руб.</p>
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
