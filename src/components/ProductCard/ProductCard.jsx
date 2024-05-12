import React, { useEffect, useState } from 'react';
import { ProductCardModal } from '../ProductCardModal/ProductCardModal';
import { Button, Image, Spin } from 'antd';
import { CheckCircleFilled, HeartFilled, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addToFavourites, deleteFromFavourites } from '../../redux/favouritesSlice';
import { addToShoppingCart, deleteFromShoppingCart } from '../../redux/shoppingCartSlice';
import c from './ProductCard.module.scss';
import FALLBACK from '../../assets/catalog/fallback.webp';
import { useSearchParams } from 'react-router-dom';
import { useModal } from './hooks';

export const ProductCard = ({...item}) => {
  const { article, title, price, oldPrice, image } = item;

  const [searchParams, setSearchParams] = useSearchParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const dispatch = useDispatch();

  // Custom hooks
  const [ isOpen, openModal, closeModal ] = useModal();

  useEffect(() => {
    // Проверяем, есть ли товар в корзине при загрузке компонента
    const goods = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    setIsInCart(goods.some(product => product.article === article));

    // Проверяем, есть ли товар в списке избранных при загрузке компонента
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.some(favorite => favorite.article === article));
  }, [article]);

  const togglePurchases = (event) => {
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
  };

  const shoppingCartButtonIcon = isInCart ? <CheckCircleFilled style={{color: 'white'}} /> : <ShoppingCartOutlined />;

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

  const favoritesButtonIcon = isFavorite ? <HeartFilled style={{color: 'red'}} /> : <HeartOutlined />;
  
// Модалка
  const showModal = () => {
    const params = {};

    if (searchParams.has("palette")) {
      const color = searchParams.get("palette")
      params.palette = color
    };

    if (searchParams.has("collection")) {
      const collectionName = searchParams.get("collection")
      params.collection = collectionName
    };

    if (searchParams.has("q")) {
      const query = searchParams.get("q")
      params.q = query
    };

    params.product = article

    openModal();
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
            width={'auto'}
            alt={title}
            preview={false}
            fallback={FALLBACK}
            placeholder={
              <div className={c.imagePreloader} >
                <Spin size='small'/>
              </div>
            }
          />
          <Button className={c.catalogCard__toFavouritesButton} onClick={toggleFavorites}>{favoritesButtonIcon}</Button>
        </div>
        <div className={c.catalogCard__content}>
          <div className={c.catalogCard__text}>
            <p className={c.catalogCard__title}>{title}</p>
          </div>
          <div className={c.catalogCard__priceBox}>
            <p className={c.catalogCard__price}>{price.toLocaleString('ru-RU')}<span>&#8381;</span></p>
            {oldPrice && 
              <div className={c.catalogCard__oldPriceBox}>
                <p className={c.catalogCard__oldPrice}>{oldPrice.toLocaleString('ru-RU')}<span>&#8381;</span></p>
                <span className={c.catalogCard__discountPercent}>-{discountPercentage}%</span>
              </div>
            }
            <Button onClick={togglePurchases} size='medium' className={`${c.catalogCard__toCartButton} ${isInCart ? c.inCart : c.notInCart}`}>
              {shoppingCartButtonIcon}
            </Button>
          </div>
        </div>
      </div>
      <ProductCardModal 
        item={item}
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
        toggleFavorites={toggleFavorites} 
        isFavorite={isFavorite}
        togglePurchases={togglePurchases}
        isInCart={isInCart}
      />
    </>
)};
