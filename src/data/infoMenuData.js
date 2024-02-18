import { TruckOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

export const infoMenuData = [
  getItem('О компании', 'aboutcompany', <HomeOutlined />, [
    getItem('Новости', 'news'),
    getItem('Сотрудничество', 'cooperation'),
    getItem('Рассылка', 'distribution'),
    getItem('О нас', 'aboutus'),
  ]),
  getItem('Клиентам', 'forclients', <UserOutlined />, [
    getItem('Политика конфиденциальности', 'confidence'),
    getItem('Пользовательское соглашение', 'agreement'),
  ]),
  getItem('Доставка и оплата', 'shipping', <TruckOutlined />, [
    getItem('СПб и ЛО', 'spbilo'), 
    getItem('Самовывоз', 'pickup'),
    getItem('Бесплатная доставка', 'freeshipping'),
    getItem('Способы оплаты', 'paymethods'),
  ]),
];
