import c from './AssortmentCard.module.scss';
import { EyeOutlined, HeartOutlined, HeartFilled } from '@ant-design/icons';
import { Image } from 'antd';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite, deleteFavourite, updateFavourites } from '../../../redux/favouritesSlice';

export const AssortmentCard = ({ item, index }) => {
  const {image, name, price, unit} = item;
  
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const initialFavourites = JSON.parse(localStorage.getItem('favourites'));
    if (initialFavourites && initialFavourites.length > 0) {
      dispatch(updateFavourites(initialFavourites));
    }
  }, [dispatch]);  
  
  const favourites = useSelector(state => state.favourites);
  
  useEffect(() => {
    const isFavourite = favourites.some(fav => fav.key === index);
    setLiked(isFavourite);
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites, index]);

  const handleAddFavourite = () => {
    setLiked(true);
    dispatch(addFavourite({
      key: index,
      label: name,
      iconurl: image,
      price: price,
      unit: unit,
    }));
  };

  const handleDeleteFavourite = () => {
    setLiked(false);
    dispatch(deleteFavourite({ key: index }));
  };

  return (
    <div className={c.assortmentCard} key={index}>
      <div className={c.assortmentCard__image}>
        <Image src={image} alt={name} />
      </div>

      <div className={c.assortmentCard__textContent}>
        <h3 className={c.assortmentCard__title}>{name}</h3>
        <p className={c.assortmentCard__price}>{price} р./ {unit}.</p>
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
  );
};
