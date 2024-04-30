import React, { useEffect, useState, useMemo, useCallback } from 'react';
import c from './ProductRowCard.module.scss';
import { Button } from 'antd';
import { CloseOutlined, HeartFilled, HeartOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addToFavourites, deleteFromFavourites } from '../../redux/favouritesSlice';
import { addToShoppingCart, deleteFromShoppingCart, updateItemInShoppingCart } from '../../redux/shoppingCartSlice';
import { ProductCardModal } from '../ProductCardModal/ProductCardModal';
import { useModal } from '../ProductCard/hooks';

export const ProductRowCard = ({...item}) => {
  const { article, title, price, image, count } = item;
  
  const [isFavorite, setIsFavorite] = useState(false);
  const [amount, setAmount] = useState(count);
  const dispatch = useDispatch();
  const [isInCart, setIsInCart] = useState(false);

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

  const toggleFavorites = useCallback((event) => {
    event.stopPropagation();
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const index = favorites.findIndex(favorite => favorite.article === article);
    if (index !== -1) {
      favorites.splice(index, 1);
      setIsFavorite(false);
      dispatch(deleteFromFavourites(item));
    } else {
      favorites.push(item);
      setIsFavorite(true);
      dispatch(addToFavourites(item));
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [article, dispatch, item]);

  const favoritesButtonIcon = useMemo(() => isFavorite ? <HeartFilled style={{color: 'red'}} /> : <HeartOutlined />, [isFavorite]);

  const deleteFromCartHandler = useCallback(() => {
    let goods = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    const index = goods.findIndex(product => product.article === item.article);
    if (index !== -1) {
      goods = goods.filter((_, i) => i !== index);
      dispatch(deleteFromShoppingCart(item))
    }
    localStorage.setItem('shoppingCart', JSON.stringify(goods));
  }, [dispatch, item]);

  const updateLocalStorage = useCallback((newAmount) => {
    let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    const index = shoppingCart.findIndex(product => product.article === article);
    if (index !== -1) {
      shoppingCart[index].count = newAmount;
      localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    }
  }, [article]);

  const incrementAmount = useCallback((event) => {
    event.stopPropagation();
    if (amount < 20) {
      const newAmount = amount + 1;
      setAmount(newAmount);
      dispatch(updateItemInShoppingCart({ article, newCount: newAmount }));
      updateLocalStorage(newAmount);
    }
  }, [amount, article, dispatch, updateLocalStorage]);

  const decrementAmount = useCallback((event) => {
    event.stopPropagation();
    if (amount > 1) {
      const newAmount = amount - 1;
      setAmount(newAmount);
      dispatch(updateItemInShoppingCart({ article, newCount: newAmount }));
      updateLocalStorage(newAmount);
    }
  }, [amount, article, dispatch, updateLocalStorage]);

  let totalItemPrice = amount * price;

  return (
    <>
      <div className={c.catalogCard}>
        <div className={c.catalogCard__imageWrapper}>
          <img src={image} width={50} height={50} alt={title} />
        </div>
        <div className={c.catalogCard__header}>
          <p className={c.catalogCard__article}>Арт. {article}</p>
          <div className={c.catalogCard__actions}>
            <Button size='small' className={c.catalogCard__toFavouritesButton} onClick={toggleFavorites}>{favoritesButtonIcon}</Button>
            <Button size='small' className={c.catalogCard__delButton} onClick={deleteFromCartHandler}><CloseOutlined /></Button>
          </div>
        </div>
        <div className={c.catalogCard__titleWrapper}>
          <p className={c.catalogCard__title} onClick={() => openModal()}>{title}</p>
        </div>
        <div className={c.catalogCard__priceWrapper}>
          <p className={c.catalogCard__price}>
            <span>{price} &#8381;</span> 
            <span>за шт.</span>
          </p>
          <p className={c.catalogCard__sum}>
            <span>{totalItemPrice} &#8381;</span> 
            <span>сумма</span>
          </p>
          <div className={c.catalogCard__sumCounter}>
            <Button onClick={decrementAmount}>-</Button>
            <span>{amount}</span>
            <Button onClick={incrementAmount}>+</Button>
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
        isInCart={isInCart}
        togglePurchases={togglePurchases}
      />
    </>
  );
};
