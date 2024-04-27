import { Result } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import c from './ShoppingCartPage.module.scss';
import { CatalogRowCard } from '../../CatalogRowCard/CatalogRowCard';
import { BreadcrumbsComponent } from '../../BreadcrumbsComponent/BreadcrumbsComponent';
import { MobileCatalogDrawer } from '../../MobileCatalogDrawer/MobileCatalogDrawer';
import { EmptyToCatalog } from '../components/EmptyToCatalog/EmptyToCatalog';
import { OrderForm } from '../../OrderForm/OrderForm';

export const ShoppingCartPage = () => {
  const shoppingCartState = useSelector(state => state.shoppingCart.items)
  const [currentCartItems, setCurrentCartItems] = useState(shoppingCartState);
  const [orderSuccess, setOrderSuccess] = useState(false);
  
  // Инициализируем состав корзины из state
  useEffect(() => {
    setCurrentCartItems(shoppingCartState);
  }, [shoppingCartState])

  // Получение общей стоимости и скидки
  const [totalPrice, totalDiscount] = useMemo(() => {
    let totalPrice = 0;
    let totalDiscount = 0;
    shoppingCartState.forEach(item => {
      totalPrice += item.count * (item.oldPrice || item.price);
      if (item.oldPrice) {
        totalDiscount += (item.oldPrice - item.price) * item.count;
      }
    });
    return [totalPrice, totalDiscount];
  }, [shoppingCartState]);

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

  return (
    <section className={c.shoppingCart}>
      <div className={`${c.shoppingCart__container} container`}>
        <BreadcrumbsComponent pageName={'Корзина'} />
        <h1 className={c.shoppingCart__title}>Корзина</h1>
        {shoppingCartState && shoppingCartState.length !== 0 && (
          <div className={c.shoppingCart__mainContent}>
            <div className={c.shoppingCart__listContainer}>
              {currentCartItems.map((item) => (
                <CatalogRowCard {...item} key={item.article} />
              ))}
            </div>
            <div className={c.shoppingCart__footer}>
              <div className={c.shoppingCart__footerResult}>
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
              </div>
              <div className={c.shoppingCart__footerClient}>
                <p className={c.shoppingCart__footerTitle}>Контактная информация</p>
                <OrderForm setOrderSuccess={setOrderSuccess} />
              </div>
            </div>
          </div>
        )}
        {(!shoppingCartState || shoppingCartState.length === 0) && (
          !orderSuccess
          ? <EmptyToCatalog />
          : <Result
              status="success"
              title="Заказ оформлен!"
              subTitle="После обработки заказа, наш менеджер свяжется с вами, чтобы обсудить детали"
              extra={[ <Link className={c.onSuccessHomeLink} to={'/'}>На главную</Link>, ]} 
            />
          )}
      </div>
      <MobileCatalogDrawer />
    </section>
  )
}
