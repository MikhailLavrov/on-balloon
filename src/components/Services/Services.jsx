import c from './Services.module.scss';
import IMG_01 from '../../assets/services/img_01.webp';
import IMG_02 from '../../assets/services/img_02.webp';
import IMG_03 from '../../assets/services/img_03.jpg';
import IMG_04 from '../../assets/services/img_04.webp';
import { ServiceCard } from './ServiceCard/ServiceCard';

const serviceCardsArr = [
  {
    title: 'Украшение уличной сцены',
    text: 'Гирлянда и "салюты" вокруг баннера, стойки из воздушных шаров',
    link: {
      text: 'Хотим также',
      href: '#a',
    },
    images: [IMG_01, IMG_02, IMG_03, IMG_04],
  },
  {
    title: 'Оформление в стиле #Команда\u00A047',
    text: 'Пушистые композиции, цветочки, гирлянда и буквы из воздушных шаров',
    link: {
      text: 'Хотим также',
      href: '#a',
    },
    images: [IMG_02, IMG_03, IMG_04, IMG_01],
  },
  {
    title: 'Открытие спортивного комплекса',
    text: 'Фонтаны и композиции из воздушных шаров, флаг из шаров с гелием',
    link: {
      text: 'Хотим также',
      href: '#a',
    },
    images: [IMG_03, IMG_04, IMG_01, IMG_02],
  },
  {
    title: 'Открытие спортивной площадки',
    text: 'Импровизированная сцена из арки, стойки из шаров для разрезания ленты',
    link: {
      text: 'Хотим также',
      href: '#a',
    },
    images: [IMG_04, IMG_01, IMG_02, IMG_03],
  },
];

const ServiceCards = serviceCardsArr.map((card, index) => (
  <ServiceCard card={card} index={index} key={index} />
))

export const Services = () => {
  return (
    <section className={c.services}>
      <div className='container'>
        <h2 className={c.services__title}>Ищите готовое решение оформления?</h2>
        <p className={c.services__subtitle}>Вы можете подобрать оформление воздушными шарами из тех вариантов, которые мы уже делали. Посмотрите примеры наших работ</p>
        <div className={c.services__content}>
          <ul className={c.services__list}>
            {ServiceCards}
          </ul>
        </div>
      </div>
    </section>
  )
}
