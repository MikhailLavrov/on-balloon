import { CaretDownOutlined } from '@ant-design/icons';

export const topMenuData = [
  {
    label: 'Клиентам',
    key: 'clients',
    style: {
      fontSize: '15px',
      padding: '0 10px',
      },
    icon: <CaretDownOutlined />,
    children: [
      {
        label: 'Политика конфиденциальности',
        key: 'confidence',
        style: {
          fontSize: '15px',
          },
      },
      {
        label: 'Пользовательское соглашение',
        key: 'agreement',
        style: {
          fontSize: '15px',
          },
      },
    ]
  },
  {
    label: 'Доставка и оплата',
    key: 'delivery',
    style: {
      fontSize: '15px',
      padding: '0 10px',
      },
    icon: <CaretDownOutlined />,
    children: [
      {
        label: 'СПб и ЛО',
        key: 'spblo',
        style: {
          fontSize: '15px',
          },
      },
      {
        label: 'Самовывоз',
        key: 'pickup',
        style: {
          fontSize: '15px',
          },
      },
      {
        label: 'Условия бесплатной доставки',
        key: 'freedelivery',
        style: {
          fontSize: '15px',
          },
      },
      {
        label: 'Способы оплаты',
        key: 'payment',
        style: {
          fontSize: '15px',
          },
      },
    ]
  },
  {
    label: 'О компании',
    key: 'about',
    style: {
      fontSize: '15px',
      padding: '0 10px',
      },
    icon: <CaretDownOutlined />,
    children: [
      {
        label: 'Новости',
        key: 'news',
        style: {
          fontSize: '15px',
          },
      },
      {
        label: 'Сотрудничество',
        key: 'cooperation',
        style: {
          fontSize: '15px',
          },
      },
      {
        label: 'Рассылка',
        key: 'distribution',
        style: {
          fontSize: '15px',
          },
      },
      {
        label: 'О нас',
        key: 'aboutus',
        style: {
          fontSize: '15px',
          },
      },
    ]
  },
];
