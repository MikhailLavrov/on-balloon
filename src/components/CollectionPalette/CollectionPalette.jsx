import React, { useState, useEffect } from 'react';
import { useSearchParams, useParams } from "react-router-dom";
import { balloonsData } from "../../data/catalogData/balloonsData";
import c from './CollectionPalette.module.scss';
import { Button } from "antd";

const orderedCollections = [
  'brawlstars',
  'buba',
  'maskedheroes',
  'unicorns',
  'femail',
  'animals',
  'space',
  'kitties',
  'ladybug',
  'love',
  'mashaandbear',
  'mickeymouse',
  'minions',
  'male',
  'orangecow',
  'princesses',
  'birthgirl',
  'birthboy',
  'bluetractor',
  'sweets',
  'superheroes',
  'transport',
  'threecats',
  'wednesday',
  'coldheart',
  'pawpatrol',
  'numeric',
  'school',
];

const translateCollection = {
  'brawlstars': 'Бравл Старс',
  'buba': 'Буба',
  'maskedheroes': 'Герои в масках',
  'unicorns': 'Единороги',
  'femail': 'Женская',
  'animals': 'Животные',
  'space': 'Космос',
  'kitties': 'Кошечки',
  'ladybug': 'Леди Баг',
  'love': 'Любовь',
  'mashaandbear': 'Маша и медведь',
  'mickeymouse': 'Микки Маус',
  'minions': 'Миньоны',
  'male': 'Мужская',
  'orangecow': 'Оранжевая корова',
  'princesses': 'Принцессы',
  'birthgirl': 'Рождение девочки',
  'birthboy': 'Рождение мальчика',
  'bluetractor': 'Синий трактор',
  'sweets': 'Сладости',
  'superheroes': 'Супергерои',
  'transport': 'Транспорт',
  'threecats': 'Три кота',
  'wednesday': 'Уэнсдей',
  'coldheart': 'Холодное сердце',
  'pawpatrol': 'Щенячий патруль',
  'numeric': 'Шары с цифрой',
  'school': 'Школа',
};

export const CollectionPalette = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCollection, setSelectedCollection] = useState(searchParams.get("collection"));
  const [categoryChanged, setCategoryChanged] = useState(false);
  const { category } = useParams();

  // Проверяем наличие параметра категории при загрузке компонента
  useEffect(() => {
    const collectionParam = searchParams.get("collection");
    setSelectedCollection(collectionParam);
  }, [searchParams]);

  // Сброс выбранной коллекции при изменении категории
  useEffect(() => {
    if (categoryChanged) {
      setSelectedCollection('');
      setCategoryChanged(false);
    }
  }, [category, categoryChanged]);
  
  
  const handleCollectionClick = (collectionName) => {
    setSelectedCollection(collectionName);
    setSearchParams({ collection: collectionName });
  };

  const handleClearSearch = () => {
    setSelectedCollection('');
    setSearchParams({});
  };
  
  let palette;
  
  if (category) {
    const currentCategoryItems = balloonsData.filter(item => item.category.includes(category));
    
    palette = currentCategoryItems.reduce((acc, item) => {
      if (item.collection) {
        acc.push(...item.collection);
      }
      return acc;
    }, []);
  } else {
    palette = balloonsData.reduce((acc, item) => {
      if (item.collection) {
        acc.push(...item.collection);
      }
      return acc;
    }, []);
  }

  const sortedPalette = orderedCollections.filter(collection => palette.includes(collection));

  return (
    sortedPalette.length > 0 &&
    <div className={c.collectionPalette}>
      <span className={c.collectionPalette__title}>Коллекция:</span>
      <ul className={c.collectionPalette__list}>
        {sortedPalette.map((collection) => (
          <li
            key={collection}
            className={`${c.collectionPalette__item} ${selectedCollection === collection ? c.active : ''}`}
            onClick={() => handleCollectionClick(collection)}
          >
            {translateCollection[collection]}
          </li>
        ))}
      </ul>
      {selectedCollection && <Button className={c.clearButton} onClick={handleClearSearch}>Очистить</Button>}
    </div>
  );
};
