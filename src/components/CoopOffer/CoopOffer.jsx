import c from './CoopOffer.module.scss';
import { Popover } from 'antd';
import { useState, useEffect, useRef } from 'react';
import { contactData } from '../../data/contactData';
import { SvgIcon } from '../SvgIcon/SvgIcon';

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
        <a className={`${c.offer__link} ${c.outer}`} href={contactData.telegram} target='_blank' rel="noreferrer" title='Написать в Telegram'>
          <SvgIcon icon='telegram' />
        </a>
        <a className={`${c.offer__link} ${c.outer}`} href={contactData.whatsapp} target='_blank' rel="noreferrer" title='Написать в WhatsApp'>
          <SvgIcon icon='whatsapp' />
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
              <SvgIcon icon='message' />
              Написать
            </button>
          </Popover>
          <a className={`${c.offer__link} ${c.call}`} href={`tel:${contactData.phone}`} title='Позвонить по телефону'>
            <SvgIcon icon='call' />
            Позвонить
          </a>
        </div>
      </div>
    </section>
  )
}
