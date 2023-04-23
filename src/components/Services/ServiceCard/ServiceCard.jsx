import c from './ServiceCard.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

const serviceCardSwiperParams = {
  modules: [Navigation, Pagination, Autoplay],
  navigation: true,
  loop: true,
  pagination: {
    type: 'fraction',
  },
  autoplay: {
    delay: 3000,
  },
};

export const ServiceCard = ({card, index}) => {
  return (
    <li className={c.serviceCard} key={index}>
      <div className={c.serviceCard__image}>
        <Swiper className='services__slider' {...serviceCardSwiperParams}>
          {card.images.map((image, index) => (
            <SwiperSlide key={index} className={c.serviceCard__slide}>
              <img width={200} src={image} alt={card.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={c.serviceCard__content}>
        <h3 className={c.serviceCard__title}>{card.title}</h3>
        <div className={c.serviceCard__footer}>
          <p className={c.serviceCard__text}>{card.text}</p>
          <a className={c.serviceCard__link} href={card.link.href}>{card.link.text}</a>
        </div>
      </div>
    </li>
  )
}
