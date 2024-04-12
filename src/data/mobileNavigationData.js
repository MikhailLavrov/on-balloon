import { AlignLeftOutlined, EnvironmentOutlined, HeartOutlined, HomeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { useSelector } from "react-redux";

export const MobileNavigationData = () => {
  const favouritesCountState = useSelector(state => state.favourites.count);
  const shoppingCartCountState = useSelector(state => state.shoppingCart.count);

  const mobileNavigationData = [
    {
      title: 'Главная',
      link: '/',
      icon: <HomeOutlined style={{ fontSize: '20px' }} />
    },
    {
      title: 'Каталог',
      link: '/catalog',
      icon: <AlignLeftOutlined style={{ fontSize: '20px' }} />
    },
    {
      title: 'Корзина',
      link: '/cart',
      icon: <Badge size='small' count={shoppingCartCountState}><ShoppingCartOutlined style={{ fontSize: '20px' }} /></Badge>
    },
    {
      title: 'Избранное',
      link: '/favourites',
      icon: <Badge size='small' count={favouritesCountState}><HeartOutlined style={{ fontSize: '20px' }} /></Badge>
    },
    {
      title: 'Контакты',
      link: '/contacts',
      icon: <EnvironmentOutlined style={{ fontSize: '20px' }} />
    }
  ];

  return mobileNavigationData;
}
