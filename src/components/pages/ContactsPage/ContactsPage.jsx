import c from './ContactsPage.module.scss';
import { EnvironmentOutlined, MailOutlined, MobileOutlined } from '@ant-design/icons';
import { personalData } from '../../../data/personalData';
import { SocialLinks } from '../../SocialLinks/SocialLinks';
import { CallbackForm } from '../../CallbackForm/CallbackForm';
import { BreadcrumbsComponent } from '../../BreadcrumbsComponent/BreadcrumbsComponent';

const ContactsPage = () => {
  return (
    <section className={c.contactsPage}>
      <div className={`${c.contactsPage__container} container`}>
        <BreadcrumbsComponent pageName={'Контакты'} />
        <h1 className={c.contactsPage__title}>Контакты</h1>
        <div className={c.contactsPage__content}>
          <div className={c.contactsPage__contactsWrapper}>
            <div className={c.contactsPage__phoneMail}>
              <a href={`tel:${personalData.phone}`}><MobileOutlined style={{transform: 'scale(-0.8, 0.8)', padding: '2px'}} /> {personalData.phoneMasked}</a>
              <a href={`mailto:${personalData.mail}`}><MailOutlined style={{transform: 'scale(-0.8, 0.8)', padding: '2px'}} /> {personalData.mail}</a>
            </div>
            <div className={c.contactsPage__socialLinks}>
              <SocialLinks />
            </div>
          </div>
          <div className={c.contactsPage__locationWrapper}>
            <p><EnvironmentOutlined /> Гатчина, CПб</p>
          </div>
          <div className={c.contactsPage__callbackWrapper}>
            <h2 className={c.contactsPage__formTitle}>Возникли вопросы?</h2>
            <p className={c.contactsPage__formSubtitle}>Заполните форму ниже, мы вам перезвоним. <br />Поможем с концепцией, воплотим любую идею!</p>

            <div className={c.contactsPage__callback}>
              <CallbackForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactsPage;
