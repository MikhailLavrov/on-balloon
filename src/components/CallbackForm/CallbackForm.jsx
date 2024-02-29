import { Form, Input, notification } from 'antd';
import { callMeBackSubmit } from '../../redux/callMeBackSlice';
import { useDispatch, useSelector } from 'react-redux';
import { TelegramChatButton } from '../TelegramChatButton/TelegramChatButton ';
import { useState } from 'react';
import ReactInputMask from 'react-input-mask';

const openNotification = () => {
  notification.open({
    message: 'Информация отправлена',
    description: 'Мы свяжемся с Вами в ближайшее время.',
  });
};

export const CallbackForm = ({className}) => {
  const isSubmittedState = useSelector(state => state.callMeBack.isSubmitted)
  const [phoneValue, setPhoneValue] = useState('');
  const [form] = Form.useForm();
  const nameValue = Form.useWatch('name', form);
  const dispatch = useDispatch();

  const onMaskChangeHandler = (e) => {
    setPhoneValue(e.target.value.replace(/\D/g, ''));
  };
  
  const onSubmitHandler = () => {
    dispatch(callMeBackSubmit(true));
    sessionStorage.setItem('submitted', 'true');
    openNotification();
  }
  
  return (
    <Form form={form} className={className}>

      <Form.Item label="Имя" name="name">
        <Input placeholder='Ваше имя' required />
      </Form.Item>

      <Form.Item label="Телефон"  name="phone">
        <ReactInputMask
          type='text'
          mask='+7 (999) 999-99-99'
          value={phoneValue > 0 ? phoneValue : ''}
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
