import c from './Feedback.module.scss';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { contactData } from '../../data/contactData';
import { SvgIcon } from '../SvgIcon/SvgIcon';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const FeedbackSchema = Yup.object().shape({
  firstName: Yup.string()
  .min(2, 'Минимальная длина 2 символа')
  .max(25, 'Максимальная длина 25 символов')
  .required('Введите Ваше имя'),
  phoneNumber: Yup.string().matches(phoneRegExp, 'Введите свой настоящий номер').required('Введите Ваш номер'),
});

const onSubmitHandle = (values, { resetForm }) => {
  console.log(values);
  resetForm();
};

export const Feedback = () => {
  return (
    <section className={c.feedback}>
      <div className={c.feedback__formWrapper}>
        <h2 className={c.feedback__formTitle}>Закажите шары на&nbsp;праздник</h2>
        <p className={c.feedback__formSubtitle}>Оставьте заявку, мы вам перезвоним.<br />Поможем с концепцией оформления мероприятия, воплотим любую идею.</p>

        <div className={c.feedback__formik}>
          <Formik
            initialValues={{firstName: '', phoneNumber: ''}}
            validationSchema={FeedbackSchema}
            validateOnChange={true}
            onSubmit={onSubmitHandle}
          >
            {({ errors, touched, isSubmitting  }) => (
              <Form className={c.feedback__form}>

                <Field name="firstName" placeholder="Ваше имя" />
                  {errors.firstName && touched.firstName ? (
                    <div>{errors.firstName}</div>
                  ) : null}
                  <Field name="phoneNumber" placeholder="8(ХХХ)ХХХХХХХ" mask="99/99/9999" />
                  {errors.phoneNumber && touched.phoneNumber ? (
                    <div>{errors.phoneNumber}</div>
                  ) : null}
                
                <button type="submit" disabled={isSubmitting}>Отправить</button>
              </Form>
            )}
          </Formik>
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
    </section>
  )
}
