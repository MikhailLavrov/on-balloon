import { Form, Input, notification } from 'antd';
import { callMeBackSubmit } from '../../redux/callMeBackSlice';
import { useDispatch, useSelector } from 'react-redux';
import { TelegramChatButton } from '../TelegramChatButton/TelegramChatButton ';
import { useState } from 'react';
import ReactInputMask from 'react-input-mask';
import c from './CallbackForm.module.scss';

const openNotification = () => {
  notification.open({
    message: 'Информация отправлена',
    description: 'Мы свяжемся с Вами в ближайшее время.',
  });
};

export const CallbackForm = ({className}) => {
  const isSubmittedState = useSelector(state => state.callMeBack.isSubmitted)
  const [phoneValue, setInputValue] = useState('');
  const [form] = Form.useForm();
  const nameValue = Form.useWatch('name', form);
  const dispatch = useDispatch();

  const onMaskChangeHandler = (e) => {
    setInputValue(e.target.value.replace(/\D/g, ''));
  };
  
  const onSubmitHandler = () => {
    dispatch(callMeBackSubmit(true));
    sessionStorage.setItem('submitted', 'true');
    openNotification();
  }
  
  return (
    <Form form={form} className={className}>

      <Form.Item label="Имя" name="name" rules={[{ required: true, message: 'Заполните поле' }]}>
        <Input placeholder='Ваше имя' required />
      </Form.Item>

      <Form.Item label="Телефон"  name="phone" rules={[{ required: true, message: 'Заполните поле' }]}>
        <ReactInputMask
          type='text'
          mask='+7 (999) 999-99-99'
          value={phoneValue}
          onChange={onMaskChangeHandler}
          required
          placeholder='+7 (___) ___-__-__'
        />
      </Form.Item>
      
      <Form.Item>
        <TelegramChatButton 
          buttonText={isSubmittedState ? "Данные отправлены" : "Отправить"}
          message={`Заявка с сайта на обратный звонок.\n Имя: ${nameValue}\n Телефон: ${phoneValue}`}
          disabled={!phoneValue || phoneValue.length < 11 || !nameValue || nameValue < 2}
          outerHandler={onSubmitHandler}
          />
      </Form.Item>

    </Form>
  )
}
