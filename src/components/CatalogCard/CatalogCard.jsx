import React, { useEffect, useState } from 'react';
import c from './CatalogCard.module.scss';
import { CatalogCardModal } from '../CatalogCardModal/CatalogCardModal';
import { Button } from 'antd';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addToFavourites, deleteFromFavourites } from '../../redux/favouritesSlice';

export const CatalogCard = ({...item}) => {
  const { article, title, price, oldPrice, image } = item;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    // Проверяем, есть ли товар в списке избранных при загрузке компонента
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.some(favorite => favorite.article === article));
  }, [article]);

  const toggleFavorites = (event) => {
    event.stopPropagation();
    // Переключаем статус избранного и обновляем локальное хранилище
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const index = favorites.findIndex(favorite => favorite.article === article);
    if (index !== -1) {
      favorites.splice(index, 1); // Удаляем избранный товар
      setIsFavorite(false);
      dispatch(deleteFromFavourites(item));
    } else {
      favorites.push(item); // Добавляем в избранное
      setIsFavorite(true);
      dispatch(addToFavourites(item));
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };
  
  const showModal = () => {
    setIsModalOpen(true);
  };
  
  const favoritesButtonIcon = isFavorite ? <HeartFilled style={{color: 'red'}} /> : <HeartOutlined />;

  const calculateDiscountPercentage = (price, oldPrice) => {
    if (oldPrice && oldPrice > price) {
      const discountPercentage = ((oldPrice - price) / oldPrice) * 100;
      return discountPercentage.toFixed(0); // Округляем до целого числа
    }
    return 0;
  };
  const discountPercentage = calculateDiscountPercentage(price, oldPrice);

  return (
    <>
      <div className={c.catalogCard} onClick={showModal}>
        <div className={c.catalogCard__imageWrapper}>
          <img src={image} width={200} height={200} alt={title} />
            <Button className={c.catalogCard__toFavouritesButton} onClick={toggleFavorites}>{favoritesButtonIcon}</Button>
        </div>
        <div className={c.catalogCard__content}>
          <div className={c.catalogCard__text}>
            <p className={c.catalogCard__title}>{title}</p>
          </div>
          <div className={c.catalogCard__priceBox}>
            <p className={c.catalogCard__price}>{price} руб.</p>
            {oldPrice && <><p className={c.catalogCard__oldPrice}>{oldPrice} руб. </p><span className={c.catalogCard__discountPercent}>-{discountPercentage}%</span></>}
          </div>
        </div>
      </div>
      <CatalogCardModal item={item} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} toggleFavorites={toggleFavorites} isFavorite={isFavorite} />
    </>
)};
