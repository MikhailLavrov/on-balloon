import c from './InfoPage.module.scss';
import { InfoMenu } from '../../InfoMenu/InfoMenu';
import { infoPageData } from '../../../data/infoData/infoPageData';
import { BreadcrumbsComponent } from '../../BreadcrumbsComponent/BreadcrumbsComponent';
import { useParams } from 'react-router-dom';

export const InfoPage = () => {
  const { chapter } = useParams();

  const infoItem = infoPageData.find(item => item.key === chapter);

  return (
    <section className={c.infoPage}>
      <div className={`${c.infoPage__container} container`}>
        <BreadcrumbsComponent pageName={'Информация для клиентов'} />
        <h1 className={c.infoPage__title}>Информация для клиентов</h1>
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
    </section>
  );
};
