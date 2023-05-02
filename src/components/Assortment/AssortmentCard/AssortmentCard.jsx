import c from './AssortmentCard.module.scss';
import { EyeOutlined, HeartOutlined, HeartFilled } from '@ant-design/icons';
import { Image } from 'antd';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite, deleteFavourite } from '../../../redux/favouritesSlice';

export const AssortmentCard = ({ item, index }) => {
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();
  const favourites = useSelector(state => state.favourites);

  useEffect(() => {
    const isFavourite = favourites.some(fav => fav.key === index);
    setLiked(isFavourite);
  }, [favourites, index]);

  const handleAddFavourite = () => {
    console.log(index);
    setLiked(true);
    dispatch(addFavourite({
      key: index,
      label: item.name,
      iconurl: item.image,
    }));
  };

  const handleDeleteFavourite = () => {
    setLiked(false);
    dispatch(deleteFavourite({ key: index }));
  };

  useEffect(() => {
    const isFavourite = favourites.some(fav => fav.key === index);
    setLiked(isFavourite);
  }, [favourites, index]);
  
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
        <button className={c.assortmentCard__actionLink} onClick={liked ? handleDeleteFavourite : handleAddFavourite} title='В избранное'>
          {liked ? <HeartFilled style={{color: 'red'}} /> : <HeartOutlined />}
        </button>
        <a href="#a" className={c.assortmentCard__actionLink} title='Подробнее'>
          <EyeOutlined />
        </a>
      </div>
    </div>
  )
}
