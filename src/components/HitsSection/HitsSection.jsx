import c from './HitsSection.module.scss';
import { Link } from 'react-router-dom';
import { animationData } from '../../data/catalogData/animationData';
import { attractionsData } from '../../data/catalogData/attractionsData';
import { balloonsData } from '../../data/catalogData/balloonsData';
import { photozoneData } from '../../data/catalogData/photozoneData';
import { CatalogCard } from '../CatalogCard/CatalogCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { hitsSwiperParams } from '../../data/swiperParams';
import { motion } from 'framer-motion';

const allData = [...animationData, ...attractionsData, ...balloonsData, ...photozoneData];
const hitsData = allData.filter((item) => item.hit);

export const HitsSection = () => {

  const hitsListVariants = {
    hidden: {
      opacity: 0, 
      y: 20,
    },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
      },
    })
  }

  const hitsSlide = hitsData.map((item, index) => (
    <SwiperSlide className='hits__slide' key={index}>
      <motion.div
        variants={hitsListVariants}
        initial='hidden'
        animate='visible'
        custom={index}
      >
        <CatalogCard {...item} />
      </motion.div>
    </SwiperSlide>
  ))
  
  return (
    <section className={c.hits}>
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.3
        }}
        className='container'
      >
        <h2 className={c.hits__title}>
          Популярные товары
          <Link className={c.hits__showMoreLink} to={'/catalog'}>
            {'>>'}
          </Link>
        </h2>
        <div className={c.hits__content}>
          <div className='hits__slider hits__slider--main'>
            <Swiper {...hitsSwiperParams}>
              {hitsSlide}
            </Swiper>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
