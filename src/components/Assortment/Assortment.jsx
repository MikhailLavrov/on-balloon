import c from './Assortment.module.scss';
import { Tabs } from 'antd';
import { assortmentData } from '../../data/assortmentData';
import { AssortmentCard } from './AssortmentCard/AssortmentCard';

const assortmentTabs = assortmentData.map((tabItem, index) => {
  const tabChildren = 
    tabItem.children.map((childItem, childIndex) => 
      <AssortmentCard key={childIndex} item={childItem} index={index + String(childIndex)}  />
    )

  return {
    label: tabItem.tabName,
    key: index,
    children: tabChildren,
  };
})

export const Assortment = () => {
  return (
    <section className={c.assortment} id='assortment_section'>
      <div className='container'>
        <h2 className={c.assortment__title}>Варианты композиций</h2>
        <p className={c.assortment__subtitle}>Цвет шаров возможен любой.<br /><span>Доставка и монтаж оплачиваются&nbsp;отдельно.</span></p>
        <Tabs
          className={c.assortment__tabs}
          tabPosition={'top'}
          style={{ height: '100%' }}
          items={assortmentTabs}
          type='line'
        />
      </div>
    </section>
  );
};
