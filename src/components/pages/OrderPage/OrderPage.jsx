import c from './OrderPage.module.scss';
import { BreadcrumbsComponent } from '../../BreadcrumbsComponent/BreadcrumbsComponent';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from 'antd';
import ReactInputMask from 'react-input-mask';
import { TelegramChatButton } from '../../TelegramChatButton/TelegramChatButton ';

export const OrderPage = () => {
  const shoppingCartState = useSelector(state => state.shoppingCart.items)
  const [currentCartItems, setCurrentCartItems] = useState(shoppingCartState);
  const [phoneValue, setPhoneValue] = useState('');
  const [textMessage, setTextMessage] = useState('');
  const [form] = Form.useForm();

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
      Комментарий: ${changedValues.additional || allValues.additional || ''}
      `;
    setTextMessage(textMessage)
  }

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  
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

                  <Form.Item name="additional">
                    <Input.TextArea showCount maxLength={500} placeholder='Дополнительная информация' />
                  </Form.Item>

                  <Form.Item >
                    <TelegramChatButton 
                      htmlType="submit"
                      buttonText="Отправить"
                      message={textMessage}
                      />
                  </Form.Item>

              </Form.Item>
            </Form>
          </div>
      </div>
    </section>
  )
}
