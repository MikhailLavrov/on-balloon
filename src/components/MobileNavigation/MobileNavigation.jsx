import { Link } from 'react-router-dom';
import c from './MobileNavigation.module.scss';
import { AlignLeftOutlined, EnvironmentOutlined, HeartOutlined, HomeOutlined, ShoppingCartOutlined } from '@ant-design/icons';

export const MobileNavigation = () => {
  return (
    <div className={c.mobileNavigation}>
      <div className={c.mobileNavigation__container}>
        <div className={c.mobileNavigation__linkWrapper}>
          <Link className={c.mobileNavigation__link}><HomeOutlined className={c.mobileNavigation__linkIcon} /> Главная</Link>
        </div>
        <div className={c.mobileNavigation__linkWrapper}>
          <Link className={c.mobileNavigation__link}><AlignLeftOutlined className={c.mobileNavigation__linkIcon} /> Каталог</Link>
        </div>
        <div className={c.mobileNavigation__linkWrapper}>
          <Link className={c.mobileNavigation__link}><ShoppingCartOutlined className={c.mobileNavigation__linkIcon} /> Корзина</Link>
        </div>
        <div className={c.mobileNavigation__linkWrapper}>
          <Link className={c.mobileNavigation__link}><HeartOutlined className={c.mobileNavigation__linkIcon} /> Избранное</Link>
        </div>
        <div className={c.mobileNavigation__linkWrapper}>
          <Link className={c.mobileNavigation__link}><EnvironmentOutlined className={c.mobileNavigation__linkIcon} /> Контакты</Link>
        </div>
      </div>
    </div>
  )
};
