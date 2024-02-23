import c from './MobileContactsPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { EnvironmentOutlined, MailOutlined, MobileOutlined } from '@ant-design/icons';
import { personalData } from '../../../data/personalData';
import { SocialLinks } from '../../SocialLinks/SocialLinks';
import { YMapComponent } from '../../YMapComponent/YMapComponent';
import { CallbackForm } from '../../CallbackForm/CallbackForm';
import { useEffect } from 'react';
import { callMeBackSubmit } from '../../../redux/callMeBackSlice';
import { BreadcrumbsComponent } from '../../BreadcrumbsComponent/BreadcrumbsComponent';

export const MobileContactsPage = () => {
  const isSubmittedState = useSelector(state => state.callMeBack.isSubmitted);
  const dispatch = useDispatch();

  useEffect(() => {
    const isSubmittedSession = sessionStorage.getItem('submitted');
    if (isSubmittedSession === 'true') {
      dispatch(callMeBackSubmit(true));
    }
  }, [dispatch]);

  return (
    <section className={c.contactsPage}>
      <div className={`${c.contactsPage__container} container`}>
        <BreadcrumbsComponent pageName={'Контакты'} />
        <h1 className={c.contactsPage__title}>Контакты</h1>
        <div className={c.contactsPage__content}>
          <h2 className={c.contactsPage__subTitle}>Всегда на связи:</h2>
          <div className={c.contactsPage__socialLinks}>
            <SocialLinks />
          </div>
          <div className={c.contactsPage__phoneMail}>
            <a href={`tel:${personalData.phone}`}><MobileOutlined /> {personalData.phone}</a>
            <a href={`mailto:${personalData.mail}`}><MailOutlined /> {personalData.mail}</a>
          </div>
          <div className={c.contactsPage__location}>
            <p><EnvironmentOutlined /> ЛО, г. Гатчина, ул. Киевская, 17Б</p>
            <YMapComponent />
          </div>
          <div className={c.contactsPage__callbackWrapper}>
            <h2 className={c.contactsPage__formTitle}>Возникли вопросы?</h2>
            <p className={c.contactsPage__formSubtitle}>Заполните форму ниже, мы вам перезвоним. <br />Поможем с концепцией, воплотим любую идею!</p>

            <div className={c.contactsPage__callback}>
              <CallbackForm className={c.contactsPage__form} />
              {isSubmittedState && (
                <div className={c.contactsPage__submitCover}>
                  <h2 className={c.contactsPage__submitTitle}>Заявка отправлена!</h2>
                  <p className={c.contactsPage__submitSubtitle}>Мы вам перезвоним</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
