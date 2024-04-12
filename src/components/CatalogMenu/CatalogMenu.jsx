import { catalogMenuData } from '../../data/catalogMenuData';
import c from './CatalogMenu.module.scss';
import { Link, useParams } from 'react-router-dom';
import { balloonsData } from '../../data/catalogData/balloonsData';

export const CatalogMenu = () => {
  const {topcategory, category} = useParams();
  
  const handleColorClick = (color) => {
    console.log(color)
  }
  
  const renderColorPalette = () => {
    const currentCategoryItems = balloonsData.filter(item => item.category.includes(category));
    const palette = currentCategoryItems.reduce((acc, item) => {
      if (item.palette) {
          return [...acc, item.palette];
      }
      return acc;
    }, []);
  
    // Оставить только уникальные цвета
    const uniquePalette = Array.from(new Set(palette));
    console.log(uniquePalette)

    return uniquePalette.map((color, index) => (
      <div
        key={index}
        className={c.color__option}
        style={{ backgroundColor: color, width: '20px', height: '20px' }}
        onClick={() => handleColorClick(color)}
      ></div>
    ));
  };

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
  ))

  return (
    <nav className={c.catalogMenu__nav}>
      {menuItems}
      {topcategory === 'balloons' && category && renderColorPalette()}
    </nav>
  )
};
