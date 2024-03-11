import React from 'react';
import { BreadcrumbsComponent } from '../../BreadcrumbsComponent/BreadcrumbsComponent';
import { FloatButtonComponent } from '../../FloatButtonComponent/FloatButtonComponent';
import { reviewsData } from '../../../data/reviewsData';
import c from './ReviewsPage.module.scss';
import { Image } from 'antd';

const reviewItems = reviewsData.map((item, index) => (
  <div className={c.reviewItem} key={index}>
    <div className={c.reviewItem__userPhoto}>
      <img width={100} src={item.userPhoto} alt="Фото" />
    </div>
    <div className={c.reviewItem__content}>
      <p className={c.reviewItem__name}>{item.name}</p>
      <p className={c.reviewItem__text}> {item.text} </p>
      <div className={c.reviewItem__productPhoto}>
        <Image width={150} src={item.productPhoto} alt="Результат" />
      </div>
    </div>
  </div>
))

export const ReviewsPage = () => {

  return (
    <section className={c.reviewsPage}>
      <div className={`${c.reviewsPage__container} container`}>
      <BreadcrumbsComponent pageName={'Отзывы'} />
        <h2 className={c.reviewsPage__title}>Отзывы</h2>
        <div className={c.reviewsPage__innerContainer}>
          {reviewItems}
        </div>
      </div>
      <FloatButtonComponent />
    </section>
  );
};
