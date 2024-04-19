import c from './ReviewsSection.module.scss';
import { reviewsData } from '../../data/reviewsData';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { reviewsSwiperParams } from '../../data/swiperParams';

export const ReviewsSection = () => {

  const reviewItems = reviewsData.map((item, index) => (
    <SwiperSlide className='reviews__slide' key={index}>
      <div className={c.reviewItem} key={index}>
        <div className={c.reviewItem__photo}>
          <img width={100} src={item.userPhoto} alt="Фото" />
        </div>
        <p className={c.reviewItem__name}>{item.name}</p>
        <div className={c.reviewItem__content}>
          <p className={c.reviewItem__text}> {item.text} </p>
        </div>
      </div>
    </SwiperSlide>
  ))
  
  return (
    <section className={c.reviews}>
      <div className='container'>
        <h2 className={c.reviews__title}>
          Отзывы клиентов
          <Link to={'/reviews'} className={c.reviews__showMoreLink}>{'>'}</Link>
        </h2>
        <div className={c.reviews__content}>
          <Swiper
            {...reviewsSwiperParams} 
            className='reviews__slider'
          >
            {reviewItems}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
