import c from './Hero.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import IMG_01 from '../../assets/hero/img_01.jpg';
import { HeroSlide } from './HeroSlide/HeroSlide';

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
]

const heroSwiperParams = {
  modules: [Navigation, Pagination, Autoplay],
  navigation: true,
  pagination: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },
}

const HeroSlides = heroCards.map((card, index) => (
  <SwiperSlide key={index} className={c.hero__slide}>
    <HeroSlide card={card} />
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