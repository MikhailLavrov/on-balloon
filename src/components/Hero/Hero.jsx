import c from './Hero.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HeroSlide } from '../HeroSlide/HeroSlide';
import { heroData } from '../../data/heroData';
import { heroSwiperParams } from '../../data/swiperParams';
import { motion } from 'framer-motion';

const HeroSlides = heroData.map((card, index) => (
  <SwiperSlide key={index} className={c.hero__slide}>
    <HeroSlide card={card} />
  </SwiperSlide>
))

export const Hero = () => {
  return (
    <section className={c.hero} id='hero_section'>
      <h1 className='visually-hidden'>Украшение воздушными шарами важных мероприятий</h1>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 1, delay: 0.75 }}
        className={`${c.hero__container} container`}
      >
        <Swiper className='hero__slider' {...heroSwiperParams} style={{marginBottom: "20px"}}>
          {HeroSlides}
        </Swiper>
      </motion.div>
    </section>
  )
}