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
            Латексный дизайн
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
        </div>
      </div>
    </Header>
  )
}
