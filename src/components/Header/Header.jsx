import c from './Header.module.scss';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { HeartOutlined, UserOutlined, ShoppingCartOutlined, MobileOutlined, EnvironmentOutlined } from '@ant-design/icons';
import CallMeBackModal from '../CallMeBackModal/CallMeBackModal';
import CatalogLink from '../CatalogLink/CatalogLink';
import SearchComponent from '../SearchComponent/SearchComponent';
import MobileBurgerMenu from '../MobileBurgerMenu/MobileBurgerMenu';
import MobileSearch from '../MobileSearch/MobileSearch';
import { TopMenu } from '../TopMenu/TopMenu';
import { personalData } from '../../data/personalData';
import { SocialLinks } from '../SocialLinks/SocialLinks';
import LOGO_IMG from '../../assets/logo.png';
import { Badge } from 'antd';

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
            <img src={LOGO_IMG} width={100} alt="Логотип" />
          </Link>
          <CatalogLink />
          <SearchComponent className={c.searchComponent} />
          <div className={c.header__mainControls}>
            <Link>
            <Badge count={0}>
              <HeartOutlined style={{ fontSize: '20px' }} />
            </Badge>
              <span>Избранное</span>
            </Link>
            <Link>
              <Badge count={0}>
                <ShoppingCartOutlined style={{ fontSize: '20px' }} />
              </Badge>
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
