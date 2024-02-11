import c from './Header.module.scss';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
// import { contactData } from '../../data/personalData';
// import { SvgIcon } from '../SvgIcon/SvgIcon';
// import { Favourites } from '../Favourites/Favourites';
import { HeartOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import Catalog from '../Catalog/Catalog';
import SearchComponent from '../SearchComponent/SearchComponent';
import MobileBurgerMenu from '../MobileBurgerMenu/MobileBurgerMenu';
import MobileSearch from '../MobileSearch/MobileSearch';

// const { Header } = Layout;

export const HeaderComponent = () => {
  const headerRef = useRef(null);

  return (
    <header className={c.header}>
      <div className={c.header__container} ref={headerRef}>
        <MobileBurgerMenu />
        <Link className={c.header__logoLink} to={''}>
          {/* <SvgIcon icon='logo' /> */}
          Тренд на праздник
        </Link>
        <Catalog />
        <SearchComponent />
        <div className={c.header__mainControls}>
          <Link>
            <UserOutlined style={{ fontSize: '1.7rem' }} />
            <span>Войти</span>
          </Link>
          <Link>
            <HeartOutlined style={{ fontSize: '1.7rem' }} />
            <span>Избранное</span>
          </Link>
          <Link>
            <ShoppingCartOutlined style={{ fontSize: '1.7rem' }} />
            <span>Корзина</span>
          </Link>
        </div>
        <div className={c.header__searchMobile}>
        <MobileSearch />
        </div>
      </div>
    </header>
  )
}
