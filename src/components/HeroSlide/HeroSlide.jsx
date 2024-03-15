import { Link } from 'react-router-dom';
import c from './HeroSlide.module.scss';

export const HeroSlide = ({card}) => {
  const {link, image, title} = card;

  return (
    <Link to={link.href} className={c.heroSlide__link}>    
      <div className={c.heroSlide__imageWrapper}>
        <img src={image} alt={title} className={c.heroSlide__image} />
      </div>
    </Link>
  )
}
