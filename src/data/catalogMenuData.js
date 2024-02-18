import { AppstoreOutlined, BulbOutlined, BuildOutlined, SmileOutlined, FireFilled } from '@ant-design/icons';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

export const catalogMenuData = [
  getItem('Супер акция', 'hot', <FireFilled style={{color: 'red'}} />),
  {
    type: 'divider',
  },
  getItem('Воздушные шары', 'balloons', <BulbOutlined />, [
    getItem('14 февраля', 'b_valentine'),
    getItem('Для него', 'b_forhim'),
    getItem('Гендер-пати', 'b_genderparty'),
    getItem('Скидки, Акции', 'b_sale'),
    getItem('Готовые наборы шаров', 'b_ready'),
    getItem('Шары с рисунком и без', 'b_picture'),
    getItem('Фигуры, цифры', 'b_figure'),
    getItem('Готовые фотозоны', 'b_photozone'),
    getItem('Гирлянды, арки, стойки', 'b_girland'),
  ]),
  getItem('Фотозоны', 'photozone', <AppstoreOutlined />, [
    getItem('С пайетками', 'ph_payetki'),
    getItem('С цветами', 'ph_flowers'),
    getItem('С шарами', 'ph_balloons'),
  ]),
  getItem('Аниматоры и шоу', 'animation', <SmileOutlined />, [
    getItem('Крио-шоу', 'an_crio'), 
    getItem('Шоу мыльных пузырей', 'an_bubbles'),
    getItem('Химическое шоу', 'an_chemical'),
  ]),
  getItem('Аттракционы и оборудование', 'attractions', <BuildOutlined />, [
    getItem('Аттракционы', 'attr', null, 
      [getItem('Батут Сказка', 'at_skazka'), 
      getItem('Батут Ботинок', 'at_botinok'),
      getItem('Батут Спортивный', 'at_sport'),
    ]),
    getItem('Оборудование в аренду', 'equipment', null,
      [getItem('Сладкая вата', 'at_cotton'),
      getItem('Попкорн', 'at_popcorn'),
      getItem('Яблоки в карамели', 'at_apples'),
    ]),
  ]),
];
