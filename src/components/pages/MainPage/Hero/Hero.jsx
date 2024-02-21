import c from './Hero.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HeroSlide } from './HeroSlide/HeroSlide';
import { heroData } from '../../../../data/heroData';
import { Link } from 'react-router-dom';
import { collectionsData } from '../../../../data/collectionsData';
import { heroSwiperParams } from '../../../../data/swiperParams';
import { setCurrentCategory } from '../../../../redux/outerCatalogNavSlice';
import { useDispatch } from 'react-redux';

const CollectionsTiles = () => {
  const dispatch = useDispatch();

  const onClickHandler = (tile) => {
    dispatch(setCurrentCategory({currentTopCategory: tile.key}));
  }

  const collection = collectionsData.map((tile, index) => {
    return (
      <div className={c.hero__collectionsCard} key={index}>
        <Link to={tile.link} className={c.hero__collectionsLink} onClick={() => onClickHandler(tile)}>
          <p className={c.hero__collectionsTitle}>{tile.label}</p>
          <div className={c.hero__collectionsImageWrapper}>
            <img className={c.hero__collectionsImage} src={tile.image} alt={tile.label} />
          </div>
        </Link>
      </div>
    )
  })

  return collection;
} 


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
          {/* {CollectionsTiles} */}
          <CollectionsTiles />
        </div>
      </div>
    </section>
  )
}