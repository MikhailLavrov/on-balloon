import { galleryData } from '../../data/galleryData';
import { gallerySwiperParams } from '../../data/swiperParams';
import c from './SecondaryGallerySection.module.scss';
import { Image } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';


export const SecondaryGallerySection = (props) => {
  const { 
    dataArr = galleryData,
    reversed,
    title,
    subTitle,
  } = props;

  const data = reversed ? [...dataArr].reverse() : dataArr;

  const gallerySlides = data.slice(0, 10).map((image, index) => (
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
