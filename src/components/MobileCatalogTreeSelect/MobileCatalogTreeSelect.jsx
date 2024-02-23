import React, { useState } from 'react';
import { Select, Space } from 'antd';
import { catalogMenuData } from '../../data/catalogMenuData';
import c from './MobileCatalogTreeSelect.module.scss';
import { topLevelTranslations, sublevelTranslations } from '../../data/catalogData/catalogMenuTranslations';
import { useDispatch } from 'react-redux';
import { setCurrentCategory } from '../../redux/outerCatalogNavSlice'; // Подставьте правильный путь к вашему файлу с действиями

const topCategory = [];
const catalogTreeData = {};

catalogMenuData.forEach((item) => {
  topCategory.push(item.key);
  if (item.children) {
    catalogTreeData[item.key] = item.children.map((child) => child.key);
  } else {
    catalogTreeData[item.key] = [];
  }
});

export const MobileCatalogTreeSelect = () => {
  const [subCategories, setSubCategories] = useState(catalogTreeData[topCategory[0]]);
  const [selectedTopCategory, setSelectedTopCategory] = useState(topCategory[0]);
  const [selectedSubCategory, setSelectedSubCategory] = useState(catalogTreeData[topCategory[0]][0]);
  const dispatch = useDispatch();

  const handleTopCategoryChange = (value) => {
    setSubCategories(catalogTreeData[value]);
    setSelectedTopCategory(value);
    setSelectedSubCategory(catalogTreeData[value][0]);
    dispatch(setCurrentCategory({ currentTopCategory: value, currentCategory: catalogTreeData[value][0] }));
  };
  
  const handleSubCategoryChange = (value) => {
    setSelectedSubCategory(value);
    dispatch(setCurrentCategory({ currentTopCategory: selectedTopCategory, currentCategory: value }));
  };

  return (
    <Space wrap className={c.mobileCatalogTreeSelect}>
      <span>Выберите категорию</span>
      <Select
        defaultValue={selectedTopCategory}
        style={{
          width: 150,
        }}
        onChange={handleTopCategoryChange}
        options={topCategory.map((topCategory) => ({
          label: topLevelTranslations[topCategory] || topCategory,
          value: topCategory,
        }))}
      />
      <span>Выберите раздел</span>
      <Select
        style={{
          width: 150,
        }}
        disabled={!selectedSubCategory}
        value={selectedSubCategory}
        onChange={handleSubCategoryChange}
        options={subCategories.map((subCategory) => ({
          label: sublevelTranslations[subCategory] || subCategory,
          value: subCategory,
        }))}
      />
    </Space>
  );
};
