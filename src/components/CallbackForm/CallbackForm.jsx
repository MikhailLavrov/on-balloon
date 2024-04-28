import { useForm } from "react-hook-form"
import { useEffect, useState } from "react";
import ReactInputMask from "react-input-mask";
import c from './CallbackForm.module.scss';
import { sendOrder } from "../../utils/SendOrder";

export const CallbackForm = ({ outerHandler }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  })

  const [ isSubmitted, setIsSubmitted ] = useState(false);
  const [ phoneValue, setPhoneValue ] = useState('');

  useEffect(() => {
    let isSubmittedSession = sessionStorage.getItem('submitted');
    if (isSubmittedSession === 'true') {
      setIsSubmitted(true)
    }
  }, []);

  const handlePhoneChange = (event) => {
    setPhoneValue(event.target.value.replace(/\D/g, ''));
  };
  
  const onSubmit = (data) => {
    sessionStorage.setItem('submitted', 'true');
    setIsSubmitted(true);
    outerHandler && outerHandler();
    sendOrder({
      message: `Заявка с сайта на обратный звонок\n Имя: ${data.name}\n Телефон: ${data.phone}`,
    });
    reset();
  }

  return (
  <div className={c.callback}>
    {
      isSubmitted ? (
        <div className={c.callback__submitCover}>
          <h2 className={c.callback__submitTitle}>Заявка отправлена!</h2>
          <p className={c.callback__submitSubtitle}>Мы вам перезвоним</p>
        </div>
      )
    : <form 
        onSubmit={handleSubmit(onSubmit)}
        className={c.form}
      >
        <label>
          <input
          {...register("name", { 
            required: 'Заполните поле', 
            pattern: {
              value: /^[a-zA-Zа-яА-Я\s]+$/,
              message: 'Имя может состоять только из букв'
            },
            minLength: {
              value: 2,
              message: 'Минимум 2 символа'
            },
            maxLength: {
              value: 30,
              message: 'Максимум 30 символов'
            }
          })}
            placeholder='Ваше имя'
          />
          {errors?.name && <span className={c.form__error}>{errors?.name?.message || 'Заполните поле'}</span>}
        </label>

        <label>
          <ReactInputMask
            {...register("phone", { 
              required: 'Заполните поле', 
              minLength: {
                value: 11,
                message: 'Укажите правильный номер'
              },
            })}
            type='text'
            mask='+7 (999) 999-99-99'
            value={phoneValue}
            onChange={handlePhoneChange}
            required
            placeholder='+7 (___) ___-__-__'
            />
          {errors?.phone && <span className={c.form__error}>{errors?.phone?.message || 'Заполните поле'}</span>}
        </label>

        <label htmlFor="callbackAgreement" className={c.form__agreementLabel}>
          <input 
            type="checkbox"
            id='callbackAgreement'
            {...register("callbackAgreement", { 
              required: 'Необходимо подтверждение',
            }
          )} />
          Соглашаюсь на обработку персональных данных
          {errors?.callbackAgreement && <span className={c.form__error}>{errors?.callbackAgreement?.message || 'Необходимо подтверждение'}</span>}
        </label>

        <input type="submit" disabled={!isValid} />
      </form>
    }
  </div>
  )
}
