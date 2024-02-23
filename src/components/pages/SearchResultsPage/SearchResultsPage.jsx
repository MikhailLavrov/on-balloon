import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { animationData } from '../../../data/catalogData/animationData';
import { attractionsData } from '../../../data/catalogData/attractionsData';
import { balloonsData } from '../../../data/catalogData/balloonsData';
import { photozoneData } from '../../../data/catalogData/photozoneData';
import { CatalogCard } from '../../CatalogCard/CatalogCard';
import { Empty } from 'antd';
import c from './SearchResultsPage.module.scss';
import {BreadcrumbsComponent} from '../../BreadcrumbsComponent/BreadcrumbsComponent'; 

const allData = [...animationData, ...attractionsData, ...balloonsData, ...photozoneData];

export const SearchResultsPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const filteredResults = allData.filter(item => {
      const { article, title, description } = item;
      const lowerQuery = query && query.toLowerCase(); // Проверяем наличие query перед вызовом toLowerCase()
      return (
        query &&
        ((typeof article === 'string' && article.toLowerCase() === lowerQuery) ||
          (typeof title === 'string' && title.toLowerCase().includes(lowerQuery)) ||
          (typeof description === 'string' && description.toLowerCase().includes(lowerQuery)))
      );
    });
    setSearchResults(filteredResults);
  }, [query]);

  return (
    <section className={c.searchResults}>
      <div className={`${c.searchResults__container} container`}>
      <BreadcrumbsComponent pageName={'Поиск'} />
        <h2 className={c.searchResults__title}>Результаты поиска по запросу '{query}'</h2>
        <div className={c.searchResults__innerContainer}>
          {searchResults.length > 0 &&
            searchResults.map(item => (
              <CatalogCard key={item.article} {...item} />
            ))}
        </div>
        {searchResults.length === 0 && (
          <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{
              height: 200,
              marginTop: 30,
              display: 'flex',
              justifyContent: 'center',
            }}
            description={<span>По вашему запросу ничего не найдено</span>}
          />
        )}
      </div>
    </section>
  );
};
