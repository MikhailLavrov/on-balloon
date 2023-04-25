import c from './Header.module.scss';
import { Layout } from 'antd';
import LOGO_ICON from '../../assets/logo.svg';
import TELEGRAM_ICON from '../../assets/contacts/telegram.svg';
import WHATSAPP_ICON from '../../assets/contacts/whatsapp.svg';
import CALL_ICON from '../../assets/contacts/call.svg';
import { useState } from 'react';
import { DrawerComponent } from '../Drawer/Drawer';
import { Link } from 'react-router-dom';

const { Header } = Layout;

export const HeaderComponent = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <Header className={c.header}>
      <div className={c.header__container}>
        <div className={c.header__logo}>
          <Link className={c.header__logoLink} to={''}>
            <img width={50} src={LOGO_ICON} alt="logo" />
            Гатчинские шары
          </Link>
        </div>
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
        {open && <DrawerComponent open={open} toggleMenu={toggleMenu} />}
        <div className={c.header__menuWrapper}>
          <button 
            className={`${c.header__menuButton} ${open ? c.open : ''}`}
            onClick={toggleMenu} 
            type='button'
            >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={c.menu__border}></div>
          <div className={c.svg_container}>
            <svg viewBox="0 0 202.9 45.5" >
              <clipPath id="menu" clipPathUnits="objectBoundingBox" transform="scale(0.0049285362247413 0.021978021978022)">
                <path  d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
                  c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
                  c9.2,3.6,17.6,4.2,23.3,4H6.7z"/>
              </clipPath>
            </svg>
          </div>
        </div>
      </div>
    </Header>
  )
}
