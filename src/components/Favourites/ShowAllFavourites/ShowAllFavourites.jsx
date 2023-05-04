import c from './ShowAllFavourites.module.scss';
import { Image, Modal } from 'antd';
import { useState } from 'react';
import { contactData } from '../../../data/personalData';
import { MaskedPhoneInput } from '../../../utils/MaskedPhoneInput';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { SmileOutlined } from '@ant-design/icons';
import { notification } from 'antd';
  
const openNotification = () => {
  notification.open({
    message: 'Информация отправлена',
    description: 'Мы свяжемся с Вами в ближайшее время.',
    icon: (
      <SmileOutlined
        style={{
          color: '#108ee9',
        }}
      />
    ),
  });
};

export const ShowAllFavourites = ({ favourites, setDropdownOpen }) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [counts, setCounts] = useState(favourites.map(() => 1));

  const totalAmount = favourites.reduce((total, item, index) => {
    return total + (counts[index] * parseFloat(item.price));
  }, 0);
  const [totalPrice, setTotalPrice] = useState(totalAmount);
  
  const handleDecrement = (index) => {
    if (counts[index] > 1) {
      const newCounts = [...counts];
      newCounts[index] -= 1;
      setCounts(newCounts);
      setTotalPrice(prevPrice => prevPrice - favourites[index].price);
    }
  };

  const handleIncrement = (index) => {
    if (counts[index] < 20) {
      const newCounts = [...counts];
      newCounts[index] += 1;
      setCounts(newCounts);
      setTotalPrice(prevPrice => prevPrice + favourites[index].price);
    }
  };

  const showModal = () => {
    setDropdownOpen(false)
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      openNotification();
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const modalItems = favourites.map((item, index) => {
    const {iconurl, key, label, price, unit} = item;
    
    const totalItemPrice = +counts[index] * +price;
    const totalItemAmount = counts[index];

    return (
      <div className={c.favouriteItem} key={key}>
        <div className={c.favouriteItem__visual}>
          <Image src={iconurl} />
          <div className={c.favouriteItem__countButtons}>
            <button onClick={() => totalItemAmount > 1 ? handleDecrement(index) : 1}><MinusOutlined /></button>
            <span>{totalItemAmount}</span>
            <button onClick={() => totalItemAmount < 20 ? handleIncrement(index) : 20}><PlusOutlined /></button>
          </div>
        </div>
        <div className={c.favouriteItem__content}>
          <h3 className={c.favouriteItem__label}>{label}</h3>
          <p className={c.favouriteItem__price}>{price}&nbsp;р.&nbsp;/&nbsp;{unit}</p>
          <div className={c.favouriteItem__totalCount}>
            <p>Итого: {totalItemPrice}&nbsp;р. за&nbsp;{totalItemAmount}&nbsp;{unit}</p>
          </div>
        </div>
      </div>
    );
  });
  
  const modalFooter = (
    <div className={c.modalFooter} key={9999}>
      <h3 className={c.modalFooter__title}>Всего в&nbsp;избранном {favourites.length} позиции на&nbsp;общую сумму {totalPrice}&nbsp;р.</h3>
      <iframe name="hidden_iframe" id="hidden_iframe" title='gFormIframe' style={{display: 'none'}} 
        onLoad={() => {}} >
      </iframe>
      <form
        className={c.modalFooter__form}
        action={contactData.gFormsFavourites.action}
        method="post" 
        target="hidden_iframe"
        onSubmit={handleOk}
        >
        <fieldset className={c.modalFooter__fieldset}>
          <label className='visually-hidden' htmlFor="name">Имя</label>
          <input name={contactData.gFormsFavourites.nameEntry} id='name' type="text" required maxLength={50} minLength={2} placeholder='Ваше имя' />
          <label className='visually-hidden' htmlFor='phone'>Телефон</label>
          <MaskedPhoneInput phoneEntry={contactData.gFormsFavourites.phoneEntry} />
        </fieldset>
        <fieldset className='visually-hidden'>
          {favourites.map((item, index) => {
            const {key, label, price, unit} = item;
            
            const totalItemPrice = +counts[index] * +price;
            const totalItemAmount = counts[index];

            return (
              <div key={key}>
                <label className='visually-hidden' htmlFor="good">Товар</label>
                <input name={contactData.gFormsFavourites.goodEntry} value={label} id='good' type="text" readOnly ></input>
                <label className='visually-hidden' htmlFor="goodPrice">Цена за ед.</label>
                <input name={contactData.gFormsFavourites.goodPriceEntry} value={`${price} р.`} id='goodPrice' type="text" readOnly />
                <label className='visually-hidden' htmlFor="goodTotalAmount">Количество</label>
                <input name={contactData.gFormsFavourites.goodTotalAmountEntry} value={`${totalItemAmount} ${unit}.`} id='goodTotalAmount' type="text" readOnly />
                <label className='visually-hidden' htmlFor="goodTotalPrice">Сумма</label>
                <input name={contactData.gFormsFavourites.goodTotalPriceEntry} value={`${totalItemPrice} р.`} id='goodTotalPrice' type="text" readOnly />
              </div>
            )
          })}
          <label className='visually-hidden' htmlFor="superTotalPrice">Итоговая общая стоимость</label>
          <input name={contactData.gFormsFavourites.superTotalPriceEntry} value={`${totalPrice} р.`} id='superTotalPrice' type="text" readOnly />
        </fieldset>
        <input className={c.modalFooter__formSubmit} type="submit" value="Отправить данные" disabled={confirmLoading} />
      </form>
    </div>
  )

  return (
    <div className={c.showFavourites} >
      <button className={c.showFavourites__button} type="button" onClick={showModal}>
        Показать все ({favourites.length})
      </button>
      <Modal
        className={c.showFavourites__modal}
        title="Избранное"
        open={open}
        okText='Отправить'
        onOk={handleOk}
        confirmLoading={confirmLoading}
        cancelText='Удалить все'
        onCancel={handleCancel}
        zIndex='1001'
        footer={[modalFooter]}
      >
        {modalItems}
      </Modal>
    </div>
  );
};
