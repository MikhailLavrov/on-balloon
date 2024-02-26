import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useEffect, useState } from "react";
import { addToFavourites, deleteFromFavourites } from "../../redux/favouritesSlice";
import { useDispatch } from "react-redux";

export const ToFavouritesAction = ({ item, text }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const { article } = item;

  useEffect(() => {
    // Проверяем, есть ли товар в списке избранных при загрузке компонента
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.some(favorite => favorite.article === article));
  }, [article]);

  const toggleFavorites = () => {
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
  
  const favoritesButtonText = isFavorite ? 'В избранном' : 'В избранное';
  const favoritesButtonIcon = isFavorite ? <HeartFilled style={{color: 'red'}} /> : <HeartOutlined />;

  return (
    <Button onClick={toggleFavorites}>{text && favoritesButtonText }{favoritesButtonIcon}</Button>
  );
};
