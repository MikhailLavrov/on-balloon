import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import c from './GallerySection.module.scss';
import { galleryData } from '../../data/galleryData';
import { gallerySwiperParams } from '../../data/swiperParams';

export const GallerySection = () => {
  const [ isLinkVisible, setIsLinkVisible ] = useState(false);

  const gallerySlides = galleryData.slice(0, 8).map((image, index) => (
    <SwiperSlide className='gallery__slide' key={index}>
      <div className={c.gallery__item}>
        <Image className={c.gallery__image} src={image} alt={index} preview={false} />
      </div>
    </SwiperSlide>
  ));

  const extraGalleryLink = (
    <SwiperSlide className={c.gallery__lastItem} key={galleryData.length}>
      {isLinkVisible && 
      <div className={c.gallery__linkWrapper}>
        <p className={c.gallery__lastItemTitle}>Продолжить просмотр в галерее?</p>
        <Link to={'/gallery'} className={c.gallery__lastItemLink}>Перейти в галерею {'>>'}</Link>
      </div>
      }
    </SwiperSlide>
  );

  return (
    <section className={c.gallery} id='gallery_section'>
      <div className={`container ${c.gallery__container}`} style={{overflow: 'hidden'}}>
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
            {extraGalleryLink}
          </Swiper>
        </div>
        <Link className={c.gallery__link} to={'/gallery'}>Открыть галерею</Link>
      </div>
    </section>
  );
};

export default GallerySection;
