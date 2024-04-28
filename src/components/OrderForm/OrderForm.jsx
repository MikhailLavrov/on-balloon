import { useDispatch, useSelector } from 'react-redux';
import ReactInputMask from 'react-input-mask';
import { useForm } from 'react-hook-form';
import { deleteAllItemsFromShoppingCart } from '../../redux/shoppingCartSlice';
import { sendOrder } from '../../utils/SendOrder';
import { useCallback, useState } from 'react';
import c from './OrderForm.module.scss';

export const OrderForm = ({ setOrderSuccess, totalPrice, totalDiscount }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const dispatch = useDispatch();
  const shoppingCartState = useSelector(state => state.shoppingCart.items);
  const [phoneValue, setPhoneValue] = useState('');

  const handlePhoneChange = useCallback((event) => {
    setPhoneValue(event.target.value.replace(/\D/g, ''));
  }, []);

  // Форматирование данных заказа
  const formatOrderInfo = (data) => {
    let clientData = `
      Информация о клиенте:
      Имя: ${data.name}
      Телефон: ${data.phone}
      Адрес: ${data.deliveryAddress}
      Дата: ${data.deliveryTime}
      Комментарий: ${data.comment}
    `;

    let message = 'Заказ:\n\n';
    shoppingCartState.forEach(item => {
      message += `Артикул: ${item.article}\n`;
      message += `Название: ${item.title}\n`;
      if (item.oldPrice) {
        message += `Цена без скидки: ${(item.oldPrice).toLocaleString('ru-RU')} руб.\n`
        message += `Цена со скидкой: ${(item.price).toLocaleString('ru-RU')} руб. (Скидка ${(item.oldPrice - item.price).toLocaleString('ru-RU')})\n`
      } else {
        message += `Цена: ${(item.price).toLocaleString('ru-RU')} руб.\n`
      }
      message += `Количество: ${item.count}\n`;
      if (item.oldPrice) {
        message += `Сумма (со скидкой): ${(item.price * item.count).toLocaleString('ru-RU')} руб.\n\n`
      } else {
        message += `Сумма: ${(item.price * item.count).toLocaleString('ru-RU')} руб.\n\n`
      }
    });
    message += `Общая стоимость: ${totalPrice.toLocaleString('ru-RU')} руб.\n`;
    message += `Общая скидка: ${totalDiscount.toLocaleString('ru-RU')} руб.\n`;
    message += `${clientData}\n`;
    return message;
  };

  const clearShoppingCart = () => {
    dispatch(deleteAllItemsFromShoppingCart());
    localStorage.removeItem('shoppingCart');
  };

  const onSubmit = (data) => {
    const message = formatOrderInfo(data);

    sendOrder({ message: message });
    clearShoppingCart();

    setOrderSuccess && setOrderSuccess(true);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={c.form}
      autoComplete='false'
    >
      <label htmlFor="name">
        <span className={c.form__inputTitle}>Ваше имя<small>*</small></span>
        <input
          type="text"
          id='name'
          placeholder='Ваше имя'
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
        />
        {errors?.name && <span className={c.form__error}>{errors?.name?.message || 'Заполните поле'}</span>}
      </label>

      <label htmlFor="phone">
        <span className={c.form__inputTitle}>Телефон<small>*</small></span>
        <ReactInputMask
          {...register("phone", {
            required: 'Заполните поле',
            minLength: {
              value: 11,
              message: 'Укажите правильный номер'
            },
          })}
          id='phone'
          type='text'
          mask='+7 (999) 999-99-99'
          value={phoneValue}
          onChange={handlePhoneChange}
          required
          placeholder='+7 (___) ___-__-__'
        />
        {errors?.phone && <span className={c.form__error}>{errors?.phone?.message || 'Заполните поле'}</span>}
      </label>

      <label htmlFor="deliveryAddress">
        <span className={c.form__inputTitle}>Адрес доставки<small>*</small></span>
        <input
          type="text"
          id='deliveryAddress'
          placeholder='Адрес доставки'
          {...register("deliveryAddress", {
            required: 'Заполните поле',
            maxLength: {
              value: 50,
              message: 'Сообщение слишком длинное',
            }
          })}
        />
        {errors?.deliveryAddress && <span className={c.form__error}>{errors?.deliveryAddress?.message || 'Заполните поле'}</span>}
      </label>

      <label htmlFor="deliveryTime">
        <span className={c.form__inputTitle}>Дата мероприятия<small>*</small></span>
        <input
          type="text"
          id='deliveryTime'
          placeholder='Дата мероприятия'
          {...register("deliveryTime", {
            required: 'Заполните поле',
            maxLength: {
              value: 50,
              message: 'Сообщение слишком длинное'
            }
          })}
        />
        {errors?.deliveryTime && <span className={c.form__error}>{errors?.deliveryTime?.message || 'Заполните поле'}</span>}
      </label>

      <span>* Стоимость доставки уточнит менеджер после подтверждения заказа</span>

      <label htmlFor="comment">
        <span className={c.form__inputTitle}>Комментарий</span>
        <textarea
          type="text"
          id='comment'
          placeholder='Комментарий'
          {...register("comment", {
            maxLength: {
              value: 100,
              message: 'Сообщение слишком длинное'
            }
          })}
        />
        {errors?.comment && <span className={c.form__error}>{errors?.comment?.message}</span>}
      </label>

      <label htmlFor="agreement" className={c.form__agreementLabel}>
        <input
          type="checkbox"
          id='agreement'
          {...register("agreement", {
            required: 'Необходимо подтверждение',
          }
          )}
        />
        Соглашаюсь на обработку персональных данных
        {errors?.agreement && <span className={c.form__error}>{errors?.agreement?.message || 'Необходимо подтверждение'}</span>}
      </label>

      <input type="submit" disabled={!isValid || !phoneValue || phoneValue.length < 11} />
    </form>
  )
}
