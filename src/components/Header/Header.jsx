import c from './Header.module.scss';
import { Layout } from 'antd';
import { useRef, useState } from 'react';
import { DrawerComponent } from '../Drawer/Drawer';
import { Link } from 'react-router-dom';
import { contactData } from '../../data/personalData';
import { SvgIcon } from '../SvgIcon/SvgIcon';
import { Favourites } from '../Favourites/Favourites';

const { Header } = Layout;

export const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const toggleMenu = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  };

  return (
    <Header className={c.header}>
      <div className={c.header__container} ref={headerRef}>
        <div className={c.header__logo}>
          <Link className={c.header__logoLink} to={''}>
            <SvgIcon icon='logo' />
            Гатчинские шары
          </Link>
        </div>
        <Favourites headerRef={headerRef} />
        <div className={c.header__content}>
          <a className={c.header__contentLink} href={`tel:${contactData.phone}`} title='Позвонить по телефону'>
            <SvgIcon icon='call' />
            <span>+7 (931) 540 1970</span>
          </a>
          <a className={c.header__contentLink} href={contactData.telegram} target='_blank' rel="noreferrer" title='Написать в Telegram'>
            <SvgIcon icon='telegram' />
          </a>
          <a className={c.header__contentLink} href={contactData.whatsapp} target='_blank' rel="noreferrer" title='Написать в WhatsApp'>
            <SvgIcon icon='whatsapp' />
          </a>
        </div>
        {menuOpen && <DrawerComponent open={menuOpen} toggleMenu={toggleMenu} />}
        <div className={c.header__menuWrapper}>
          <button 
            className={`${c.header__menuButton} ${menuOpen ? c.open : ''}`}
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
