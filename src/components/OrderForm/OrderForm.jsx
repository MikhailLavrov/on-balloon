import { useDispatch, useSelector } from 'react-redux';
import ReactInputMask from 'react-input-mask';
import { useForm } from 'react-hook-form';
import { deleteAllItemsFromShoppingCart } from '../../redux/shoppingCartSlice';
import { sendOrder } from '../../utils/SendOrder';
import { useMemo, useState } from 'react';
import c from './OrderForm.module.scss';

export const OrderForm = ({setOrderSuccess}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const dispatch = useDispatch();
  const shoppingCartState = useSelector(state => state.shoppingCart.items)
  const [phoneValue, setPhoneValue] = useState('');

  const handlePhoneChange = (event) => {
    setPhoneValue(event.target.value.replace(/\D/g, ''));
  };

  // Получение общей стоимости и скидки
  const [totalPrice, totalDiscount] = useMemo(() => {
    let totalPrice = 0;
    let totalDiscount = 0;
    shoppingCartState.forEach(item => {
      totalPrice += item.count * (item.oldPrice || item.price);
      if (item.oldPrice) {
        totalDiscount += (item.oldPrice - item.price) * item.count;
      }
    });
    return [totalPrice, totalDiscount];
  }, [shoppingCartState]);

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
      message += `Цена: ${(item.oldPrice || item.price).toLocaleString('ru-RU')} руб.\n`;
      message += `Количество: ${item.count}\n\n`;
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
    
    sendOrder({message: message});
    clearShoppingCart();

    setOrderSuccess && setOrderSuccess(true);
  };

  const nameValue = watch("name");
  const agreementValue = watch("agreement");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={c.form}
    >
      <label htmlFor="name">
        <span className={c.form__inputTitle}>Ваше имя<small>*</small></span>
        <input 
          type="text"
          id='name'
          placeholder='Ваше имя'
          {...register("name", { required: true, maxLength: 20 })}
        />
        {errors?.name && <span className={c.form__error}>Заполните поле</span>}
      </label>
    
      <label htmlFor="phone">
        <span className={c.form__inputTitle}>Телефон<small>*</small></span>
        <ReactInputMask
          {...register("phone", { required: true, minLength: 11 })}
          type='text'
          mask='+7 (999) 999-99-99'
          value={phoneValue}
          onChange={handlePhoneChange}
          required
          placeholder='+7 (___) ___-__-__'
        />
        {errors?.phone && <span className={c.form__error}>Заполните поле</span>}
      </label>
      
      <label htmlFor="deliveryAddress">
        <span className={c.form__inputTitle}>Адрес доставки<small>*</small></span>
        <input 
          type="text"
          id='deliveryAddress'
          placeholder='Адрес доставки'
          {...register("deliveryAddress", { required: true, maxLength: 50 })} 
        />
        {errors?.deliveryAddress && <span className={c.form__error}>Заполните поле</span>}
      </label>
      
      <label htmlFor="deliveryTime">
        <span className={c.form__inputTitle}>Дата мероприятия<small>*</small></span>
        <input 
          type="text"
          id='deliveryTime'
          placeholder='Дата мероприятия'
          {...register("deliveryTime", { required: true, maxLength: 20 })} 
        />
        {errors?.deliveryTime && <span className={c.form__error}>Заполните поле</span>}
      </label>
      
      <span>* Стоимость доставки уточнит менеджер после подтверждения заказа</span>
      
      <label htmlFor="comment">
        <span className={c.form__inputTitle}>Комментарий</span>
        <textarea 
          type="text"
          id='comment'
          placeholder='Комментарий'
          {...register("comment", {maxLength: 100})} 
        />
      </label>
      
      <label htmlFor="agreement" className={c.form__agreementLabel}>
        <input 
          type="checkbox"
          id='agreement'
          {...register("agreement", { required: true })} 
        />
        Соглашаюсь на обработку персональных данных
        {errors?.name && <span className={c.form__error}>Необходимо подтверждение</span>}
      </label>

      <input
        type="submit"
        disabled={!phoneValue || phoneValue.length < 11 || !nameValue || nameValue.length < 2 || !agreementValue}
      />
    </form>
  )
}
