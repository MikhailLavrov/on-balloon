import c from './ReviewsSection.module.scss';
import { reviewsData } from '../../data/reviewsData';
import { Link } from 'react-router-dom';

export const ReviewsSection = () => {

  const reviewItems = reviewsData.map((item, index) => (
    <div className={c.reviewItem} key={index}>
      <div className={c.reviewItem__header}>
        <div className={c.reviewItem__photo}>
          <img width={100} src={item.userPhoto} alt="Фото" />
        </div>
        <p className={c.reviewItem__name}>{item.name}</p>
      </div>
      <div className={c.reviewItem__content}>
        <p className={c.reviewItem__text}> {item.text} </p>
      </div>
    </div>
  ))
  
  return (
    <section className={c.reviews}>
      <div className='container'>
        <h2 className={c.reviews__title}>
          Отзывы клиентов
          <Link to={'/reviews'} className={c.reviews__showMoreLink}>{'>'}</Link>
        </h2>
        <div className={c.reviews__content}>
          {reviewItems}
        </div>
      </div>
    </section>
  )
}
