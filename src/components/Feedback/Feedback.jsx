import c from './Feedback.module.scss';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { personalData } from '../../data/personalData';
import { SocialLinks } from '../SocialLinks/SocialLinks';
import { CallbackForm } from '../CallbackForm/CallbackForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { callMeBackSubmit } from '../../redux/callMeBackSlice';

export const Feedback = () => {
  const isSubmittedState = useSelector(state => state.callMeBack.isSubmitted);
  const dispatch = useDispatch();

  useEffect(() => {
    const isSubmittedSession = sessionStorage.getItem('submitted');
    if (isSubmittedSession === 'true') {
      dispatch(callMeBackSubmit(true));
    }
  }, [dispatch]);
  
  return (
    <section className={c.feedback} id='feedback_section'>
      <div className={c.feedback__formWrapper}>
        <h2 className={c.feedback__formTitle}>Возникли вопросы?</h2>
        <p className={c.feedback__formSubtitle}>Заполните форму ниже, мы вам перезвоним. <br />Поможем с концепцией, воплотим любую идею!</p>

        <div className={c.feedback__callback}>
          <CallbackForm className={c.feedback__form} />
          {isSubmittedState && (
            <div className={c.feedback__submitCover}>
              <h2 className={c.feedback__submitTitle}>Заявка отправлена!</h2>
              <p className={c.feedback__submitSubtitle}>Мы вам перезвоним</p>
            </div>
          )}
        </div>
      </div>
      <div className={c.feedback__contacts}>
        <div className={c.feedback__contactsInner}>
          <div className={c.feedback__contactsItem}>
            <div className={c.feedback__contactsIcon}>
              <MailOutlined />
            </div>
            <div className={c.feedback__contactsInfo}>
              <h3>Почта</h3>
              <a href={`mailto:${personalData.mail}`}>{personalData.mail}</a>
            </div>
          </div>

          <div className={c.feedback__contactsItem}>
            <div className={c.feedback__contactsIcon}>
              <PhoneOutlined style={{transform: 'scale(-1, 1)'}} />
            </div>
            <div className={c.feedback__contactsInfo}>
              <h3>Телефон</h3>
              <a href={`tel:${personalData.phone}`}>{personalData.phone}</a>
            </div>
          </div>

          <div className={c.feedback__socials}>
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
};
