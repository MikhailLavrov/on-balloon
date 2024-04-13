import { catalogMenuData } from '../../data/catalogMenuData';
import c from './CatalogMenu.module.scss';
import { Link, useParams } from 'react-router-dom';
import { ColorPalette } from '../ColorPalette/ColorPalette';

export const CatalogMenu = () => {
  const { topcategory, category } = useParams();

  const menuItems = catalogMenuData.map(item => (
    <Link
      key={item.key}
      to={item.children ? `/catalog/${item.key}/${item.children[0].key}` : `/catalog/${item.key}`}
      className={c.catalogMenu__link}
      style={{ backgroundColor: item.key === topcategory ? '#9e7ffd' : '#f8f9f9',
      color: item.key === topcategory ? '#fff' : '#000', transition: 'all 200ms ease' }}
    >
      {item.label}
    </Link>
  ));

  return (
    <nav className={c.catalogMenu__nav}>
      {menuItems}
      {topcategory === 'balloons' && category && ColorPalette()}
    </nav>
  );
};
