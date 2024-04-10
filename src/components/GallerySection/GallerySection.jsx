import c from './GallerySection.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { galleryData } from '../../data/galleryData';
import { Link } from 'react-router-dom';
import { gallerySwiperParams } from '../../data/swiperParams';
import { RightOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

export const GallerySection = () => {

  const galleryListVariants = {
    hidden: {
      opacity: 0, 
    },
    visible: i => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    })
  }

  const gallerySlide = galleryData.map((image, index) => (
    <SwiperSlide className='gallery__slide' key={index}>
      <motion.div 
        className={c.gallery__image} 
        variants={galleryListVariants} 
        initial='hidden' 
        whileInView={'visible'} 
        custom={index}
        viewport={{once: true}}
      >
        <img src={image} alt={index} />
        <div className="swiper-lazy-preloader"></div>
      </motion.div>
    </SwiperSlide>
  ))
  
  return (
    <motion.section
      viewport={{amount: 0.2}}
      className={c.gallery}
      id='gallery_section'
    >
      <div className='container'>
        <h2 className={c.gallery__title}>
          Наши работы
          <Link className={c.gallery__showMoreLink} to={'/gallery'}>
            <RightOutlined />
          </Link>
        </h2>
        <div className='gallery__slider gallery__slider--main'>
          <Swiper {...gallerySwiperParams}>
            {gallerySlide}
          </Swiper>
        </div>
        <Link className={c.gallery__link} to={'/gallery'}>Открыть галерею</Link>
      </div>
    </motion.section>
  )
}
