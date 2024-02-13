import c from './Hero.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HeroSlide } from './HeroSlide/HeroSlide';
import { heroData } from '../../../../data/heroData';
import { Link } from 'react-router-dom';
import { collectionsData } from '../../../../data/collectionsData';
import { heroSwiperParams } from '../../../../data/swiperParams';

const CollectionsTiles = collectionsData.map((tile, index) => {
  return (
  <div className={c.hero__collectionsCard} key={index}>
    <Link to={tile.link} className={c.hero__collectionsLink}>
      <p className={c.hero__collectionsTitle}>{tile.title}</p>
      <div className={c.hero__collectionsImageWrapper}>
        <img className={c.hero__collectionsImage} src={tile.image} alt={tile.title} />
      </div>
    </Link>
  </div>
  )
})

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
          {CollectionsTiles}
        </div>
      </div>
    </section>
  )
}