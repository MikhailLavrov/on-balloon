import { Image } from 'antd';
import c from './GalleryPage.module.scss';
import { Link } from 'react-router-dom';
import '../../../styles/global.scss';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { galleryData } from '../../../data/galleryData';

const galleryImages = galleryData.map((item, index) => (
  <Image key={index} height={'100%'} width={'100%'} src={item.image} />
))

export const GalleryPage = () => (
  <section className={c.gallery}>
    <Link className={c.gallery__backLink} to={'/'}><ArrowLeftOutlined /></Link>
    <div className='container'>
      <div className={c.gallery__text}>
        <h2 className={c.gallery__title}>Галерея наших работ</h2>
        <p className={c.gallery__subtitle}>Мы оформили большое количество мероприятий различного уровня и масштаба.<br />Делимся событиями, в которых принимали непосредственное участие, создавая ту самую торжественную атмосферу.</p>
      </div>
      <div className={c.gallery__content}>
        <Image.PreviewGroup
          rootClassName='rootImg'
          preview={{
            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
          }}
          >
          {galleryImages}
        </Image.PreviewGroup>
      </div>
    </div>
  </section>
);
