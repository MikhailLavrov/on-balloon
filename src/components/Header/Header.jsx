import c from './Header.module.scss';
import { useEffect, useRef } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { initFavourites } from '../../redux/favouritesSlice';
import { initShoppingCart } from '../../redux/shoppingCartSlice';

export const HeaderComponent = () => {
  const headerRef = useRef(null);
  const dispatch = useDispatch();
  const favouritesCountState = useSelector(state => state.favourites.count);
  const shoppingCartCountState = useSelector(state => state.shoppingCart.count);
  
  useEffect(() => {
    const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites')) || [];
    dispatch(initFavourites(favoritesFromStorage))
    const shoppingCartFromStorage = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    dispatch(initShoppingCart(shoppingCartFromStorage))
  }, [dispatch]);

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
            <Link to={'/favourites'} title='Перейти в избранное'>
            <Badge count={favouritesCountState}>
              <HeartOutlined style={{ fontSize: '20px' }} />
            </Badge>
              <span>Избранное</span>
            </Link>
            <Link to={'/cart'} title='Перейти в корзину'>
              <Badge count={shoppingCartCountState}>
                <ShoppingCartOutlined style={{ fontSize: '20px' }} />
              </Badge>
              <span>Корзина</span>
            </Link>
            <Link disabled style={{opacity: '0.3'}}>
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
