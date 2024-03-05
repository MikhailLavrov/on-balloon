import React, { useEffect, useState } from 'react';
import c from './CatalogRowCard.module.scss';
import { Button } from 'antd';
import { CloseOutlined, HeartFilled, HeartOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addToFavourites, deleteFromFavourites } from '../../redux/favouritesSlice';
import { deleteFromShoppingCart, updateItemInShoppingCart } from '../../redux/shoppingCartSlice';
import { CatalogCardModal } from '../CatalogCardModal/CatalogCardModal';

export const CatalogRowCard = ({...item}) => {
  const { article, title, price, image, count } = item;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  let [amount, setAmount] = useState(count);
  const dispatch = useDispatch();

  // Количество +/-
  const incrementAmount = (event) => {
    event.stopPropagation();
    if (amount < 20) {
      const newAmount = amount + 1;
      setAmount(newAmount);
      dispatch(updateItemInShoppingCart({ article, newCount: newAmount }));
      updateLocalStorage(newAmount);
    }
  };
  
  const decrementAmount = (event) => {
    event.stopPropagation();
    if (amount > 1) {
      const newAmount = amount - 1;
      setAmount(newAmount);
      dispatch(updateItemInShoppingCart({ article, newCount: newAmount }));
      updateLocalStorage(newAmount);
    }
  };

  const updateLocalStorage = (newAmount) => {
    let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    const index = shoppingCart.findIndex(product => product.article === article);
    if (index !== -1) {
      shoppingCart[index].count = newAmount;
      localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    }
  };

  // Избранное
  useEffect(() => {
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
  
  const favoritesButtonIcon = isFavorite ? <HeartFilled style={{color: 'red'}} /> : <HeartOutlined />;
  
  // Открытие модалки
  const showModal = () => {
    setIsModalOpen(true);
  };

  // Удалить из корзины
  const deleteFromCartHandler = (item) => {
    let goods = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    const index = goods.findIndex(product => product.article === item.article);
    if (index !== -1) {
      goods = goods.filter((_, i) => i !== index);
      dispatch(deleteFromShoppingCart(item))
    }
    localStorage.setItem('shoppingCart', JSON.stringify(goods));
  }

  let totalItemPrice = amount * price;

  return (
    <>
      <div className={c.catalogCard} onClick={showModal}>
        <div className={c.catalogCard__imageWrapper}>
          <img src={image} width={50} height={50} alt={title} />
        </div>
        <div className={c.catalogCard__header}>
          <p className={c.catalogCard__article}>Арт. {article}</p>
          <div className={c.catalogCard__actions}>
            <Button size='small' className={c.catalogCard__toFavouritesButton} onClick={toggleFavorites}>{favoritesButtonIcon}</Button>
            <Button size='small' className={c.catalogCard__delButton} onClick={() => deleteFromCartHandler(item)}><CloseOutlined /></Button>
          </div>
        </div>
        <div className={c.catalogCard__titleWrapper}>
          <p className={c.catalogCard__title}>{title}</p>
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
            <Button bg='red' onClick={incrementAmount}>+</Button>
          </div>
        </div>
      </div>
      <CatalogCardModal item={item} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} toggleFavorites={toggleFavorites} isFavorite={isFavorite} />
    </>
)};
