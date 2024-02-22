import c from './Hero.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HeroSlide } from '../HeroSlide/HeroSlide';
import { heroData } from '../../data/heroData';
import { heroSwiperParams } from '../../data/swiperParams';
import { CollectionsTiles } from '../CollectionsTiles/CollectionsTiles';

const HeroSlides = heroData.map((card, index) => (
  <SwiperSlide key={index} className={c.hero__slide}>
    <HeroSlide card={card} />
  </SwiperSlide>
))

export const Hero = () => {
  return (
    <section className={c.hero} id='hero_section'>
      <h1 className='visually-hidden'>Украшение воздушными шарами важных мероприятий</h1>
      <div className={`${c.hero__container} ${c.container}`}>
        <Swiper className='hero__slider' {...heroSwiperParams} style={{marginBottom: "20px"}}>
          {HeroSlides}
        </Swiper>
        <div className={c.hero__collections}>
          <CollectionsTiles />
        </div>
      </div>
    </section>
  )
}