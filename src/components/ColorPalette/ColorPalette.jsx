import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useParams } from "react-router-dom";
import { balloonsData } from "../../data/catalogData/balloonsData";
import c from './ColorPalette.module.scss';
import { Button } from "antd";
import { CloseOutlined } from '@ant-design/icons';

export const translateColor = {
  'white': 'Белый',
  'yellow': 'Желтый',
  'goldenrod': 'Золото',
  'mistyrose': 'Розовое золото',
  'orange': 'Оранжевый',
  'saddlebrown': 'Коричневый',
  'deeppink': 'Розовый',
  'red': 'Красный',
  'lime': 'Зеленый',
  'dodgerblue': 'Синий',
  'mediumaquamarine': 'Аквамарин',
  'darkorchid': 'Фиолетовый',
  'silver': 'Серебро',
  'black': 'Черный',
};

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
  'mediumaquamarine',
  'darkorchid',
  'silver',
  'black'
];

export const ColorPalette = ({ outerHandler }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedColor, setSelectedColor] = useState(searchParams.get("palette"));
  const [categoryChanged, setCategoryChanged] = useState(false);
  const { category } = useParams(); 
  
  const colorWheelRef = useRef(null);

  useEffect(() => {
    // Прокрутка колеса к выбранному цвету
    if (selectedColor && colorWheelRef.current) {
      const colorIndex = orderedColors.indexOf(selectedColor);
      const sectorSize = 360 / orderedColors.length;
      const angle = colorIndex * sectorSize;
      colorWheelRef.current.style.transform = `rotate(${-angle}deg)`;
    }
  }, [selectedColor]);

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
    outerHandler && outerHandler();
  };

  const handleClearSearch = (e) => {
    e.stopPropagation()
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
      <span className={c.colorPalette__title}>Цвет:</span>
      <ul className={c.colorPalette__list}>
        {sortedPalette.map((color) => (
          <li
            key={color}
            onClick={() => handleColorClick(color)}
            className={`${c.colorPalette__item} ${selectedColor === color ? c.active : ''}`}
          >
            <span
              className={`${color === 'goldenrod' || color === 'mistyrose' ? c.goldColor : ''} ${c.colorPalette__color}`}
              style={{ backgroundColor: color }}
            ></span>
            {selectedColor === color && <Button className={c.clearButton} icon={<CloseOutlined size={'small'} className={c.clearButton__icon} />} onClick={handleClearSearch} />}
          </li>
        ))}
      </ul>
    </div>
  );
};
