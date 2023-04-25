import c from './CoopOffer.module.scss';
import CALL_ICON from '../../assets/contacts/call.svg';
import TELEGRAM_ICON from '../../assets/contacts/telegram.svg';
import MESSAGE_ICON from '../../assets/contacts/message.svg';
import WHATSAPP_ICON from '../../assets/contacts/whatsapp.svg';
import { Popover } from 'antd';
import { useState, useEffect, useRef } from 'react';

export const CoopOffer = () => {
  const [open, setOpen] = useState(false);
  const popoverRef = useRef(null);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  useEffect(() => {
    const handleScroll = (event) => {
      if (open && popoverRef.current && !popoverRef.current.contains(event.target)) {
        hide();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [open]);

  const MessageChoose = () => {
    return (
      <div className={c.messageChoose} ref={popoverRef}>
        <a className={c.offer__link} href="https://t.me/trafik_manager_NL" target='_blank' rel="noreferrer" title='Написать в Telegram'>
          <img width={50} src={TELEGRAM_ICON} alt="Telegram" />
        </a>
        <a className={c.offer__link} href="https://api.whatsapp.com/send?phone=79315401970" target='_blank' rel="noreferrer" title='Написать в WhatsApp'>
          <img width={50} src={WHATSAPP_ICON} alt="WhatsApp" />
        </a>
      </div>
    )
  }
  
  return (
    <section className={c.offer}>
      <div className='container'>
        <h2 className={c.offer__title}>Нужно уникальное оформление?</h2>
        <p className={c.offer__text}>Свяжитесь с нами.<br /> Подберем уникальный набор шаров для украшения вашего мероприятия: <br />любого цвета, формы и размера.</p>
        <div className={c.offer__links}>
          <Popover
            content={<MessageChoose />}
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
          >
            <button className={`${c.offer__link} ${c.message}`} type="button">
              <img width={50} src={MESSAGE_ICON} alt="Написать сообщение" />
              Написать
            </button>
          </Popover>
          <a className={`${c.offer__link} ${c.call}`} href="tel:+79315401970" title='Позвонить по телефону'>
            <img width={50} src={CALL_ICON} alt="call" />
            Позвонить
          </a>
        </div>
      </div>
    </section>
  )
}
