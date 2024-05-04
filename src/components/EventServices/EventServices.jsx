import { RightCircleOutlined } from '@ant-design/icons';
import c from './EventServices.module.scss';
import { Link } from 'react-router-dom';

export const eventServicesData = [
  {
    title: 'Оформление',
    text: 'Преобразим площадку для проведения праздника так, чтобы она впечатлила гостей и эффектно смотрелась на фото. Используем статичные или мобильные конструкции любой сложности: тематические декорации, профессиональные осветительные приборы, баннеры, драпировки, цветы, шары и прочее.',
    image: 'https://static.baza.farpost.ru/v/1676672632641_bulletin',
    link: '/decor',
  },
  {
    title: 'Фотозона',
    text: 'Изготовим эксклюзивную фотозону или предложим готовые решения для проведения праздников любой тематики. Множество вариантов: шары, прессволы, баннеры и прочие задники с надписью или логотипом. Дополним композицию тематическими инсталляциями, подсветкой, артистами в красивых костюмах.',
    image: 'https://cdn.shopify.com/s/files/1/0779/3416/6324/files/image-07-08-23-01-16_1000x.webp?v=1691406578',
    link: '/photozone',
  },
  {
    title: 'Детские шоу',
    text: 'Увлечем ребят любого возраста – от малышей до подростков. Ограничений в выборе нет – аниматоры, квесты, мастер-классы, фокусы, спектакли, дискотеки и многое другое. Все программы интерактивные – выброс энергии и всплеск эмоций гарантируем!',
    image: 'https://st.przx.ru/files/content/articles/ekb/show/reaction.jpg',
    link: '/childrenshow',
  },
  {
    title: 'Открытие магазина',
    text: 'Помогаем превратить открытие вашего магазина, ТЦ, салона красоты или любого другого объекта в настоящую феерию! Мы знаем, как делать праздники, приносящие не только удовольствие для всех участников, но и дальнейшую выгоду для Вашего бизнеса.',
    image: 'https://atiko.kz/wp-content/uploads/2015/05/%D0%9E%D1%80%D0%B3%D0%B0%D0%BD%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D0%B8%D1%8F-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD%D0%B0-%D0%B2-%D0%A1%D0%BE%D1%87%D0%B8.jpg',
    link: '/forbusiness',
  },
];

export const EventServices = () => {

  const items = eventServicesData.map((item, index) => (
    <Link className={c.eventServices__itemLink} key={index} to={item.link}>
      <div className={c.eventServices__itemImageWrapper}>
        <img className={c.eventServices__itemImage} src={item.image} alt={item.title} width={200} height={200} />
        <div className={c.eventServices__itemTextWrapper}>
          <div className={c.eventServices__itemTitleWrapper}>
            <h3 className={c.eventServices__itemTitle}>{item.title}</h3>
            <RightCircleOutlined className={c.eventServices__itemIcon} size={'small'} />
          </div>
          <p className={c.eventServices__itemText}>{item.text}</p>
        </div>
      </div>
    </Link>
  ))

  // const items = eventServicesData.map((item, index) => (
  //   <Link className={c.eventServices__itemLink} key={index} to={item.link}>
  //     <div className={c.eventServices__itemImageWrapper}>
  //       <img className={c.eventServices__itemImage} src={item.image} alt={item.title} width={200} height={200} />
  //       <div className={c.eventServices__itemTextWrapper}>
  //         <p className={c.eventServices__itemText}>{item.text}</p>
  //         <RightCircleOutlined className={c.eventServices__itemIcon} />
  //       </div>
  //     </div>
  //     <h3 className={c.eventServices__itemTitle}>{item.title}</h3>
  //   </Link>
  // ))

  return (
    <section className={c.eventServices}>
      <div className={`container ${c.eventServices__container}`}>
        <div className={c.eventServices__titleWrapper}>
          <h2 className={c.eventServices__title}>Услуги для организации мероприятий</h2>
          <p className={c.eventServices__subTitle}>От небольшого семейного торжества до масштабного регионального праздника</p>
        </div>
        <div className={c.eventServices__content}>
          {items}
        </div>
      </div>
    </section>
  )
}
