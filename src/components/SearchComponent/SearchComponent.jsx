import React, { useState } from 'react';
import { Input, ConfigProvider } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Search } = Input;

export const SearchComponent = ({ className, onSearch, onCloseDrawer }) => { // Принятие функции
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value) => {
    if (value.trim() !== '') {
      navigate(`/search?q=${encodeURIComponent(value)}`);
      setSearchValue('');
    } else {
      console.log('Введите значение для поиска');
    }
    onSearch && onSearch(value); // Вызов функции для обработки поиска
    onCloseDrawer && onCloseDrawer(); // Вызов функции для закрытия Drawer
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#f83939'
        },
      }}
    >
      <Search
        className={className}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Введите название или артикул"
        maxLength={50}
        size={'large'}
        enterButton
        required
        onSearch={handleSearch} // Использование локальной функции
      />
    </ConfigProvider>
  );
};
