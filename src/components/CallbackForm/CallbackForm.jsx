import { personalData } from '../../data/personalData';
import { notification } from 'antd';
import { useEffect, useState } from 'react';
import { MaskedPhoneInput } from '../../utils/MaskedPhoneInput';
import { callMeBackSubmit } from '../../redux/favouritesSlice';
import { useDispatch } from 'react-redux';

const openNotification = () => {
  notification.open({
    message: 'Информация отправлена',
    description: 'Мы свяжемся с Вами в ближайшее время.',
  });
};

export const CallbackForm = (props) => {
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    const isSubmitted = sessionStorage.getItem('submitted');
  
    if (isSubmitted === 'true') {
      setSubmitted(true);
    }
  }, []);
  
  const onSubmitHandler = () => {
    setSubmitted(true);
    sessionStorage.setItem('submitted', 'true');
    dispatch(callMeBackSubmit(true))
    openNotification()
  }
  
  return (
    <>
      <iframe name="hidden_iframe" id="hidden_iframe" title='gFormIframe' style={{display: 'none'}} 
        onLoad={() => {
          if (submitted) {
            // openNotification()
          } 
        }}
        >
      </iframe>
      <form 
        className={props.className}
        action={personalData.gFormsFeedback.action}
        method="post" 
        target="hidden_iframe"
        onSubmit={onSubmitHandler}
        >
        <label htmlFor="name">Имя</label>
        <input name={personalData.gFormsFeedback.nameEntry} id='name' type="text" required maxLength={50} placeholder='Ваше имя' />
        <label htmlFor='phone'>Телефон</label>
        <MaskedPhoneInput phoneEntry={personalData.gFormsFeedback.phoneEntry} />
        <input type="submit" value={submitted ? "Данные отправлены" : "Отправить"} disabled={submitted} />
      </form>
    </>
  )
}
