import { Image, FloatButton, Breadcrumb, ConfigProvider } from 'antd';
import c from './GalleryPage.module.scss';
import '../../../styles/global.scss';
import { ArrowUpOutlined, HomeOutlined } from '@ant-design/icons';
import { galleryData } from '../../../data/galleryData';

const Breadcrumbs = () => (
  <Breadcrumb
    items={[
      {
        href: '/',
        title: <HomeOutlined />,
      },
      {
        title: 'Галерея',
      },
    ]}
    style={{fontFamily: 'Tilda Sans, Arial, sans-serif'}}
  />
);

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
    <Breadcrumbs />
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
