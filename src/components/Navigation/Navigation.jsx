import { Menu } from 'antd';
import c from './Navigation.module.scss';
import { HomeOutlined, BulbOutlined, FireOutlined, PictureOutlined, LineOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import TELEGRAM_ICON from '../../assets/contacts/telegram.svg';
import CALL_ICON from '../../assets/contacts/call.svg';
import WHATSAPP_ICON from '../../assets/contacts/whatsapp.svg';

const ContactIcon = ({iconSrc}) => {
  return (
    <img 
      width={30}
      src={iconSrc}
      alt="Иконка контакта"
      style={{borderRadius: '50%', marginRight: '10px'}} />
  )
}

export const menuItems = [
  {label: <Link to={'/'}>На главную</Link>, key: 'home', icon: <HomeOutlined />},
  {label: <Link to={'/hot'}>Спецпредложения</Link>, key: 'hot', icon: <FireOutlined />},
  {label:  <Link to={'/gallery'}>Галерея работ</Link>, key: 'gallery', icon: <PictureOutlined />},
  {label: 'Услуги', key: 'services', icon: <BulbOutlined />,
    children: [
      {label: 'Украшение сцены', key: 'sceneDecor', icon: <LineOutlined />},
      {label: 'Украшение помещения', key: 'roomDecor', icon: <LineOutlined />},
    ],
  },
  // ==================Контакты===================
  {label: 'Контакты', key: 'contacts', type: 'group',
    children: [
      {label: <a href="tel:+79315401970">Позвонить по телефону</a>, key: 'phone', icon: <ContactIcon iconSrc={CALL_ICON} />},
      {label: <a href="https://t.me/trafik_manager_NL" target='_blank' rel="noreferrer">Написать в Telegram</a>, key: 'telegram', icon: <ContactIcon iconSrc={TELEGRAM_ICON} />},
      {label: <a href="#s">Написать в Whatsapp</a>, key: 'whatsapp', icon: <ContactIcon iconSrc={WHATSAPP_ICON} />},
    ],
  },
];

export const Navigation = ({ handleMenuClose }) => {
  return (
    <div className={`${c.navigation}`}>
      <Menu 
        mode="inline"
        items={menuItems}
        onClick={handleMenuClose}
        />
    </div>
  );
};
