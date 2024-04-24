import c from './GallerySectionAlt.module.scss';
import { Image } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { galleryData } from './../../../../data/galleryData';
import { gallerySwiperParams } from './../../../../data/swiperParams';


export const GallerySectionAlt = (props) => {
  const { 
    data = galleryData,
    reversed,
    title,
    subTitle,
  } = props;

  const dataArr = reversed ? [...data].reverse() : data;

  const gallerySlides = dataArr.slice(0, 10).map((image, index) => (
    <SwiperSlide className='gallery__slide' key={index}>
      <div key={index} className={c.gallery__item}>
        <Image className={c.gallery__image} src={image} alt={index} preview={false} width={'100%'} height={'auto'} />
      </div>
    </SwiperSlide>
  ));

  return (
    <div className={c.gallery}>
      <div className={c.gallery__titleWrapper}>
        <p className={c.gallery__title}>{title}</p>
        {subTitle && <p className={c.gallery__subTitle}>{subTitle}</p>}
      </div>
        <div className={c.gallery__container}>
          <Swiper 
            {...gallerySwiperParams} 
            className='gallery__slider'
          >
            {gallerySlides}
          </Swiper>
        </div>
    </div>
  );
};
