import React, { useCallback, useEffect, useState } from 'react';
import { CatalogCardModal } from '../CatalogCardModal/CatalogCardModal';
import { Button, Image } from 'antd';
import { CheckCircleFilled, HeartFilled, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addToFavourites, deleteFromFavourites } from '../../redux/favouritesSlice';
import { addToShoppingCart, deleteFromShoppingCart } from '../../redux/shoppingCartSlice';
import c from './CatalogCard.module.scss';
import FALLBACK from '../../assets/catalog/fallback.webp';
import { useSearchParams } from 'react-router-dom';

export const CatalogCard = ({...item}) => {
  const { article, title, price, oldPrice, image } = item;
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const dispatch = useDispatch();

// Корзина
  useEffect(() => {
    const goods = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    setIsInCart(goods.some(product => product.article === article));
  }, [article]);

  const togglePurchases = useCallback((event) => {
    event.stopPropagation();
    let goods = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    const index = goods.findIndex(product => product.article === article);
    if (index !== -1) {
      goods = goods.filter((_, i) => i !== index);
      setIsInCart(false); // Устанавливаем в false только для текущего товара
      dispatch(deleteFromShoppingCart(item))
    } else {
      goods.push(item);
      setIsInCart(true); // Устанавливаем в true только для текущего товара
      dispatch(addToShoppingCart(item))
    }
    localStorage.setItem('shoppingCart', JSON.stringify(goods));
  }, [article, dispatch, item]);

  const shoppingCartButtonIcon = isInCart ? <CheckCircleFilled style={{color: 'white'}} /> : <ShoppingCartOutlined />;

// Избранное
  useEffect(() => {
    // Проверяем, есть ли товар в списке избранных при загрузке компонента
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.some(favorite => favorite.article === article));
  }, [article]);

  const toggleFavorites = useCallback((event) => {
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
  }, [article, dispatch, item]);

  const favoritesButtonIcon = isFavorite ? <HeartFilled style={{color: 'red'}} /> : <HeartOutlined />;
  
// Модалка
  const showModal = () => {
    const params = {};

    if (searchParams.has("palette")) {
      const color = searchParams.get("palette")
      params.palette = color
    };

    if (searchParams.has("q")) {
      const query = searchParams.get("q")
      params.q = query
    };

    params.product = article

    setIsModalOpen(true);
    setSearchParams(params);
  };
  
// Скидка
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
          <Image
            src={image}
            width={200}
            height={200}
            alt={title}
            preview={false}
            fallback={FALLBACK}
          />
          <Button className={c.catalogCard__toFavouritesButton} onClick={toggleFavorites}>{favoritesButtonIcon}</Button>
        </div>
        <div className={c.catalogCard__content}>
          <div className={c.catalogCard__text}>
            <p className={c.catalogCard__title}>{title}</p>
          </div>
          <div className={c.catalogCard__priceBox}>
            <p className={c.catalogCard__price}>{price}<span>&#8381;</span></p>
            {oldPrice && 
              <div className={c.catalogCard__oldPriceBox}>
                <p className={c.catalogCard__oldPrice}>{oldPrice}<span>&#8381;</span></p>
                <span className={c.catalogCard__discountPercent}>-{discountPercentage}%</span>
              </div>
            }
            <Button onClick={togglePurchases} size='medium' className={`${c.catalogCard__toCartButton} ${isInCart ? c.inCart : c.notInCart}`}>
              {shoppingCartButtonIcon}
            </Button>
          </div>
        </div>
      </div>
      <CatalogCardModal 
        item={item} 
        isModalOpen={isModalOpen} 
        setIsModalOpen={setIsModalOpen} 
        toggleFavorites={toggleFavorites} 
        isFavorite={isFavorite}
        togglePurchases={togglePurchases}
        isInCart={isInCart}
      />
    </>
)};
