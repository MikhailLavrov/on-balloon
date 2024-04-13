import React, { useState, useEffect } from 'react';
import { useSearchParams, useParams } from "react-router-dom";
import { balloonsData } from "../../data/catalogData/balloonsData";
import c from './ColorPalette.module.scss';
import { Button } from "antd";

export const ColorPalette = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedColor, setSelectedColor] = useState(searchParams.get("palette") || '');
  const { category } = useParams();

  useEffect(() => {
    setSelectedColor('');
  }, [category]);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setSearchParams({ palette: color });
  };

  const handleClearSearch = () => {
    setSelectedColor('');
    setSearchParams({});
  };

  const currentCategoryItems = balloonsData.filter(item => item.category.includes(category));
  const palette = currentCategoryItems.reduce((acc, item) => {
    if (item.palette) {
      acc.push(...item.palette);
    }
    return acc;
  }, []);

  const uniquePalette = [...new Set(palette)];

  return (
    uniquePalette.length > 0 &&
    <div className={c.colorPalette}>
      <span className={c.colorPalette__title}>Фильтр по цвету:</span>
      <div className={c.colorPalette__container}>
        {uniquePalette.map((color) => (
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
