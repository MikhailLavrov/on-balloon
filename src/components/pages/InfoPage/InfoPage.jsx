import c from './InfoPage.module.scss';
import { InfoMenu } from './InfoMenu/InfoMenu';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { infoData } from '../../../data/infoData';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentMenu } from '../../../redux/menuNavSlice';

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
    style={{ fontFamily: 'Tilda Sans, Arial, sans-serif' }}
  />
);

export const InfoPage = () => {
  const currentTopMenu = useSelector(state => state.menuNav.currentTopMenu);
  const currentMenu = useSelector(state => state.menuNav.currentMenu);
  const [selectedTopCategory, setSelectedTopCategory] = useState(currentTopMenu);
  const [selectedCategory, setSelectedCategory] = useState(currentMenu);
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
        <Breadcrumbs />
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
