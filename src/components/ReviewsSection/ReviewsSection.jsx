import c from './ReviewsSection.module.scss';

export const reviewsData = [
  {
    name: 'Екатерина',
    photo: 'https://sun9-39.userapi.com/s/v1/ig2/ZGCRA2J1FoK_2g4zX0Yul9U7KFIEL9tfxqf47uMPyvNLlvsEr2o72wGqKs3ZhozESrdEqq9BH_L43b6EJV-qpoHm.jpg?size=50x50&quality=95&crop=269,264,1161,1161&ava=1',
    text: 'Шары понравились, ни один не лопнул, спасибо вам большое!',
  },
  {
    name: 'Ксения',
    photo: 'https://sun9-72.userapi.com/s/v1/ig2/wocdf0U4ovpyDNRs91pbP0kgKgXXYm1xPwY8AAV4FzPAjjqwshvp49HdWh93lJduuLNakLDHYPPLN61oEssVW8wI.jpg?size=50x50&quality=95&crop=0,0,1381,1381&ava=1',
    text: 'Спасибо Вам большое за шарики ❤дочка в восторге 😍 и я счастлива ❤ наш первый годик украсили Ваши шарики ❤❤❤!',
  },
  {
    name: 'Иван',
    photo: 'https://sun9-11.userapi.com/s/v1/ig2/bo-_tFS8aFcmRWRKeZYgGpJ1LWzdBUpRfNAvg6IvTxTpGe4SFKA8nLBGCrEvQylSTTzRVrNttgdKaXzOkHh4dCUV.jpg?size=50x50&quality=95&crop=160,49,1246,1246&ava=1',
    text: '11 февраля был ровно месяц как шарики стоят) Все супер! Именинница осталась довольна) До новых встреч✨',
  },
];

export const ReviewsSection = () => {

  const reviewItems = reviewsData.map((item, index) => (
      <div className={c.reviewItem} key={index}>
        <div className={c.reviewItem__photo}>
          <img width={100} src={item.photo} alt="Фото" />
        </div>
        <div className={c.reviewItem__content}>
          <p className={c.reviewItem__name}>{item.name}</p>
          <q className={c.reviewItem__text}> {item.text} </q>
        </div>
      </div>
  ))
  
  return (
    <section className={c.reviews}>
      <div className='container'>
        <h2 className={c.reviews__title}>Отзывы наших клиентов</h2>
        <div className={c.reviews__content}>
          {reviewItems}
        </div>
      </div>
    </section>
  )
}
