import { Image, FloatButton, ConfigProvider } from 'antd';
import c from './GalleryPage.module.scss';
import '../../../styles/global.scss';
import { ArrowUpOutlined } from '@ant-design/icons';
import { galleryData } from '../../../data/galleryData';
import {BreadcrumbsComponent} from '../../BreadcrumbsComponent/BreadcrumbsComponent'; 

const galleryImages = galleryData.map((image, index) => (
  <Image 
    key={index}
    width={'auto'}
    src={image}
  />
))

export const GalleryPage = () => (
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
      <FloatButton.BackTop icon={<ArrowUpOutlined />} />
    </div>
  </section>
);
