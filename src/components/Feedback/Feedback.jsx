import c from './Feedback.module.scss';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { personalData } from '../../data/personalData';
import { SvgIcon } from '../SvgIcon/SvgIcon';
import { notification } from 'antd';
import { useEffect, useState } from 'react';
import { MaskedPhoneInput } from '../../utils/MaskedPhoneInput';

const openNotification = () => {
  notification.open({
    message: 'Информация отправлена',
    description: 'Мы свяжемся с Вами в ближайшее время.',
  });
};

export const Feedback = () => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const isSubmitted = sessionStorage.getItem('submitted');

    if (isSubmitted === 'true') {
      setSubmitted(true);
    }
  }, []);
  
  const onSubmitHandler = () => {
    setSubmitted(true);
    sessionStorage.setItem('submitted', 'true');
  }
  
  return (
    <section className={c.feedback} id='feedback_section'>
      <div className={c.feedback__formWrapper}>
        <h2 className={c.feedback__formTitle}>Закажите шары на&nbsp;праздник</h2>
        <p className={c.feedback__formSubtitle}>Оставьте заявку, мы вам перезвоним.<br />Поможем с концепцией оформления мероприятия, воплотим любую идею.</p>

        <div className={c.feedback__callback}>
          <iframe name="hidden_iframe" id="hidden_iframe" title='gFormIframe' style={{display: 'none'}} 
            onLoad={() => {
              if (submitted) {
                openNotification()
              } 
            }}
          >
          </iframe>
          <form 
            className={c.feedback__form}
            action={personalData.gFormsFeedback.action}
            method="post" 
            target="hidden_iframe"
            onSubmit={onSubmitHandler}
            >
            <label htmlFor="name">Имя</label>
            <input name={personalData.gFormsFeedback.nameEntry} id='name' type="text" required maxLength={50} placeholder='Ваше имя' />
            <label htmlFor='phone'>Телефон</label>
            {/* <input name={personalData.gFormsFeedback.phoneEntry} id='phone' type="text" required /> */}
            <MaskedPhoneInput phoneEntry={personalData.gFormsFeedback.phoneEntry} />
            <input type="submit" value="Отправить" disabled={submitted} />

          </form>
            {submitted &&
              <div className={c.feedback__submitCover}>
                <h2 className={c.feedback__submitTitle}>Заявка отправлена!</h2>
                <p className={c.feedback__submitSubtitle}>Мы вам перезвоним</p>
              </div>
            }
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
                <PhoneOutlined style={{transform: 'scale(-1, 1)',}} />
              </div>
              <div className={c.feedback__contactsInfo}>
                <h3>Телефон</h3>
                <a href={`tel:${personalData.phone}`}>{personalData.phone}</a>
              </div>
            </div>

            <div className={c.feedback__socials}>
              <a href={personalData.telegram} target='_blank' rel="noreferrer" title='Написать в Telegram'>
                <SvgIcon icon='telegram' />
              </a>
              <a href={personalData.whatsapp} target='_blank' rel="noreferrer" title='Написать в WhatsApp'>
                <SvgIcon icon='whatsapp' />
              </a>
              <a href={personalData.vkontakte} target='_blank' rel="noreferrer" title='Написать в VK'>
                <SvgIcon icon='vk' />
              </a>
            </div>

        </div>
      </div>
    </section>
  )
}
