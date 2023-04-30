import c from './Header.module.scss';
import { Layout, Badge, Dropdown } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { DrawerComponent } from '../Drawer/Drawer';
import { Link } from 'react-router-dom';
import { contactData } from '../../data/personalData';
import { SvgIcon } from '../SvgIcon/SvgIcon';
import { HeartOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux'

const { Header } = Layout;

const dropdownMenu = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    ),
    icon: <HeartOutlined />,
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item',
  },
];

export const HeaderComponent = () => {
  const favourites = useSelector(state => state.favourites)
  const dispatch = useDispatch()
  
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const dropdownHide = () => {
    setDropdownOpen(false);
  };
  
  const handleDropdownOpenChange = (newOpen) => {
    setDropdownOpen(newOpen);
  };
  
  useEffect(() => {
    const handleScroll = (event) => {
      if (dropdownOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dropdownHide();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dropdownOpen]);

  return (
    <Header className={c.header}>
      <div className={c.header__container} ref={dropdownRef}>
        <div className={c.header__logo}>
          <Link className={c.header__logoLink} to={''}>
            <SvgIcon icon='logo' />
            Гатчинские шары
          </Link>
        </div>
        <Dropdown 
          menu={{ items: dropdownMenu }}
          placement="bottomRight"
          trigger={['click']}
          open={dropdownOpen}
          onOpenChange={handleDropdownOpenChange}
          arrow
          >
          <a className={c.header__favourites} title='Избранное'>
            <Badge count={favourites.length}>
              <HeartOutlined />
            </Badge>
          </a>
        </Dropdown>
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
        {open && <DrawerComponent open={open} toggleMenu={toggleMenu} />}
        <div className={c.header__menuWrapper}>
          <button 
            className={`${c.header__menuButton} ${open ? c.open : ''}`}
            onClick={toggleMenu} 
            type='button'
            >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={c.menu__border}></div>
          <div className={c.svg_container}>
            <svg viewBox="0 0 202.9 45.5" >
              <clipPath id="menu" clipPathUnits="objectBoundingBox" transform="scale(0.0049285362247413 0.021978021978022)">
                <path  d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
                  c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
                  c9.2,3.6,17.6,4.2,23.3,4H6.7z"/>
              </clipPath>
            </svg>
          </div>
        </div>
      </div>
    </Header>
  )
}
