import c from './Header.module.scss';
import { Button } from 'antd';
import { useRef, useState } from 'react';
import { DrawerComponent } from '../MobileBurgerMenu/MobileBurgerMenu';
import { Link } from 'react-router-dom';
import { contactData } from '../../data/personalData';
import { SvgIcon } from '../SvgIcon/SvgIcon';
// import { Favourites } from '../Favourites/Favourites';
import { SearchOutlined, MenuOutlined } from '@ant-design/icons';

// const { Header } = Layout;

export const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const toggleMenu = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  };

  return (
    <header className={c.header}>
      <div className={c.header__container} ref={headerRef}>
        {menuOpen && <DrawerComponent open={menuOpen} toggleMenu={toggleMenu} />}
        <div className={c.header__menuWrapper}>
          <Button 
            className={`${c.header__menuButton} ${menuOpen ? c.open : ''}`}
            onClick={toggleMenu} 
            type='button'
            icon={<MenuOutlined />}
            >
          </Button>
        </div>
        <Link className={c.header__logoLink} to={''}>
          {/* <SvgIcon icon='logo' /> */}
          Тренд на праздник
        </Link>
        {/* <Favourites headerRef={headerRef} /> */}
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
        <Button type="button" icon={<SearchOutlined />} />
      </div>
    </header>
  )
}
