import c from './CatalogMenu.module.scss';
import { Link, useParams } from 'react-router-dom';
import { ColorPalette } from '../ColorPalette/ColorPalette';
import { catalogMenuData } from './../../data/catalogData/catalogMenuData';

export const CatalogMenu = () => {
  const { topcategory, category } = useParams();

  const menuItems = catalogMenuData.map(item => (
    <Link
      key={item.key}
      to={item.children ? `/catalog/${item.key}/${item.children[0].key}` : `/catalog/${item.key}`}
      className={`${c.catalogMenu__link} ${item.key === topcategory ? c.catalogMenu__linkActive : ''}`}
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
