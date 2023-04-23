import c from './Header.module.scss';
import { Layout } from 'antd';
import LOGO_ICON from '../../assets/logo.svg';
import TELEGRAM_ICON from '../../assets/contacts/telegram.svg';
import WHATSAPP_ICON from '../../assets/contacts/whatsapp.svg';
import CALL_ICON from '../../assets/contacts/call.svg';
import { useState } from 'react';
import { Navigation } from '../Navigation/Navigation'; // новый компонент

const { Header } = Layout;

export const HeaderComponent = () => {
  const [open, setOpen] = useState(false);

  const showMenu = () => {
    setOpen(!open);
    !document.body.classList.contains('no-scroll') 
      ? document.body.classList.add('no-scroll') 
      : document.body.classList.remove('no-scroll');
  };  

  const handleMenuClose = () => {
    setOpen(false);
    if (document.body.classList.contains('no-scroll')) {
      document.body.classList.remove('no-scroll');
    }
  };

  return (
    <Header className={c.header}>
      <div className={c.header__container}>
        <div className={c.header__logo}>
          <a className={c.header__logoLink} href="#a">
            <img width={50} src={LOGO_ICON} alt="logo" />
            ШАР НАШ
          </a>
        </div>
        <button 
          className={`${c.header__menuButton} ${open ? c.open : ''}`}
          onClick={showMenu} 
          type='button'
          >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/*  */}

        <div className={c.header__content}>
          <a className={c.header__contentLink} href="tel:+79315401970" title='Позвонить по телефону'>
            <img width={50} src={CALL_ICON} alt="call" />
            <span>+7 (931) 540 1970</span>
          </a>
          <a className={c.header__contentLink} href="https://t.me/trafik_manager_NL" target='_blank' rel="noreferrer" title='Написать в Telegram'>
            <img width={50} src={TELEGRAM_ICON} alt="Telegram" />
          </a>
          <a className={c.header__contentLink} href="https://api.whatsapp.com/send?phone=79315401970" target='_blank' rel="noreferrer" title='Написать в WhatsApp'>
            <img width={50} src={WHATSAPP_ICON} alt="WhatsApp" />
          </a>
        </div>
        {open && <Navigation open={open} handleMenuClose={handleMenuClose} />}
      </div>
    </Header>
  )
}
