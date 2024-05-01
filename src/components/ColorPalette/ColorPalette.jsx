import React, { useState, useEffect } from 'react';
import { useSearchParams, useParams } from "react-router-dom";
import { balloonsData } from "../../data/catalogData/balloonsData";
import c from './ColorPalette.module.scss';
import { Button } from "antd";

const orderedColors = [
  'white',
  'yellow',
  'goldenrod',
  'mistyrose',
  'orange',
  'saddlebrown',
  'deeppink',
  'red',
  'lime',
  'dodgerblue',
  'darkorchid',
  'silver',
  'black'
];

export const ColorPalette = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedColor, setSelectedColor] = useState(searchParams.get("palette"));
  const [categoryChanged, setCategoryChanged] = useState(false);
  const { category } = useParams();

  // Проверяем наличие параметра цвета при загрузке компонента
  useEffect(() => {
    const paletteParam = searchParams.get("palette");
    setSelectedColor(paletteParam);
  }, [searchParams]);

  // Сброс выбранного цвета при изменении категории
  useEffect(() => {
    if (categoryChanged) {
      setSelectedColor('');
      setCategoryChanged(false);
    }
  }, [category, categoryChanged]);
  
  
  const handleColorClick = (color) => {
    setSelectedColor(color);
    setSearchParams({ palette: color });
  };

  const handleClearSearch = () => {
    setSelectedColor('');
    setSearchParams({});
  };
  
  let palette;
  
  if (category) {
    const currentCategoryItems = balloonsData.filter(item => item.category.includes(category));
    
    palette = currentCategoryItems.reduce((acc, item) => {
      if (item.palette) {
        acc.push(...item.palette);
      }
      return acc;
    }, []);
  } else {
    palette = balloonsData.reduce((acc, item) => {
      if (item.palette) {
        acc.push(...item.palette);
      }
      return acc;
    }, []);
  }

  const sortedPalette = orderedColors.filter(color => palette.includes(color));

  return (
    sortedPalette.length > 0 &&
    <div className={c.colorPalette}>
      <span className={c.colorPalette__title}>Фильтр по цвету:</span>
      <div className={c.colorPalette__container}>
        {sortedPalette.map((color) => (
          <div
            key={color}
            className={`${c.colorPalette__item} ${selectedColor === color ? c.active : ''}`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color)}
          ></div>
        ))}
      </div>
      {selectedColor && <Button onClick={handleClearSearch}>Очистить</Button>}
    </div>
  );
};
