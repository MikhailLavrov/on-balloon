import React, { useState } from 'react';
import { Input, ConfigProvider } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Search } = Input;

const SearchComponent = ({ className }) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const onSearch = (value, _e, info) => {
    if (value.trim() !== '') {
      navigate(`/search?q=${encodeURIComponent(value)}`);
      setSearchValue('');
    } else {
      // Вывод сообщения об ошибке или какие-то другие действия при пустом поле
      console.log('Введите значение для поиска');
    }
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
        required // Добавляем атрибут required
        onSearch={onSearch}
      />
    </ConfigProvider>
  );
};

export default SearchComponent;
