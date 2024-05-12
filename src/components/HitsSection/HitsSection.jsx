import c from './HitsSection.module.scss';
import { Link } from 'react-router-dom';
import { animationData } from '../../data/catalogData/animationData';
import { commercialData } from '../../data/catalogData/commercialData';
import { balloonsData } from '../../data/catalogData/balloonsData';
import { photozoneData } from '../../data/catalogData/photozoneData';
import { ProductCard } from '../ProductCard/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { hitsSwiperParams } from '../../data/swiperParams';

const allData = [...animationData, ...commercialData, ...balloonsData, ...photozoneData];
const hitsData = allData.filter((item) => item.hit).slice(0, 6);

export const HitsSection = () => {

  const hitsSlide = hitsData.map((item, index) => (
    <SwiperSlide className='hits__slide' key={index}>
      <ProductCard {...item} />
    </SwiperSlide>
  ))
  
  return (
    <section className={c.hits}>
      <div className='container'>
        <h2 className={c.hits__title}>
          Популярные товары
          <Link className={c.hits__showMoreLink} to={'/catalog'}>{'>'}</Link>
        </h2>
        <div className={c.hits__content}>
          <div className='hits__slider hits__slider--main'>
            <Swiper {...hitsSwiperParams}>
              {hitsSlide}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}
