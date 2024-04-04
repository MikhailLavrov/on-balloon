import c from './Feedback.module.scss';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { personalData } from '../../data/personalData';
import { SocialLinks } from '../SocialLinks/SocialLinks';
import { CallbackForm } from '../CallbackForm/CallbackForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { callMeBackSubmit } from '../../redux/callMeBackSlice';
import { YMapComponent } from '../YMapComponent/YMapComponent';

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
          {isSubmittedState ? (
            <div className={c.callMeBack__submitCover}>
              <h2 className={c.callMeBack__submitTitle}>Заявка отправлена!</h2>
              <p className={c.callMeBack__submitSubtitle}>Мы вам перезвоним</p>
            </div>
          )
          : <CallbackForm className={c.callMeBack__form} />
          }
        </div>
      </div>
      <div className={c.feedback__contacts}>
        <p className={c.feedback__contactsTitle}>Контакты</p>
        <div className={c.feedback__contactsMainWrapper}>
          <div className={c.feedback__contactsMainContent}>
            <div className={c.feedback__contactsInner}>

              <div className={c.feedback__contactsItem}>
                <div className={c.feedback__contactsIcon}>
                  <PhoneOutlined style={{transform: 'scale(-0.8, 0.8)', padding: '2px'}} />
                </div>
                <div className={c.feedback__contactsInfo}>
                  <a href={`tel:${personalData.phone}`}>{personalData.phoneMasked}</a>
                  <span>8:00 - 20:00 МСК</span>
                </div>
              </div>

              <div className={c.feedback__contactsItem}>
                <div className={c.feedback__contactsIcon}>
                  <MailOutlined style={{transform: 'scale(-0.8, 0.8)', padding: '2px'}} />
                </div>
                <div className={c.feedback__contactsInfo}>
                  <a href={`mailto:${personalData.mail}`}>{personalData.mail}</a>
                </div>
              </div>

            </div>
            <div className={c.feedback__socials}>
              <SocialLinks />
            </div>
          </div>
          <div className={c.feedback__contactsMapWrapper}>
            <YMapComponent />
          </div>
        </div>
      </div>
    </section>
  );
};
