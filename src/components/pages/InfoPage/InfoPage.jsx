import c from './InfoPage.module.scss';
import { InfoMenu } from '../../InfoMenu/InfoMenu';
import { infoData } from '../../../data/infoData';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentMenu } from '../../../redux/menuNavSlice';
import {BreadcrumbsComponent} from '../../BreadcrumbsComponent/BreadcrumbsComponent'; 

export const InfoPage = () => {
  const currentTopMenuState = useSelector(state => state.menuNav.currentTopMenu);
  const currentMenuState = useSelector(state => state.menuNav.currentMenu);
  const [selectedTopCategory, setSelectedTopCategory] = useState(currentTopMenuState);
  const [selectedCategory, setSelectedCategory] = useState(currentMenuState);
  const dispatch = useDispatch();
  
  const onClick = (e) => {
    setSelectedTopCategory(e.keyPath[e.keyPath.length - 1]);
    setSelectedCategory(e.key);
  };

  useEffect(() => {
    dispatch(setCurrentMenu({ currentTopMenu: selectedTopCategory, currentMenu: selectedCategory }));
  }, [dispatch, selectedCategory, selectedTopCategory])

  const infoItems = selectedCategory ? infoData[selectedTopCategory].filter(item => item.key === selectedCategory) : [];

  return (
    <section className={c.infoPage}>
      <div className={`${c.infoPage__container} container`}>
      <BreadcrumbsComponent pageName={'Информация для клиентов'} />
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
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
