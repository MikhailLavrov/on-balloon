import { AppstoreOutlined, BulbOutlined, BuildOutlined, SmileOutlined, FireTwoTone } from '@ant-design/icons';

export const catalogMenuData = [
  {
    key: 'trend',
    label: 'В тренде',
    icon: <FireTwoTone twoToneColor="#FA3D03" />
  },
  {
    key: 'balloons',
    label: 'Воздушные шары',
    icon: <BulbOutlined />,
    children: [
      { key: 'girl', label: 'Для девочек' },
      { key: 'boy', label: 'Для мальчиков' },
      { key: 'her', label: 'Для неё' },
      { key: 'him', label: 'Для него' },
      { key: 'gender', label: 'Гендер Пати' },
      { key: 'discharging', label: 'На выписку' },
      { key: 'surprise', label: 'Коробка-сюрприз' },
      { key: 'latex', label: 'Шарики латексные' },
      { key: 'number', label: 'Цифры' },
      { key: 'heart', label: 'Звезды, круги, сердца' },
      { key: 'figure', label: 'Фигуры' },
      { key: 'additional', label: 'Дополнения к шарам' },
    ]
  },
  {
    key: 'animation',
    label: 'Аниматоры и шоу',
    icon: <SmileOutlined />,
    children: [
      { key: 'crio', label: 'Крио-шоу' },
      { key: 'bubbles', label: 'Шоу мыльных пузырей' },
      { key: 'chemical', label: 'Химическое шоу' },
    ]
  },
  {
    key: 'photozone',
    label: 'Фотозоны',
    icon: <AppstoreOutlined />,
    children: [
      { key: 'payetki', label: 'С пайетками' },
      { key: 'flowers', label: 'С цветами' },
      { key: 'ph_balloons', label: 'С шарами' },
    ]
  },
  {
    key: 'attractions',
    label: 'Аттракционы и оборудование',
    icon: <BuildOutlined />,
    children: [
      { key: 'cotton', label: 'Сладкая вата' },
      { key: 'popcorn', label: 'Попкорн' },
      { key: 'apples', label: 'Яблоки в карамели' },
      { key: 'skazka', label: 'Батут Сказка' },
      { key: 'botinok', label: 'Батут Ботинок' },
      { key: 'sport', label: 'Батут Спортивный' },
    ]
  }
];
