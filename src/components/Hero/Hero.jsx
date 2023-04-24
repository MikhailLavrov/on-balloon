import c from './Hero.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Parallax, EffectFade } from 'swiper';
import IMG_01 from '../../assets/hero/img_01.jpg';
import IMG_02 from '../../assets/services/img_01.webp';
import IMG_03 from '../../assets/services/img_02.webp';
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
    image: IMG_02,
  },
  {
    title: 'Шарами украшаем важные мероприятия',
    text: 'в Ленинградской области и Гатчине сотрудничаем с муниципальными организациями, физ. и юр. лицами',
    link: {
      text: 'Сделать заказ',
      href: '#a',
    },
    image: IMG_03,
  },
]

const heroSwiperParams = {
  modules: [Navigation, Pagination, Autoplay, Parallax, EffectFade],
  navigation: true,
  pagination: true,
  parallax: true,
  loop: true,
  preventInteractionOnTransition: true,
  speed: 1000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
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