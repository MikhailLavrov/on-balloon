import c from './InfoPage.module.scss';
import { InfoMenu } from './InfoMenu/InfoMenu';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { infoData } from '../../../data/infoData';

const Breadcrumbs = () => (
  <Breadcrumb
    items={[
      {
        href: '/',
        title: <HomeOutlined />,
      },
      {
        title: 'Информация для клиентов',
      },
    ]}
    style={{fontFamily: 'Tilda Sans, Arial, sans-serif'}}
  />
);

export const InfoPage = () => {
  return (
    <section className={c.infoPage} >
      <div className={`${c.infoPage__container} container`}>
      <Breadcrumbs />
      <h1 className={c.infoPage__title}>Информация для клиентов</h1>
        <div className={c.infoPage__innerContainer}>
          <InfoMenu />
        </div>
      </div>
    </section>
  )
}
