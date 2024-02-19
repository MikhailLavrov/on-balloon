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
  getItem('Воздушные шары', 'balloons', <BulbOutlined />, [
    getItem('Для девочек', 'girl'),
    getItem('Для мальчиков', 'boy'),
    getItem('Для неё', 'her'),
    getItem('Для него', 'him'),
    getItem('Гендер Пати', 'gender'),
    getItem('На выписку', 'discharging'),
    getItem('Коробка-сюрприз', 'surprise'),
    getItem('Шарики латексные', 'latex'),
    getItem('Цифры', 'number'),
    getItem('Звезды, круги, сердца', 'heart'),
    getItem('Фигуры', 'figure'),
    getItem('Дополнения к шарам', 'additional'),
  ]),
  getItem('Аниматоры и шоу', 'animation', <SmileOutlined />, [
    getItem('Крио-шоу', 'an_crio'), 
    getItem('Шоу мыльных пузырей', 'an_bubbles'),
    getItem('Химическое шоу', 'an_chemical'),
  ]),
  getItem('Фотозоны', 'photozone', <AppstoreOutlined />, [
    getItem('С пайетками', 'ph_payetki'),
    getItem('С цветами', 'ph_flowers'),
    getItem('С шарами', 'ph_balloons'),
  ]),
  getItem('Аттракционы и оборудование', 'attractions', <BuildOutlined />, [
    getItem('Сладкая вата', 'at_cotton'),
    getItem('Попкорн', 'at_popcorn'),
    getItem('Яблоки в карамели', 'at_apples'),
    getItem('Батут Сказка', 'at_skazka'), 
    getItem('Батут Ботинок', 'at_botinok'),
    getItem('Батут Спортивный', 'at_sport'),
  ]),
  // getItem('Аттракционы и оборудование', 'attractions', <BuildOutlined />, [
  //   getItem('Аттракционы', 'attr', null, 
  //     [getItem('Батут Сказка', 'at_skazka'), 
  //     getItem('Батут Ботинок', 'at_botinok'),
  //     getItem('Батут Спортивный', 'at_sport'),
  //   ]),
  //   getItem('Оборудование в аренду', 'equipment', null,
  //     [getItem('Сладкая вата', 'at_cotton'),
  //     getItem('Попкорн', 'at_popcorn'),
  //     getItem('Яблоки в карамели', 'at_apples'),
  //   ]),
  // ]),
];
