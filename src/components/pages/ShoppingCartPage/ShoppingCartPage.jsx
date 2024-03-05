import c from './ShoppingCartPage.module.scss';
import { CatalogRowCard } from '../../CatalogRowCard/CatalogRowCard';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Checkbox, Form, Input, Result } from 'antd';
import { Link } from 'react-router-dom';
import { BreadcrumbsComponent } from '../../BreadcrumbsComponent/BreadcrumbsComponent';
import { useEffect, useState } from 'react';
import { MobileCatalogDrawer } from '../../MobileNavigation/MobileCatalogDrawer';
import { deleteAllItemsFromShoppingCart } from '../../../redux/shoppingCartSlice';
import ReactInputMask from 'react-input-mask';
import { setCurrentMenu } from '../../../redux/menuNavSlice';

const chatId23 = '-112030425060768293011924354';
const BOT_TOKEN44 = 'w103517816:AAG86TXNqQRxBOFDdwQkKe7Bs__cKgo9H17';
const characters = BOT_TOKEN44.split('');
const firstCharacter = characters[0];
characters[0] = characters[characters.length - 1];
characters[characters.length - 1] = firstCharacter;
const BOT_TOKEN24 = characters.join('');
const BASE_URL = `https://api.telegram.org/bot${BOT_TOKEN24}`;

export const ShoppingCartPage = () => {
  const shoppingCartState = useSelector(state => state.shoppingCart.items)
  const [currentCartItems, setCurrentCartItems] = useState(shoppingCartState);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [childrenDrawerVisible, setChildrenDrawerVisible] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [phoneValue, setPhoneValue] = useState('');
  const [clientData, setClientData] = useState('');
  const dispatch = useDispatch();

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

  // Отправка заказа
  const prepareOrderInfo = (cartItems, totalPrice, totalDiscount, totalPriceWithDiscount) => {
    const orderItems = cartItems.map(item => ({
      article: item.article,
      title: item.title,
      price: item.price,
      count: item.count
    }));
  
    return {
      items: orderItems,
      totalPrice: totalPrice.toLocaleString('ru-RU') + ' руб.',
      totalDiscount: totalDiscount.toLocaleString('ru-RU') + ' руб.',
      totalPriceWithDiscount: totalPriceWithDiscount.toLocaleString('ru-RU') + ' руб.'
    };
  };
  const orderInfo = prepareOrderInfo(shoppingCartState, totalPrice, totalDiscount, totalPriceWithDiscount);
  const formatOrderInfo = (orderInfo) => {
    let message = 'Заказ:\n\n';
    orderInfo.items.forEach(item => {
      message += `Артикул: ${item.article}\n`;
      message += `Название: ${item.title}\n`;
      message += `Цена: ${item.price.toLocaleString('ru-RU')} руб.\n`;
      message += `Количество: ${item.count}\n\n`;
    });
  
    message += `Общая стоимость: ${orderInfo.totalPrice}\n`;
    message += `Общая скидка: ${orderInfo.totalDiscount}\n`;
    message += `Итоговая стоимость: ${orderInfo.totalPriceWithDiscount}\n`;
    message += `${clientData}\n`;
  
    return message;
  };
  const message = formatOrderInfo(orderInfo);
  const clearShoppingCart = () => {
    dispatch(deleteAllItemsFromShoppingCart());
    
    localStorage.removeItem('shoppingCart');
    setOrderSuccess(true);
  };
  const chatId14 = chatId23.split('').filter((_, index) => index % 2 === 0).join('');
  
  // Форма
  const [form] = Form.useForm();
  const SubmitButton = ({ form, children }) => {
    const [submittable, setSubmittable] = useState(false);
  
    // Watch all values
    const values = Form.useWatch([], form);
    useEffect(() => {
      form
        .validateFields({
          validateOnly: true,
        })
        .then(() => 
          setSubmittable(true)
        )
        .catch(() => setSubmittable(false));
    }, [form, values]);
    return (
      <Button type="primary" htmlType="submit" disabled={!submittable}>
        {children}
      </Button>
    );
  };
  const validateMessages = {
    required: 'Заполните поле',
  };
  const onMaskChangeHandler = (e) => {
    setPhoneValue(e.target.value.replace(/\D/g, ''));
  };
  const agreementNavigate = (e) => {
    dispatch(setCurrentMenu({ currentTopMenu: 'forclients', currentMenu: 'agreement' }));
  }
  const onValuesChange = (changedValues, allValues) => {
    let textMessage = 
      `
      Информация о клиенте:
      Имя: ${allValues.name}
      Телефон: ${allValues.phone}
      Комментарий: ${changedValues.comment || allValues.comment || ''}
      `;
      setClientData(textMessage)
  }
  const sendToTelegramChat = async (message) => {
    const POST_REQUEST_URL = `${BASE_URL}/sendMessage?chat_id=${chatId14}&text=${encodeURIComponent(message)}`;
    
    if (message) {

        try {
        await fetch(POST_REQUEST_URL);
        clearShoppingCart();
      } catch (error) {
        console.error('Произошла ошибка при отправке сообщения:', error);
      }}
  };
  const onFinish = () => {
    sendToTelegramChat(message);
  };

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
                <Form
                  form={form}
                  onValuesChange={onValuesChange}
                  name="control-hooks"
                  onFinish={onFinish}
                  validateMessages={validateMessages}
                  layout='vertical'
                  className={c.form}
                >
                  <Form.Item
                    name="name"
                    label="ФИО"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="phone"
                    label="Телефон"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <ReactInputMask
                      type='text'
                      mask='+7 (999) 999-99-99'
                      value={phoneValue}
                      onChange={onMaskChangeHandler}
                      required
                      placeholder='+7 (___) ___-__-__'
                      className={c.reactInputMask}
                    />
                  </Form.Item>
                  <Form.Item
                    name="comment"
                    label="Комментарий"
                  >
                    <Input.TextArea showCount maxLength={200} />
                  </Form.Item>
                  <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                      {
                        validator: (_, value) =>
                          value ? Promise.resolve() : Promise.reject(new Error('Требуется подтверждение')),
                      },
                    ]}
                  >
                    <Checkbox>
                      Ознакомлен с <Link to={'/info'} onClick={agreementNavigate}>правилами обработки персональных данных</Link>
                    </Checkbox>
                  </Form.Item>
                  <Form.Item>
                    <SubmitButton form={form}>
                      Оформить заказ
                    </SubmitButton>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        )}
        {(!shoppingCartState || shoppingCartState.length === 0) && (
          !orderSuccess ?
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
          : <Result
          status="success"
          title="Заказ оформлен!"
          subTitle="После обработки заказа, наш менеджер свяжется с вами, чтобы обсудить детали"
          extra={[ <Link className={c.onSuccessHomeLink} to={'/'}>На главную</Link>, ]} />
          )}
      </div>
      <MobileCatalogDrawer toggleDrawer={toggleDrawer} drawerVisible={drawerVisible} childrenDrawerVisible={childrenDrawerVisible} showChildrenDrawer={showChildrenDrawer} onChildrenDrawerClose={onChildrenDrawerClose} />
    </section>
  )
}
