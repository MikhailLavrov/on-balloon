import { useForm } from "react-hook-form"
import { useEffect, useState } from "react";
import ReactInputMask from "react-input-mask";
import c from './CallbackForm.module.scss';
import { sendOrder } from "../../utils/SendOrder";

export const CallbackForm = ({ outerHandler }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

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
  
  const onSubmitHandler = (data) => {
    sessionStorage.setItem('submitted', 'true');
    setIsSubmitted(true);
    outerHandler && outerHandler();
    sendOrder({
      message: `Заявка с сайта на обратный звонок\n Имя: ${data.name}\n Телефон: ${data.phone}`,
    })
  }

  const nameValue = watch("name");
  const agreementValue = watch("agreement");

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
        onSubmit={handleSubmit(onSubmitHandler)}
        className={c.callback__form}
      >
        <input
          {...register("name", { required: true, minLength: 2 })}
          placeholder='Ваше имя'
        />
        {errors.name && <span>Заполните поле</span>}

        <ReactInputMask
          {...register("phone", { required: true, minLength: 11 })}
          type='text'
          mask='+7 (999) 999-99-99'
          value={phoneValue}
          onChange={handlePhoneChange}
          required
          placeholder='+7 (___) ___-__-__'
        />
        {errors.phone && <span>Заполните поле</span>}

        <label htmlFor="agreement">
          <input 
            type="checkbox"
            id='agreement'
            {...register("agreement", { required: true })} 
          />
          Соглашаюсь на обработку персональных данных
        </label>
        {errors.name && <span>Необходимо подтверждение</span>}

        <input
          type="submit"
          disabled={!phoneValue || phoneValue.length < 11 || !nameValue || nameValue.length < 2 || !agreementValue}
        />
      </form>
    }
  </div>
  )
}
