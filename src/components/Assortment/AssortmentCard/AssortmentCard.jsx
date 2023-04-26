import c from './AssortmentCard.module.scss';
import { EyeOutlined, HeartOutlined, HeartFilled } from '@ant-design/icons';
import { Image } from 'antd';
import { useState } from 'react';

export const AssortmentCard = ({item, index}) => {
  const [liked, setLiked] = useState(false);

  const handleLikeToggle = () => {
    setLiked(!liked);
  };

  return (
    <div className={c.assortmentCard} key={index}>
      <div className={c.assortmentCard__image}>
        <Image src={item.image} alt={item.name} />
      </div>

      <div className={c.assortmentCard__textContent}>
        <h3 className={c.assortmentCard__title}>{item.name}</h3>
        <p className={c.assortmentCard__price}>{item.price}</p>
      </div>

      <div className={c.assortmentCard__actions}>
        <a className={c.assortmentCard__actionLink} href onClick={handleLikeToggle}>
          {/* <EyeOutlined /> */}
          {liked ? <HeartFilled style={{color: 'red'}} /> : <HeartOutlined />}
        </a>
        <a href className={c.assortmentCard__actionLink}>
          <EyeOutlined />
        </a>
      </div>
    </div>
  )
}
