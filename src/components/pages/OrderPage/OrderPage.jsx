import c from './OrderPage.module.scss';
import { BreadcrumbsComponent } from '../../BreadcrumbsComponent/BreadcrumbsComponent';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Checkbox, Collapse, Form, Input, Radio } from 'antd';
import ReactInputMask from 'react-input-mask';
import { TelegramChatButton } from '../../TelegramChatButton/TelegramChatButton ';

export const OrderPage = () => {
  const shoppingCartState = useSelector(state => state.shoppingCart.items)
  const [currentCartItems, setCurrentCartItems] = useState(shoppingCartState);
  const [phoneValue, setPhoneValue] = useState('');
  const [textMessage, setTextMessage] = useState('');
  const [form] = Form.useForm();
  const [deliveryTypeValue, setDeliveryTypeValue] = useState('delivery');
  const deliveryOptions = [
    {
      label: 'Доставка',
      value: 'delivery',
    },
    {
      label: 'Самовывоз',
      value: 'pickup',
    },
  ]
  const onDeliveryTypeChange = ({ target: { value } }) => {
    setDeliveryTypeValue(value);
  };

  useEffect(() => {
    setCurrentCartItems(shoppingCartState);
  }, [shoppingCartState])

  const onMaskChangeHandler = (e) => {
    setPhoneValue(e.target.value.replace(/\D/g, ''));
  };

  const onValuesChange = (changedValues, allValues) => {
    let textMessage = 
      `Оформлен заказ на сайте.\n
      Информация о клиенте:
      Имя: ${allValues.name}
      Телефон: ${allValues.phone}
      Email: ${allValues.email}
      Способ доставки: ${allValues.deliveryType}
      Комментарий: ${changedValues.additional || allValues.additional || ''}
      `;
    setTextMessage(textMessage)
  }

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const cartItemsList = [
    {
      key: '1',
      label: 'Список товаров',
      children: 
        currentCartItems.map((item, i) => {
          return (
            <div key={i}>
              <img src={item.image} width={50} alt={item.title} />
              <span>{item.title}</span> - <span>{item.count} шт.</span>
            </div>
          )
        }),
    },
  ]
  
  return (
    <section className={c.orderPage}>
      <div className={`${c.orderPage__container} container`}>
        <BreadcrumbsComponent pageName={'Оформление заказа'} />
        <h1 className={c.orderPage__title}>Оформление заказа</h1>
          <div className={c.orderPage__clientInfo}>
            <Form
              className={c.orderPage__form}
              form={form}
              layout="vertical"
              name="order"
              onValuesChange={onValuesChange}
              onFinish={onFinish}
              scrollToFirstError
              >
              <Form.Item label={'Контактные данные получателя'} required >

                  <Form.Item
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: 'Заполните поле',
                        whitespace: true,
                      },
                      {
                        max: 60, 
                        message: 'Максимум ${max} символов'
                      },
                    ]}
                  >
                    <Input placeholder="ФИО*" />
                  </Form.Item>

                  <Form.Item 
                    name='phone' 
                    rules={[
                      { 
                        required: true, 
                        message: 'Обязательное поле' 
                      }
                    ]}>
                    <ReactInputMask
                      type='text'
                      mask='+7 (999) 999-99-99'
                      value={phoneValue > 0 ? phoneValue : ''}
                      onChange={onMaskChangeHandler}
                      required
                      placeholder='+7 (___) ___-__-__'
                    />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    rules={[
                      {
                        type: 'email',
                        message: 'Введите адрес в формате "имя@домен.ru"',
                      },
                    ]}
                  >
                    <Input placeholder='Email' />
                  </Form.Item>

                  <Form.Item 
                    name="deliveryType" 
                    label={<Radio.Group options={deliveryOptions} onChange={onDeliveryTypeChange} value={deliveryTypeValue}  defaultValue={'delivery'} />}
                    rules={[
                      {
                        required: true,
                        message: 'Заполните поле',
                        whitespace: true,
                      },
                      {
                        max: 100, 
                        message: 'Максимум ${max} символов'
                      },
                    ]}
                    >
                    {deliveryTypeValue === 'delivery' ? <Input placeholder='Адрес доставки' /> : <span>Пункт выдачи: ЛО, г. Гатчина, ул. Киевская, д. 17кБ</span>}
                  </Form.Item>

                  <Form.Item name="additional">
                    <Input.TextArea showCount maxLength={500} placeholder='Дополнительная информация' />
                  </Form.Item>

              </Form.Item>
              <Form.Item label={'Ваш заказ'} >
                <div>
                  <Collapse items={cartItemsList} />
                </div>
                <div>
                  <p>Всего товаров: {currentCartItems.length}</p>
                  <p>Итоговая стоимость: {}</p>
                  <p>Тип получения: {deliveryTypeValue === 'delivery' ? 'Доставка' : 'Самовывоз'}
                    {deliveryTypeValue === 'delivery' && <i style={{display: 'flex'}}>*Стоимость доставки уточнит менеджер после согласования заказа</i>}
                  </p>
                </div>
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
                  Ознакомлен с правилами обработки персональных данных
                </Checkbox>
              </Form.Item>
                  
              <Form.Item >
                <TelegramChatButton 
                  htmlType="submit"
                  buttonText="Отправить"
                  message={textMessage}
                  />
              </Form.Item>
            </Form>
          </div>
      </div>
    </section>
  )
}
