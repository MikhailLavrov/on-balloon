import c from './Advantages.module.scss';
import { advantagesData } from '../../data/advantagesData';

const advantagesList = advantagesData.map((item, index) => {
  const {title, text, image} = item;
  return (
    <li className={c.advantages__item} key={index}>
      <div className={c.advantages__image}>{image}</div>
      <h3 className={c.advantages__itemName}>{title}</h3>
      <p className={c.advantages__itemText}>{text}</p>
    </li>
  )
})

export const Advantages = () => {
  return (
    <section className={c.advantages}>
      <h2 className='visually-hidden'>Преимущества работы с нами</h2>
      <div className="container">
        <ul className={c.advantages__list}>
          {advantagesList}
        </ul>
      </div>
    </section>
  )
}
