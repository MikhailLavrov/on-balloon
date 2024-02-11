import c from './ServicesPage.module.scss';
import { servicesData } from '../../../data/servicesData';
import { Link } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';

const renderedServiceItems = servicesData.map((card, index) => (
  <li className={c.servicesPage__item} key={index}>
    <div>
      <img width={200} src={card.image} alt={card.title} loading="lazy" />
    </div>
    <div>
      <h3>{card.title}</h3>
      <div>
        <p>{card.text}</p>
        <a href={card.link.href}>{card.link.text}</a>
      </div>
    </div>
  </li>
));

export const ServicesPage = () => {
  return (
    <section className={c.servicesPage}>
      <Link className={c.servicesPage__backLink} to={'/'}><ArrowLeftOutlined /></Link>
      <div className='container'>
        <h2 className={c.servicesPage__title}>Готовые решения</h2>
        <ul className={c.servicesPage__list}>
          {renderedServiceItems}
        </ul>
      </div>
    </section>
  )
}
