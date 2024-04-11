import c from './Header.module.scss';
import { motion } from "framer-motion"
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Affix, Badge } from 'antd';
import { HeartOutlined, UserOutlined, ShoppingCartOutlined, MobileOutlined, EnvironmentOutlined } from '@ant-design/icons';
import LOGO_IMG from '../../assets/logotext.png';
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
  
  const isDesktop = window.innerWidth >= 768;

  return (
    <motion.header 
      initial={{opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1.5, delay: 0.5 }}
      className={c.header}
    >
      <div className={c.header__topMenu}>
        <div className={`${c.headerTopMenu__container} ${c.container}`}>
          <div className={c.topMenu__menu}>
            <TopMenu />
          </div>
          <div className={c.topMenu__socials}>
            <SocialLinks />
          </div>
          <div className={c.topMenu__contacts}>
            <a  href={`tel:${personalData.phone}`}><MobileOutlined /> {personalData.phoneMasked}</a>
            <CallBackModal />
            <p><EnvironmentOutlined /> Гатчина, CПб</p>
          </div>
        </div>
      </div>
      {isDesktop ?
      <Affix>
        <div className={c.headerMain}>
          <div className={`${c.headerMain__container} ${c.container}`} ref={headerRef}>
            <LogoFull className={c.header__logo} />
            <MobileBurgerMenu />
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
          </div>
        </div>
      </Affix>
      : <div className={c.headerMain}>
      <div className={`${c.headerMain__container} ${c.container}`} ref={headerRef}>
        <Link className={c.header__logo} to={''}>
          <img src={LOGO_IMG} width={100} alt="Логотип" />
        </Link>
        <MobileBurgerMenu />
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
      </div>
    </div>
      }
    </motion.header>
  )
}
