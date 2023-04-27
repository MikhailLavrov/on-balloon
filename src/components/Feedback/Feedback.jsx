import c from './Feedback.module.scss';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { contactData } from '../../data/contactData';
import { SvgIcon } from '../SvgIcon/SvgIcon';

export const Feedback = () => {
  return (
    <section className={c.feedback}>
      <div className={c.feedback__formWrapper}>
        <div className="container">
          <h2 className={c.feedback__title}>Закажите шары на&nbsp;праздник</h2>
          <p className={c.feedback__subtitle}>Оставьте заявку, мы вам перезвоним.<br />Поможем с концепцией оформления мероприятия, воплотим любую идею.</p>
          {/* Форма */}
        </div>
        </div>
        <div className={c.feedback__contacts}>
          <div className="container">
            <div className={c.feedback__contactsInner}>

              <div className={c.feedback__contactsItem}>
                <div className={c.feedback__contactsIcon}>
                  <MailOutlined />
                </div>
                <div className={c.feedback__contactsInfo}>
                  <h3>Почта</h3>
                  <a href={`mailto:${contactData.mail}`}>{contactData.mail}</a>
                </div>
              </div>

              <div className={c.feedback__contactsItem}>
                <div className={c.feedback__contactsIcon}>
                  <PhoneOutlined style={{transform: 'scale(-1, 1)',}} />
                </div>
                <div className={c.feedback__contactsInfo}>
                  <h3>Телефон</h3>
                  <a href={`tel:${contactData.phone}`}>{contactData.phone}</a>
                </div>
              </div>

              <div className={c.feedback__socials}>
                <a href={contactData.telegram} target='_blank' rel="noreferrer" title='Написать в Telegram'>
                  <SvgIcon icon='telegram' />
                </a>
                <a href={contactData.whatsapp} target='_blank' rel="noreferrer" title='Написать в WhatsApp'>
                  <SvgIcon icon='whatsapp' />
                </a>
                <a href={contactData.vkontakte} target='_blank' rel="noreferrer" title='Написать в VK'>
                  <SvgIcon icon='vk' />
                </a>
              </div>

            </div>
          </div>
        </div>
    </section>
  )
}
