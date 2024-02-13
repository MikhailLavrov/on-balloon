import c from './Header.module.scss';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { HeartOutlined, UserOutlined, ShoppingCartOutlined, MobileOutlined, EnvironmentOutlined } from '@ant-design/icons';
import CallMeBackModal from '../CallMeBackModal/CallMeBackModal';
import Catalog from '../Catalog/Catalog';
import SearchComponent from '../SearchComponent/SearchComponent';
import MobileBurgerMenu from '../MobileBurgerMenu/MobileBurgerMenu';
import MobileSearch from '../MobileSearch/MobileSearch';
import { TopMenu } from '../TopMenu/TopMenu';
import { personalData } from '../../data/personalData';
import { SocialLinks } from '../SocialLinks/SocialLinks';

export const HeaderComponent = () => {
  const headerRef = useRef(null);

  return (
    <header className={c.header}>
        <div className={c.header__topMenu}>
          <div className={`${c.headerTopMenu__container} ${c.container}`}>
            <div className={c.topMenu__menu}>
              <TopMenu />
            </div>
            <div className={c.topMenu__socials}>
              <SocialLinks />
            </div>
            <div className={c.topMenu__contacts}>
              <a  href={`tel:${personalData.phone}`}><MobileOutlined />{personalData.phone}</a>
              <CallMeBackModal />
              <p><EnvironmentOutlined /> Гатчина, CПб</p>
            </div>
          </div>
        </div>
        <div className={c.headerMain}>
         <div className={`${c.headerMain__container} ${c.container}`} ref={headerRef}>
          <MobileBurgerMenu />
          <Link className={c.header__logo} to={''}>
            Тренд на праздник
          </Link>
          <Catalog />
          <SearchComponent className={c.searchComponent} />
          <div className={c.header__mainControls}>
            <Link>
              <HeartOutlined style={{ fontSize: '20px' }} />
              <span>Избранное</span>
            </Link>
            <Link>
              <ShoppingCartOutlined style={{ fontSize: '20px' }} />
              <span>Корзина</span>
            </Link>
            <Link>
              <UserOutlined style={{ fontSize: '20px' }} />
              <span>Войти</span>
            </Link>
          </div>
          <MobileSearch />
        </div>
      </div>
    </header>
  )
}
