import c from './InfoPage.module.scss';
import { InfoMenu } from '../../InfoMenu/InfoMenu';
import { infoData } from '../../../data/infoData';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentMenu } from '../../../redux/topMenuNavSlice';
import {BreadcrumbsComponent} from '../../BreadcrumbsComponent/BreadcrumbsComponent'; 

export const InfoPage = () => {
  const currentTopMenuState = useSelector(state => state.topMenuNav.currentTopMenu);
  const currentSubMenuState = useSelector(state => state.topMenuNav.currentSubMenu);
  const [selectedTopCategory, setSelectedTopCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const dispatch = useDispatch();
  
  useEffect(() => {
    setSelectedTopCategory(currentTopMenuState);
    setSelectedCategory(currentSubMenuState);
  }, [dispatch, currentTopMenuState, currentSubMenuState])
  
  const onClick = (e) => {
    dispatch(setCurrentMenu({ currentTopMenu: e.keyPath[e.keyPath.length - 1], currentSubMenu: e.key }));
  };

  const infoItems = selectedTopCategory ? infoData[selectedTopCategory].filter(item => item.key === selectedCategory) : [];

  return (
    <section className={c.infoPage}>
      <div className={`${c.infoPage__container} container`}>
      <BreadcrumbsComponent pageName={'Информация для клиентов'} className={c.infoPage__breadcrumbs} />
        <h1 className={c.infoPage__title}>Информация для клиентов</h1>
        <div className={c.infoPage__innerContainer}>
          <InfoMenu 
            handleMenuClick={onClick}
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
          {infoItems.map((item, index) => (
            <div key={index} className={c.infoPage__item}>
              <h2 className={c.infoPage__subTitle}>{item.title}</h2>
              <p className={c.infoPage__description}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
