import { HomeOutlined, BulbOutlined, FireOutlined, PictureOutlined, LineOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { contactData } from './contactData.js';
import { SvgIcon } from '../components/SvgIcon/SvgIcon.jsx';

export const menuData = [
  {label: <Link to={'/'}>На главную</Link>, key: 'home', icon: <HomeOutlined />},
  {label: <Link to={'/hot'}>Спецпредложения</Link>, key: 'hot', icon: <FireOutlined />},
  {label: <Link to={'/gallery'}>Галерея работ</Link>, key: 'gallery', icon: <PictureOutlined />},
  {label: 'Услуги', key: 'services', icon: <BulbOutlined />,
    children: [
      {label: 'Украшение сцены', key: 'sceneDecor', icon: <LineOutlined />},
      {label: 'Украшение помещения', key: 'roomDecor', icon: <LineOutlined />},
    ],
  },
  // ==================Контакты===================
  {label: 'Контакты', key: 'contacts', type: 'group',
    children: [
      {label: <a href={`tel:${contactData.phone}`}>Позвонить по телефону</a>, key: 'phone', icon: <SvgIcon icon="telegram" />},
      {label: <a href={contactData.telegram} target='_blank' rel="noreferrer">Написать в Telegram</a>, key: 'telegram', icon: <SvgIcon icon="call" />},
      {label: <a href={contactData.whatsapp} target='_blank' rel="noreferrer">Написать в Whatsapp</a>, key: 'whatsapp', icon: <SvgIcon icon="whatsapp" />},
    ],
  },
];
