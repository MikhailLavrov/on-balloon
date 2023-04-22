import './HeroSwiper.scss';
import c from './Hero.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import IMG_01 from '../../assets/hero/hero_01.jpg';

const heroCards = [
  {
    title: 'Украшаем шарами важные мероприятия',
    text: 'в Гатчине и Ленинградской области сотрудничаем с муниципальными организациями, физ. и юр. лицами',
    link: {
      text: 'Заказать оформление',
      href: '#a',
    },
    image: IMG_01,
  },
  {
    title: 'Украшаем важные мероприятия шарами',
    text: 'сотрудничаем с муниципальными организациями, физ. и юр. лицами, в Гатчине и Ленинградской области',
    link: {
      text: 'Оформить заказ',
      href: '#a',
    },
    image: IMG_01,
  },
  {
    title: 'Шарами украшаем важные мероприятия',
    text: 'в Ленинградской области и Гатчине сотрудничаем с муниципальными организациями, физ. и юр. лицами',
    link: {
      text: 'Сделать заказ',
      href: '#a',
    },
    image: IMG_01,
  },
];

const heroSwiperParams = {
  modules: [Navigation, Pagination, Autoplay],
  navigation: true,
  pagination: true,
  autoplay: {
    delay: 5000,
  },
};

const HeroSlides = heroCards.map((card, index) => (
  <SwiperSlide className={c.hero__slide} key={index}>
    <div className={c.hero__slideContent}>
      <h2 className={c.hero__title}>{card.title}</h2>
      <p className={c.hero__text}>{card.text}</p>
      <a className={c.hero__link} href={card.link.href} size={'large'}>{card.link.text}</a>
    </div>
    <div className={c.hero__slideImage}>
      <img width={500} src={card.image} alt="" />
    </div>
  </SwiperSlide>
))

export const Hero = () => {
  return (
    <section className={c.hero}>
      <h1 className='visually-hidden'>Украшение воздушными шарами важных мероприятий</h1>
      <div className={c.hero__container}>
        <Swiper className='hero__slider' {...heroSwiperParams}>
          {HeroSlides}
        </Swiper>
      </div>
    </section>
  )
}
