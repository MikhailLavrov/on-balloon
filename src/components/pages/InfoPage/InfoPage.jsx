import c from './InfoPage.module.scss';
import { InfoMenu } from '../../InfoMenu/InfoMenu';
import { infoPageData } from '../../../data/infoData/infoPageData';
import { BreadcrumbsComponent } from '../../BreadcrumbsComponent/BreadcrumbsComponent';
import { Link, useParams } from 'react-router-dom';
import { FloatButtonComponent } from '../../FloatButtonComponent/FloatButtonComponent';

const InfoPage = () => {
  const { chapter } = useParams();

  const infoItem = infoPageData.find(item => item.key === chapter);

  const MobileInfoMenu = () => (
    infoPageData.map(item => {
      return (
        <Link
          key={item.key}
          to={`/info/${item.key}`}
          className={c.mobileInfoMenu__link}
          style={{ backgroundColor: item.key === chapter ? '#9e7ffd' : '#eeeeee',
          color: item.key === chapter ? '#fff' : '#000', transition: 'all 200ms ease' }}
        >
          {item.title}
        </Link>
      )}
    )
  );

  return (
    <section className={c.infoPage}>
      <div className={`${c.infoPage__container} container`}>
        <BreadcrumbsComponent pageName={'Информация для клиентов'} />
        <h1 className={c.infoPage__title}>Информация для клиентов</h1>
        <div className={c.mobileInfoMenu}>
          <MobileInfoMenu />
        </div>
        <div className={c.infoPage__innerContainer}>
          <InfoMenu
            theme={{
              components: {
                Menu: {
                  itemSelectedColor: 'black',
                  itemSelectedBg: '#cdcdcd',
                  fontFamily: 'Tilda Sans, Arial, sans-serif',
                },
              },
            }}
          />
          {infoItem && (
            <div className={c.infoPage__item}>
              <h2 className={c.infoPage__subTitle}>{infoItem.title}</h2>
              <p className={c.infoPage__description}>{infoItem.description}</p>
            </div>
          )}
        </div>
      </div>
      <FloatButtonComponent />
    </section>
  );
};

export default InfoPage;
