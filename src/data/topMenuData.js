import { CaretDownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const topMenuData = [
  {
    label: 'О компании',
    key: 'aboutcompany',
    style: {
      fontSize: '15px',
      padding: '0 10px',
      },
    icon: <CaretDownOutlined />,
    children: [
      {
        label: <Link to="/info">Новости</Link>,
        key: 'news',
        style: {
          fontSize: '15px',
          },
      },
      {
        label: <Link to="/info">Сотрудничество</Link>,
        key: 'cooperation',
        style: {
          fontSize: '15px',
          },
      },
      {
        label: <Link to="/info">Рассылка</Link>,
        key: 'distribution',
        style: {
          fontSize: '15px',
          },
      },
      {
        label: <Link to="/info">О нас</Link>,
        key: 'aboutus',
        style: {
          fontSize: '15px',
          },
      },
    ]
  },
  {
    label: 'Клиентам',
    key: 'forclients',
    style: {
      fontSize: '15px',
      padding: '0 10px',
      },
    icon: <CaretDownOutlined />,
    children: [
      {
        label: <Link to="/info">Политика конфиденциальности</Link>,
        key: 'confidence',
        style: {
          fontSize: '15px',
          },
      },
      {
        label: <Link to="/info">Пользовательское соглашение</Link>,
        key: 'agreement',
        style: {
          fontSize: '15px',
          },
      },
    ]
  },
  {
    label: 'Доставка и оплата',
    key: 'shipping',
    style: {
      fontSize: '15px',
      padding: '0 10px',
      },
    icon: <CaretDownOutlined />,
    children: [
      {
        label: <Link to="/info">СПб и ЛО</Link>,
        key: 'spbilo',
        style: {
          fontSize: '15px',
          },
      },
      {
        label: <Link to="/info">Самовывоз</Link>,
        key: 'pickup',
        style: {
          fontSize: '15px',
          },
      },
      {
        label: <Link to="/info">Бесплатная доставка</Link>,
        key: 'freeshipping',
        style: {
          fontSize: '15px',
          },
      },
      {
        label: <Link to="/info">Способы оплаты</Link>,
        key: 'paymethods',
        style: {
          fontSize: '15px',
          },
      },
    ]
  },
];
