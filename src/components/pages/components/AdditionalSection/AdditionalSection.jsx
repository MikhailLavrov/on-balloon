import { Link } from 'react-router-dom';
import { eventServicesData } from '../../../EventServices/EventServices';
import c from './AdditionalSection.module.scss';

export const AdditionalSection = ({ location }) => {
  const additionalData = eventServicesData.filter(item => item.link !== location.pathname);

  const additionalItems = additionalData.map((item, index) => (
    <div className={c.additional__item} key={index}>
      <Link to={item.link}>
        <div className={c.additional__itemImageWrapper}>
          <img src={item.image} alt={item.title} width={200} />
        </div>
      </Link>
      <p className={c.additional__itemTitle}>{item.title}</p>
    </div>
  ))

  return (
    <div className={c.additional}>
      <p className={c.additional__title}>
        Популярные услуги:
      </p>
      <div className={c.additional__content}>
        {additionalItems}
      </div>
    </div>
  )
}
