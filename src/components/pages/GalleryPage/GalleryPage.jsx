import { Image, ConfigProvider } from 'antd';
import c from './GalleryPage.module.scss';
import '../../../styles/global.scss';
import { galleryData } from '../../../data/galleryData';
import { BreadcrumbsComponent } from '../../BreadcrumbsComponent/BreadcrumbsComponent';
import { FloatButtonComponent } from '../../FloatButtonComponent/FloatButtonComponent';

const galleryImages = galleryData.map((image, index) => (
  <Image 
    key={index}
    width={'auto'}
    src={image}
  />
))

const GalleryPage = () => (
  <section className={c.gallery}>
    <div className='container'>
      <BreadcrumbsComponent pageName={'Галерея'} />
      <div className={c.gallery__info}>
        <h2 className={c.gallery__title}>Галерея наших работ</h2>
        <p className={c.gallery__subtitle}>Делимся событиями, в которых принимали непосредственное участие, создавая ту самую торжественную атмосферу.</p>
      </div>
      <div className={c.gallery__content}>
        <ConfigProvider
          theme={{
            token: {
              colorBgMask: 'rgba(0, 0, 0, 0.85)'
            },
          }}
        >
        <Image.PreviewGroup rootClassName='rootImg' movable='false' >
          {galleryImages}
        </Image.PreviewGroup>
        </ConfigProvider>
      </div>
    </div>
    <FloatButtonComponent />
  </section>
);

export default GalleryPage;
