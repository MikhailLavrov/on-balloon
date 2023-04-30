import { useState, useEffect } from 'react';
import { ServiceCard } from './ServiceCard/ServiceCard';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';
import c from './Services.module.scss';

const MOBILE_BREAKPOINT = 768;

export const Services = () => {
  const [serviceCards, setServiceCards] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const slicedServiceCards = screenWidth < MOBILE_BREAKPOINT
        ? servicesData.slice(0, 2)
        : servicesData.slice(0, 4);
      setServiceCards(slicedServiceCards);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderedServiceCards = serviceCards.map((card, index) => (
    <ServiceCard card={card} index={index} key={index} />
  ));

  return (
    <section className={c.services} id='services_section'>
      <div className='container'>
        <h2 className={c.services__title}>Ищите готовое решение оформления?</h2>
        <p className={c.services__subtitle}>Вы можете подобрать оформление воздушными шарами из тех вариантов, которые мы уже делали. Посмотрите примеры наших работ</p>
        <ul className={c.services__list}>
          {renderedServiceCards}
        </ul>
        <Link className={c.services__link} to={'/services'}>Посмотреть все решения</Link>
      </div>
    </section>
  )
}
