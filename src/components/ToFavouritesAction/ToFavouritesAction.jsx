import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Button } from "antd"
import { useEffect, useState } from "react";
import { addToFavourites, deleteFromFavourites } from "../../redux/favouritesSlice";
import { useDispatch } from "react-redux";

export const ToFavouritesAction = ({item, text}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const { article } = item;
  
  // Проверяем, есть ли товар в списке избранных при открытии модального окна
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.some(favorite => favorite.article === article));
  }, [article]);

  const addToFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const index = favorites.findIndex(favorite => favorite.article === article);
    if (index !== -1) {
      favorites = favorites.filter((_, i) => i !== index);
      setIsFavorite(false); // Устанавливаем в false только для текущего товара
      dispatch(deleteFromFavourites(item))
    } else {
      favorites.push(item);
      setIsFavorite(true); // Устанавливаем в true только для текущего товара
      dispatch(addToFavourites(item))
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };
  
  const favoritesButtonText = isFavorite ? 'В избранном' : 'В избранное';
  const favoritesButtonIcon = isFavorite ? <HeartFilled style={{color: 'red'}} /> : <HeartOutlined />;

  return (
    <Button onClick={addToFavorites}>{text && favoritesButtonText }{favoritesButtonIcon}</Button>
)};
