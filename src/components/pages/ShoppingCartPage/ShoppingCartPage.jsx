import c from './ShoppingCartPage.module.scss';
import { CatalogRowCard } from '../../CatalogRowCard/CatalogRowCard';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Checkbox, Form, Input, Result } from 'antd';
import { Link } from 'react-router-dom';
import { BreadcrumbsComponent } from '../../BreadcrumbsComponent/BreadcrumbsComponent';
import { useEffect, useMemo, useState } from 'react';
import { MobileCatalogDrawer } from '../../MobileCatalogDrawer/MobileCatalogDrawer';
import { deleteAllItemsFromShoppingCart } from '../../../redux/shoppingCartSlice';
import ReactInputMask from 'react-input-mask';
import { EmptyToCatalog } from '../EmptyToCatalog/EmptyToCatalog';

const BOT_TOKEN = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
const BASE_URL = `https://api.telegram.org/bot${BOT_TOKEN}`;
const CHAT_ID = process.env.REACT_APP_TELEGRAM_CHATID;

export const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const shoppingCartState = useSelector(state => state.shoppingCart.items)
  const [currentCartItems, setCurrentCartItems] = useState(shoppingCartState);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [phoneValue, setPhoneValue] = useState('');
  const [clientData, setClientData] = useState('');

  // Управление состоянием корзины
  useEffect(() => {
    setPhoneValue('');
    setClientData('');
  }, [shoppingCartState]);
  
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


  // Форматирование данных заказа
  const formatOrderInfo = (values) => {
    let message = 'Заказ:\n\n';
    shoppingCartState.forEach(item => {
      message += `Артикул: ${item.article}\n`;
      message += `Название: ${item.title}\n`;
      message += `Цена: ${(item.oldPrice || item.price).toLocaleString('ru-RU')} руб.\n`;
      message += `Количество: ${item.count}\n\n`;
    });
    message += `Общая стоимость: ${totalPrice.toLocaleString('ru-RU')} руб.\n`;
    message += `Общая скидка: ${totalDiscount.toLocaleString('ru-RU')} руб.\n`;
    message += `${clientData}\n`;
    return message;
  };

  // Очистка корзины
  const clearShoppingCart = () => {
    dispatch(deleteAllItemsFromShoppingCart());
    localStorage.removeItem('shoppingCart');
    setOrderSuccess(true);
  };
  
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

// Отправка в Телеграм
  const onValuesChange = (changedValues, allValues) => {
    let textMessage = `
      Информация о клиенте:
      Имя: ${allValues.name}
      Телефон: ${allValues.phone}
      Адрес: ${allValues.deliveryAddress}
      Дата: ${allValues.deliveryTime}
      Комментарий: ${changedValues.comment || allValues.comment || ''}
    `;
    setClientData(textMessage)
  }
   
  // Отправка сообщения в Telegram
  const sendToTelegramChat = async (message) => {
    const POST_REQUEST_URL = `${BASE_URL}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}`;
    try {
      await fetch(POST_REQUEST_URL);
      clearShoppingCart();
    } catch (error) {
      console.error('Произошла ошибка при отправке сообщения:', error);
    }
  };
  
  // Отправка заказа в Telegram
  const onFinish = async (values) => {
    const message = formatOrderInfo(values);
    await sendToTelegramChat(message);
  };

  return (
    <section className={c.shoppingCart}>
      <div className={`${c.shoppingCart__container} ${c.container}`}>
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
                    label="Имя"
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
                    name="deliveryAddress"
                    label="Адрес доставки"
                    rules={[
                      {
                        required: true,
                        message: 'Укажите адрес доставки'
                      },
                    ]}
                    >
                    <Input placeholder='Адрес доставки' />
                  </Form.Item>
                  <Form.Item 
                    name="deliveryTime"
                    label="Дата мероприятия"
                    rules={[
                      {
                        required: true,
                        message: 'Укажите дату мероприятия'
                      },
                    ]}
                    >
                    <Input placeholder='Дата мероприятия' />
                  </Form.Item>
                  <Form.Item>
                    <span>* Стоимость доставки уточнит менеджер после подтверждения заказа</span>
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
                    <Checkbox>Разрешаю обработку персональных данных</Checkbox>
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
