import c from './Services.module.scss';
import { ServiceCard } from './ServiceCard/ServiceCard';
import { Link } from 'react-router-dom';
import { servicesData } from '../..//context/servicesData';

const ServiceCards = servicesData.map((card, index) => (
  <ServiceCard card={card} index={index} key={index} />
))

export const Services = () => {
  return (
    <section className={c.services}>
      <div className='container'>
        <h2 className={c.services__title}>Ищите готовое решение оформления?</h2>
        <p className={c.services__subtitle}>Вы можете подобрать оформление воздушными шарами из тех вариантов, которые мы уже делали. Посмотрите примеры наших работ</p>
        <ul className={c.services__list}>
          {ServiceCards}
        </ul>
        <Link className={c.services__link} to={'/services'}>Посмотреть все решения</Link>
      </div>
    </section>
  )
}
