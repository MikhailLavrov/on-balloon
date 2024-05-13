import { Link } from 'react-router-dom';
import c from './HeroSlide.module.scss';
import { Image } from 'antd';
import FALLBACK from '../../assets/catalog/fallback.webp';
import { ImagePreloader } from '../../utils/ImagePreloader/ImagePreloader';

export const HeroSlide = ({card}) => {
  const {link, image, title} = card;

  return (
    <Link to={link.href} className={c.heroSlide__link}>    
      <div className={c.heroSlide__imageWrapper}>
        <Image
          src={image}
          alt={title}
          className={c.heroSlide__image}
          fallback={FALLBACK}
          preview={false}
          placeholder={<ImagePreloader />}
        />
      </div>
    </Link>
  )
}
