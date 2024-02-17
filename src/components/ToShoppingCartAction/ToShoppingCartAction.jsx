import { CheckCircleFilled, ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd"
import { useEffect, useState } from "react";
import { addToShoppingCart, deleteFromShoppingCart } from "../../redux/shoppingCartSlice";
import { useDispatch } from "react-redux";

export const ToShoppingCartAction = ({item, text}) => {
  const [isInCart, setIsInCart] = useState(false);
  const dispatch = useDispatch();
  const { article } = item;
  
  // Проверяем, есть ли товар в списке избранных при открытии модального окна
  useEffect(() => {
    const goods = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    setIsInCart(goods.some(product => product.article === article));
  }, [article]);

  const handleAddToShoppingCart = () => {
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
  
  const shoppingCartButtonText = isInCart ? 'В корзине' : 'В корзину';
  const shoppingCartButtonIcon = isInCart ? <CheckCircleFilled style={{color: 'green'}} /> : <ShoppingCartOutlined />;

  return (
    <Button onClick={handleAddToShoppingCart}>{text && shoppingCartButtonText }{shoppingCartButtonIcon}</Button>
)};
