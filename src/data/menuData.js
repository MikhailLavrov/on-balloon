import { HomeOutlined, ShoppingOutlined, FireOutlined, PictureOutlined, LineOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { contactData } from './personalData.js';
import { SvgIcon } from '../components/SvgIcon/SvgIcon.jsx';
import { assortmentData } from './assortmentData.js';

const assortmentTabs = assortmentData.map((item, index) => {
  return {
    label: item.tabName,
    key: index,
    icon: <LineOutlined />
  }
})

export const menuDataMobile = [
  {label: <Link to={'/'}>Главная </Link>, key: 'home', icon: <HomeOutlined />},
  {label: <Link to={'/hot'}>Спецпредложения</Link>, key: 'hot', icon: <FireOutlined />},
  {label: <Link to={'/gallery'}>Галерея работ</Link>, key: 'gallery', icon: <PictureOutlined />},
  {label: 'Каталог', key: 'services', icon: <ShoppingOutlined />,
    children: assortmentTabs,
  },
  // ==================Контакты===================
  {label: 'Контакты', key: 'contacts', type: 'group',
    children: [
      {label: <a href={`tel:${contactData.phone}`}>Позвонить по телефону</a>, key: 'phone', icon: <SvgIcon icon="call" />},
      {label: <a href={contactData.telegram} target='_blank' rel="noreferrer">Написать в Telegram</a>, key: 'telegram', icon: <SvgIcon icon="telegram" />},
      {label: <a href={contactData.whatsapp} target='_blank' rel="noreferrer">Написать в Whatsapp</a>, key: 'whatsapp', icon: <SvgIcon icon="whatsapp" />},
    ],
  },
];
