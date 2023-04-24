import { Image } from 'antd';
import c from './Gallery.module.scss';
import { Link } from 'react-router-dom';
import '../../styles/global.scss';
import { ArrowLeftOutlined } from '@ant-design/icons';
import IMG_01 from '../../assets/services/img_01.webp';
import IMG_02 from '../../assets/services/img_02.webp';
import IMG_03 from '../../assets/services/img_03.jpg';
import IMG_04 from '../../assets/services/img_04.webp';
import IMG_05 from '../../assets/hero/img_01.jpg';

export const Gallery = () => (
  <section className={c.gallery}>
    <Link className={c.gallery__backLink} to={'/'}><ArrowLeftOutlined /> На главную</Link>
    <div className='container'>
      <h2 className={c.gallery__title}>Галерея наших работ</h2>
      <div className={c.gallery__content}>
        <Image.PreviewGroup
          rootClassName='rootImg'
          preview={{
            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
          }}
          >
          <Image height={'100%'} width={'100%'} src={IMG_01} />
          <Image height={'100%'} width={'100%'} src={IMG_02} />
          <Image height={'100%'} width={'100%'} src={IMG_03} />
          <Image height={'100%'} width={'100%'} src={IMG_04} />
          <Image height={'100%'} width={'100%'} src={IMG_05} />
          <Image height={'100%'} width={'100%'} src={IMG_01} />
          <Image height={'100%'} width={'100%'} src={IMG_02} />
          <Image height={'100%'} width={'100%'} src={IMG_03} />
          <Image height={'100%'} width={'100%'} src={IMG_04} />
          <Image height={'100%'} width={'100%'} src={IMG_05} />
          <Image height={'100%'} width={'100%'} src={IMG_01} />
          <Image height={'100%'} width={'100%'} src={IMG_02} />
        </Image.PreviewGroup>
      </div>
    </div>
  </section>
);
