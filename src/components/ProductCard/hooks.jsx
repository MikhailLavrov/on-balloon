import { useCallback, useState } from "react";

// Кастомный хук для работы с локальным хранилищем
export function useLocalStorage(key) {
  const getFromStorage = () => {
    const data = JSON.parse(localStorage.getItem(key));
    return Array.isArray(data) ? data : [];
  };

  const [storedData, setStoredData] = useState(getFromStorage);

  const setToStorage = (data) => {
    localStorage.setItem(key, JSON.stringify(data));
    setStoredData(data);
  };

  return [storedData, setToStorage];
}

// Кастомный хук для управления состоянием модального окна
export const useModal = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return [isOpen, openModal, closeModal];
}

// Кастомный хук для управления состоянием избранного и корзины
export function useFavoritesAndCart({item}) {
  const [favorites, setFavorites] = useLocalStorage('favorites');
  const [cart, setCart] = useLocalStorage('shoppingCart');
  const isInFavorites = favorites.some((favorite) => favorite.article === item.article);
  const isInCart = cart.some((product) => product.article === item.article);
  
  const toggleFavorite = useCallback(() => {
    setFavorites((prevFavorites) => {
      const index = prevFavorites.findIndex((favorite) => favorite.article === item.article);
      if (index !== -1) {
        const newFavorites = [...prevFavorites.slice(0, index), ...prevFavorites.slice(index + 1)];
        return newFavorites;
      } else {
        const newFavorites = [...prevFavorites, { ...item }];
        return newFavorites;
      }
    });
  }, [item, setFavorites]);

  const toggleCart = useCallback(() => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((product) => product.article === item.article);
      if (index !== -1) {
        const newCart = [...prevCart.slice(0, index), ...prevCart.slice(index + 1)];
        return newCart;
      } else {
        const newCart = [...prevCart, { ...item }];
        return newCart;
      }
    });
  }, [item, setCart]);

  return { isInFavorites, isInCart, toggleFavorite, toggleCart };
}

// Кастомный хук для управления количеством товара
export function useQuantity(initialCount) {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount((prevCount) => Math.min(prevCount + 1, 20));
  const decrement = () => setCount((prevCount) => Math.max(prevCount - 1, 1));
  return [count, increment, decrement];
}
