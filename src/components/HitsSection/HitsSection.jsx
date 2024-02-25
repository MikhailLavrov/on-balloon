import c from './HitsSection.module.scss';
import { Link } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';
import { animationData } from '../../data/catalogData/animationData';
import { attractionsData } from '../../data/catalogData/attractionsData';
import { balloonsData } from '../../data/catalogData/balloonsData';
import { photozoneData } from '../../data/catalogData/photozoneData';
import { CatalogCard } from '../CatalogCard/CatalogCard';
import { Badge } from 'antd';

const allData = [...animationData, ...attractionsData, ...balloonsData, ...photozoneData];
const hitsData = allData.filter((item) => item.hit).slice(0, 5);

export const HitsSection = () => {

  const hitsSlide = hitsData.map((item, index) => (
      <Badge.Ribbon className={c.styledBadge} text="Хит" color="green" key={index}>
        <CatalogCard {...item} />
      </Badge.Ribbon>
  ))
  
  return (
    <section className={c.hits}>
      <div className='container'>
        {/* <h2 className={c.hits__title}>Хиты</h2> */}
        <Link className={c.hits__titleLink} to={'/catalog'}>
          <span>Хиты</span>
          <RightOutlined className={c.hits__titleIcon} />
        </Link>
        <div className={c.hits__content}>
          {hitsSlide}
        </div>
      </div>
    </section>
  )
}
