import c from './Assortment.module.scss';
import { Tabs } from 'antd';
import { assortmentData } from '../../data/assortmentData';
import { AssortmentCard } from './AssortmentCard/AssortmentCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Autoplay } from "swiper";

const assortmentTabs = assortmentData.map((tabItem, index) => {
  const tabChildren = 
    <Swiper
      className={c.assortment__swiper}
      modules={[Grid, Autoplay]}
      slidesPerView={2}
      autoplay={{
        delay: 5000,
      }}
      spaceBetween={10}
      grid={{
        rows: 2,
        fill: 'row'
      }}
      breakpoints={{
        // when window width is >= 640px
        768: {
          slidesPerView: 3,
          grid: {
            rows: 2,
            fill: 'row'
          }
        },
        1120: {
          slidesPerView: 4,
          grid: {
            rows: 2,
            fill: 'row'
          },
          spaceBetween: 20,
        },
      }}
      >
      {tabItem.children.map((childItem, index) => 
        <SwiperSlide className={c.assortment__slide} key={index}>
          <AssortmentCard item={childItem} index={index}  />
        </SwiperSlide>
      )}
    </Swiper>
  

  return {
    label: tabItem.tabName,
    key: index,
    children: tabChildren,
  };
})

export const Assortment = () => {
  return (
    <section className={c.assortment}>
      <div className='container'>
        <h2 className={c.assortment__title}>Варианты композиций</h2>
        <p className={c.assortment__subtitle}>Цвет шаров возможен любой.<br /><span>Доставка и монтаж оплачиваются отдельно.</span></p>
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
