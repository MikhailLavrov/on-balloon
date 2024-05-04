import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { animationData } from '../../../data/catalogData/animationData';
import { attractionsData } from '../../../data/catalogData/attractionsData';
import { balloonsData } from '../../../data/catalogData/balloonsData';
import { photozoneData } from '../../../data/catalogData/photozoneData';
import { BreadcrumbsComponent } from '../../BreadcrumbsComponent/BreadcrumbsComponent';
import c from './SearchResultsPage.module.scss';
import EMPTY_IMAGE from '../../../assets/empty.webp';
import { FloatButtonComponent } from '../../FloatButtonComponent/FloatButtonComponent';
import { BadgedProductCard } from '../../ProductCard/BadgedProductCard';

const allData = [...animationData, ...attractionsData, ...balloonsData, ...photozoneData];

const SearchResultsPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
    
    const lowerQuery = query && query.toLowerCase();
    const words = lowerQuery && lowerQuery.split(/\s+/); // Разделение запроса на отдельные слова
    
    const filteredResults = allData.filter(item => {
      const { article, title, description } = item;
      
      const lowerTitle = title && title.toLowerCase();
      const lowerDescription = description && description.toLowerCase();
    
      // Проверяем, содержатся ли все слова из запроса в артикуле
      const containsWholeArticle = words.some(word =>
        word.length > 3 && article && article.toLowerCase() === word
      );
  
      // Проверяем, содержатся ли оба слова из запроса в имени или описании
      const containsBothWords = words.some(word =>
        word.length > 2 && ((lowerTitle && lowerTitle.includes(word)) || (lowerDescription && lowerDescription.includes(word)))
      );

      return lowerQuery && (containsWholeArticle || containsBothWords);
    });
  
    setSearchResults(filteredResults);
  }, [query]);

  // Количество позиций в корзине
  let itemsAmount = '';
  const itemCount = searchResults.length;
  
  // Функция для определения окончания числа
  const getEnding = num => {
    const strNum = num.toString();
    const lastDigit = parseInt(strNum.charAt(strNum.length - 1));
  
    if (num === 1 || (num > 20 && lastDigit === 1)) {
      return '';
    // eslint-disable-next-line no-mixed-operators
    } else if (num > 1 && num < 5 || (num > 20 && lastDigit > 1 && lastDigit < 5)) {
      return 'а';
    } else {
      return 'ов';
    }
  };
  
  if (itemCount === 1 || (itemCount > 20 && parseInt(itemCount.toString().charAt(itemCount.toString().length - 1)) === 1)) {
    itemsAmount = `Найден ${itemCount} товар`;
  } else {
    const ending = getEnding(itemCount);
    itemsAmount = `Найдено ${itemCount} товар${ending}`;
  }
  
  return (
    <section className={c.searchResults}>
      <div className={`${c.searchResults__container} container`}>
      <BreadcrumbsComponent pageName={'Поиск'} />
        <h2 className={c.searchResults__title}>{itemsAmount} по запросу '{query}'</h2>
        <div className={c.searchResults__innerContainer}>
          {searchResults.length > 0 && searchResults.map((item) => <BadgedProductCard item={{...item}} />)}
        </div>
        {searchResults.length === 0 && (
          <div className={c.empty}>
            <div className={c.empty__imageWrapper}>
              <img width={200} src={EMPTY_IMAGE} alt="Пустая страница" />
            </div>
            <span className={c.empty__text}>По вашему запросу ничего не найдено</span>
          </div>
        )}
      </div>
      <FloatButtonComponent />
    </section>
  );
};

export default SearchResultsPage;