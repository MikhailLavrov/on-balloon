import React, { useState } from 'react';
import { Select, Space } from 'antd';
import { catalogMenuData } from '../../data/catalogMenuData';
import c from './MobileCatalogTreeSelect.module.scss';
import { topLevelTranslations, sublevelTranslations } from '../../data/catalogData/catalogMenuTranslations';

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
  const [selectedSubCategory, setSelectedSubCategory] = useState(catalogTreeData[topCategory[0]][0]);
  
  const handleCategoryChange = (value) => {
    setSubCategories(catalogTreeData[value]);
    setSelectedSubCategory(catalogTreeData[value][0]);
  };
  const onSubCategoryChange = (value) => {
    setSelectedSubCategory(value);
  };

  return (
    <Space wrap className={c.mobileCatalogTreeSelect}>
      <Select
        defaultValue={topCategory[0]}
        style={{
          width: 150,
        }}
        onChange={handleCategoryChange}
        options={topCategory.map((topCategory) => ({
          label: topLevelTranslations[topCategory] || topCategory,
          value: topCategory,
        }))}
      />
      <Select
        style={{
          width: 150,
        }}
        disabled={!selectedSubCategory}
        value={selectedSubCategory}
        onChange={onSubCategoryChange}
        options={subCategories.map((subCategory) => ({
          label: sublevelTranslations[subCategory] || subCategory,
          value: subCategory,
        }))}
      />
    </Space>
  );
};
