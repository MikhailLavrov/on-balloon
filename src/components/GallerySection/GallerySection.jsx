import c from './GallerySection.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Navigation, Pagination, Scrollbar } from 'swiper';
import { useState } from 'react';
import { galleryData } from '../../data/galleryData';
import { Link } from 'react-router-dom';

export const GallerySection = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const swiperParams = {
    modules: [Thumbs, Navigation, Pagination],
    thumbs: { swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null },
    spaceBetween: 15,
    navigation: true,
    pagination: {
      type: 'fraction',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerGroup: 2,
        slidesPerView: 2,
      },
      1120: {
        slidesPerGroup: 3,
        slidesPerView: 3,
      }
    }
  };

  const swiperThumbsParams = {
    modules: [Thumbs, Scrollbar, Navigation],
    watchSlidesProgress: true,
    spaceBetween: 15,
    scrollbar: { draggable: true },
    freeMode: true,
    navigation: true,
    // allowTouchMove: false,
    breakpoints: {
      0: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 7.5,
      }
    }
  };

  const gallerySlide = galleryData.map((slide, index) => (
    <SwiperSlide className='gallery__slide' key={index}>
      <div className={c.gallery__image}>
        <img src={slide.image} alt={slide.title} />
        <div className="swiper-lazy-preloader"></div>
      </div>
    </SwiperSlide>
  ))
  
  return (
    <div className={c.gallery}>
      <div className='container'>
        <div className={c.gallery__text}>
          <h2 className={c.gallery__title}>Наши работы</h2>
        </div>
        <div className='gallery__slider gallery__slider--main'>
          <Swiper {...swiperParams}>
            {gallerySlide}
          </Swiper>
        </div>

        <div className='gallery__slider gallery__slider--thumbs'>
          <Swiper {...swiperThumbsParams} onSwiper={setThumbsSwiper}>
            {gallerySlide}
          </Swiper>
        </div>

        <Link className={c.gallery__link} to={'/gallery'}>Открыть галерею</Link>
      </div>
    </div>
  )
}
