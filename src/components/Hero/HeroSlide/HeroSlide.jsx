import c from './HeroSlide.module.scss';

export const HeroSlide = ({card}) => {
  return (
    <>
      <div className={c.heroSlide__content}>
        <h2 className={c.heroSlide__title}>{card.title}</h2>
        <p className={c.heroSlide__text}>{card.text}</p>
        <a className={c.heroSlide__link} href={card.link.href}>{card.link.text}</a>
      </div>
      <div className={c.heroSlide__image}>
        <img width={500} src={card.image} alt={card.title} />
      </div>
    </>
  )
}
