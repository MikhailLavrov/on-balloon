import c from './HeroSlide.module.scss';

export const HeroSlide = ({card}) => {
  return (
    <>
      <div className={c.heroSlide__content}>
        <h2 
          className={c.heroSlide__title} 
          data-swiper-parallax-opacity="-1" 
          data-swiper-parallax-duration="1600"
          data-swiper-parallax="-20">
            {card.title}
        </h2>
        <p 
          className={c.heroSlide__text} 
          data-swiper-parallax-opacity="-1" 
          data-swiper-parallax-duration="1400"
          data-swiper-parallax="20">
            {card.text}
        </p>
        <a 
          className={c.heroSlide__link} 
          data-swiper-parallax-opacity="-1" 
          data-swiper-parallax-duration="1200" 
          href={card.link.href}>
            {card.link.text}
        </a>
      </div>
      <div className={c.heroSlide__image}>
        <img width={500} src={card.image} alt={card.title} />
      </div>
    </>
  )
}
