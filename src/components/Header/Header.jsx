import c from './Header.module.scss';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { HeartOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import Catalog from '../Catalog/Catalog';
import SearchComponent from '../SearchComponent/SearchComponent';
import MobileBurgerMenu from '../MobileBurgerMenu/MobileBurgerMenu';
import MobileSearch from '../MobileSearch/MobileSearch';
import { DownOutlined, MobileOutlined } from '@ant-design/icons';
import { Menu, ConfigProvider } from 'antd';
import { SvgIcon } from '../SvgIcon/SvgIcon';
import CallMeBack from '../CallMeBack/CallMeBack';

const topMenuItems = [
  {
    label: 'Покупателям',
    key: 'buyers',
    icon: <DownOutlined />,
    children: [
      {
        label: 'Топ ассортимента',
        key: 'top',
      },
      {
        label: 'Распродажа',
        key: 'hotsale',
      },
    ]
  },
  {
    label: 'Доставка и оплата',
    key: 'delivery',
    icon: <DownOutlined />,
    children: [
      {
        label: 'Ленинградская область',
        key: 'lo',
      },
      {
        label: 'Санкт-Петербург',
        key: 'spb',
      },
      {
        label: 'Самовывоз',
        key: 'pickup',
      },
      {
        label: 'Оплата',
        key: 'pay',
      },
    ]
  },
  {
    label: 'О компании',
    key: 'about',
    icon: <DownOutlined />,
    children: [
      {
        label: 'Новости',
        key: 'news',
      },
      {
        label: 'Сотрудничество',
        key: 'cooperation',
      },
      {
        label: 'Рассылка',
        key: 'distribution',
      },
      {
        label: 'О нас',
        key: 'aboutus',
      },
    ]
  },
];

export const HeaderComponent = () => {
  const headerRef = useRef(null);
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <header className={c.header}>
        <div className={c.header__topMenu}>
          <div className={`${c.headerTopMenu__container} ${c.container}`}>
            <div className={c.topMenu__menu}>
              <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: '#f83939',
                      lineWidth: 0,
                    },
                  }}
                >
                <Menu 
                  onClick={onClick}
                  selectedKeys={[current]}
                  mode="horizontal"
                  items={topMenuItems}
                  style={{backgroundColor: "transparent", fontSize: "10px"}}
                  />
              </ConfigProvider>
            </div>
            <div className={c.topMenu__socials}>
              <Link target = "_blank" to={'https://t.me/Nadia_Lavrova_event_design'}>
                <SvgIcon icon='telegram' />
              </Link>
              <Link target = "_blank" to={''}>
                <SvgIcon icon='whatsapp' />
              </Link>
              <Link target = "_blank" to={'https://vk.com/trendnaprazdnik'}>
                <SvgIcon icon='vk' />
              </Link>
            </div>
            <div className={c.topMenu__contacts}>
              <a href="tel:+79315401970"><MobileOutlined /> +7(931)540-19-70</a>
              <CallMeBack />
              <p>Гатчина, CПб</p>
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
