import c from './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Affix, Badge } from 'antd';
import { HeartOutlined, UserOutlined, ShoppingCartOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { CallBackModal } from '../CallBackModal/CallBackModal';
import { CatalogLink } from '../CatalogLink/CatalogLink';
import { SearchComponent } from '../SearchComponent/SearchComponent';
import { MobileBurgerMenu } from '../MobileBurgerMenu/MobileBurgerMenu';
import { TopMenu } from '../TopMenu/TopMenu';
import { personalData } from '../../data/personalData';
import { SocialLinks } from '../SocialLinks/SocialLinks';
import { initFavourites } from '../../redux/favouritesSlice';
import { initShoppingCart } from '../../redux/shoppingCartSlice';
import { LogoFull } from './../Logo/LogoFull';

export const HeaderComponent = () => {
  const headerRef = useRef(null);
  const favouritesCountState = useSelector(state => state.favourites.count);
  const shoppingCartCountState = useSelector(state => state.shoppingCart.count);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites')) || [];
    dispatch(initFavourites(favoritesFromStorage))
    const shoppingCartFromStorage = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    dispatch(initShoppingCart(shoppingCartFromStorage))
  }, [dispatch]);
  
  const isDesktop = window.innerWidth >= 1260;

  return (
    <header className={c.header}>
      <div className={c.headerTop}>
        <div className={`${c.headerTop__container} container`}>
          <TopMenu />
          <div className={c.headerTop__socials}>
            <SocialLinks />
          </div>
          <div className={c.headerTop__contacts}>
            <a className={c.headerTop__contactsPhone} href={`tel:${personalData.phone}`}>{personalData.phoneMasked}</a>
            <CallBackModal />
            <p><EnvironmentOutlined /> Гатчина, CПб</p>
          </div>
        </div>
      </div>
      {isDesktop ?
      <Affix>
        <div className={c.headerBottom}>
          <div className={`${c.headerBottom__container} container`} ref={headerRef}>
            <LogoFull linkClassName={c.headerBottom__logoLink} imageClassName={c.headerBottom__logoImage} />
            <CatalogLink />
            <SearchComponent className={c.headerBottom__searchComponent} />
            <div className={c.headerBottom__mainControls}>
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
          </div>
        </div>
      </Affix>
      : <div className={c.headerBottom}>
      <div className={`${c.headerBottom__container} container`} ref={headerRef}>
        <LogoFull linkClassName={c.headerBottom__logoLink} imageClassName={c.headerBottom__logoImage} />
        <MobileBurgerMenu />
      </div>
    </div>
      }
    </header>
  )
}
