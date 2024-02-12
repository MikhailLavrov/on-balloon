import c from './Header.module.scss';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { HeartOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import Catalog from '../Catalog/Catalog';
import SearchComponent from '../SearchComponent/SearchComponent';
import MobileBurgerMenu from '../MobileBurgerMenu/MobileBurgerMenu';
import MobileSearch from '../MobileSearch/MobileSearch';

export const HeaderComponent = () => {
  const headerRef = useRef(null);

  return (
    <header className={c.header}>
      <div className={`${c.header__container} ${c.container}`} ref={headerRef}>
        <div className={c.header__topMenu}>

        </div>
        <div className={c.headerMain}>
          <MobileBurgerMenu />
          <Link className={c.header__logo} to={''}>
            Тренд на праздник
          </Link>
          <Catalog />
          <SearchComponent className={c.searchComponent} />
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
          <MobileSearch />
        </div>
      </div>
    </header>
  )
}
