import c from './GallerySection.module.scss';
import { galleryData } from '../../data/galleryData';
import { Link } from 'react-router-dom';
import { Image } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { gallerySwiperParams } from '../../data/swiperParams';
import { useState } from 'react';

export const GallerySection = () => {
  const [ isLinkVisible, setIsLinkVisible ] = useState(false);

  const gallerySlides = galleryData.slice(0, 6).map((image, index) => (
    <SwiperSlide className='gallery__slide' key={index}>
      <div key={index} className={c.gallery__item}>
        <Image className={c.gallery__image} src={image} alt={index} preview={false} />
      </div>
    </SwiperSlide>
  ));

  // Добавляем новый слайд
  const extraGalleryLink = (
    <SwiperSlide className={c.gallery__lastItem} key={galleryData.length}>
      {isLinkVisible && 
      <div className={c.gallery__linkWrapper}>
        <Link to={'/gallery'} className={c.slider__link}>В галерею {'>>'}</Link>
      </div>
      }
    </SwiperSlide>
  );

  // Пушим новый слайд в массив галереи
  gallerySlides.push(extraGalleryLink);

  return (
    <section className={c.gallery} id='gallery_section'>
      <div className='container'>
        <h2 className={c.gallery__title}>
          Наши работы
          <Link className={c.gallery__showMoreLink} to={'/gallery'}>{'>'}</Link>
        </h2>
        <div className={c.gallery__content}>
          <Swiper 
            {...gallerySwiperParams} 
            className='gallery__slider'
            onReachEnd={() => setIsLinkVisible(true)}
          >
            {gallerySlides}
          </Swiper>
        </div>
        <Link className={c.gallery__link} to={'/gallery'}>Открыть галерею</Link>
      </div>
    </section>
  );
};

export default GallerySection;
