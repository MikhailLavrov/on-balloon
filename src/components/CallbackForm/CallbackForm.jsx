import { personalData } from '../../data/personalData';
import { notification } from 'antd';
import { MaskedPhoneInput } from '../../utils/MaskedPhoneInput';
import { callMeBackSubmit } from '../../redux/callMeBackSlice';
import { useDispatch, useSelector } from 'react-redux';

const openNotification = () => {
  notification.open({
    message: 'Информация отправлена',
    description: 'Мы свяжемся с Вами в ближайшее время.',
  });
};

export const CallbackForm = (props) => {
  const isSubmittedState = useSelector(state => state.callMeBack.isSubmitted)
  const dispatch = useDispatch();
  
  const onSubmitHandler = () => {
    dispatch(callMeBackSubmit(true));
    sessionStorage.setItem('submitted', 'true'); // Сохраняем значение в сессионное хранилище
    openNotification()
  }
  
  return (
    <>
      <iframe name="hidden_iframe" id="hidden_iframe" title='gFormIframe' style={{display: 'none'}} 
        onLoad={() => {
          if (isSubmittedState) {
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
        <input type="submit" value={isSubmittedState ? "Данные отправлены" : "Отправить"} disabled={isSubmittedState} />
      </form>
    </>
  )
}
