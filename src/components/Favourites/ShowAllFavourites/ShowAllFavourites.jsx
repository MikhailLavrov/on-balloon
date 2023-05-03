import c from './ShowAllFavourites.module.scss';
import { Image, Modal } from 'antd';
import { useState } from 'react';
import { contactData } from '../../../data/personalData';
import { MaskedPhoneInput } from '../../../utils/MaskedPhoneInput';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

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

  const favouriteItems = favourites.map((item, index) => {
    const {iconurl, key, label, price, unit} = item;
    return (
      <div className={c.favouriteItem} key={key}>
        <div className={c.favouriteItem__visual}>
          <Image src={iconurl} />
          <div className={c.favouriteItem__countButtons}>
            <button onClick={() => counts[index] > 1 ? handleDecrement(index) : 1}><MinusOutlined /></button>
            <span>{counts[index]}</span>
            <button onClick={() => counts[index] < 20 ? handleIncrement(index) : 20}><PlusOutlined /></button>
          </div>
        </div>
        <div className={c.favouriteItem__content}>
          <h3 className={c.favouriteItem__label}>{label}</h3>
          <p className={c.favouriteItem__price}>{price}&nbsp;р.&nbsp;/&nbsp;{unit}</p>
          <div className={c.favouriteItem__totalCount}>
            <p>Итого: {+counts[index] * +price}&nbsp;р. за&nbsp;{counts[index]}&nbsp;{unit}</p>
          </div>
        </div>
      </div>
    );
  });

  const showModal = () => {
    setDropdownOpen(false)
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const modalFooter = (
    <div key={121}>
      <div>
        <p>Всего в избранном {favourites.length} позиции на общую сумму {totalPrice} р.</p>
      </div>
      <iframe name="hidden_iframe" id="hidden_iframe" title='gFormIframe' style={{display: 'none'}} 
        onLoad={() => {}} >
      </iframe>
      <form 
        action={contactData.gForms.action}
        method="post" 
        target="hidden_iframe"
        onSubmit={handleOk}
        >
        <fieldset>
          <label htmlFor="name">Имя</label>
          <input name={contactData.gForms.nameEntry} id='name' type="text" required maxLength={50} placeholder='Ваше имя' />
          <label htmlFor='phone'>Телефон</label>
          <MaskedPhoneInput />
        </fieldset>
        <fieldset>

        </fieldset>
        <input type="submit" value="Отправить данные" />
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
        {favouriteItems}
      </Modal>
    </div>
  );
};
