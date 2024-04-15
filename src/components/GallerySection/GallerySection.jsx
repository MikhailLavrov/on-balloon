import c from './GallerySection.module.scss';
import { galleryData } from '../../data/galleryData';
import { Link } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';
import { Image } from 'antd';

export const GallerySection = () => {
  const isMobile = window.innerWidth <= 768;

  const galleryItems = galleryData
    .slice(0, isMobile ? 4 : 7)
    .map((image, index) => (
      <div key={index} className={c.gallery__item}>
        <Image className={c.gallery__image} src={image} alt={index} />
      </div>
    ));

  return (
    <section className={c.gallery} id='gallery_section'>
      <div className='container'>
        <h2 className={c.gallery__title}>
          Наши работы
          <Link className={c.gallery__showMoreLink} to={'/gallery'}>
            <RightOutlined />
          </Link>
        </h2>
        <div className={c.gallery__content}>
          {galleryItems}
        </div>
        <Link className={c.gallery__link} to={'/gallery'}>Открыть галерею</Link>
      </div>
    </section>
  );
};
