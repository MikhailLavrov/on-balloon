import c from './GallerySection.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { galleryData } from '../../../../data/galleryData';
import { Link } from 'react-router-dom';
import { gallerySwiperParams } from '../../../../data/swiperParams';

export const GallerySection = () => {

  const gallerySlide = galleryData.map((image, index) => (
    <SwiperSlide className='gallery__slide' key={index}>
      <div className={c.gallery__image}>
        <img src={image} alt={index} />
        <div className="swiper-lazy-preloader"></div>
      </div>
    </SwiperSlide>
  ))
  
  return (
    <section className={c.gallery} id='gallery_section'>
      <div className='container'>
        <h2 className={c.gallery__title}>Наши работы</h2>
        <div className='gallery__slider gallery__slider--main'>
          <Swiper {...gallerySwiperParams}>
            {gallerySlide}
          </Swiper>
        </div>
        <Link className={c.gallery__link} to={'/gallery'}>Открыть галерею</Link>
      </div>
    </section>
  )
}
