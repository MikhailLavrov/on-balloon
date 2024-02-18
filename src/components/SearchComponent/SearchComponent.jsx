import React, { useState } from 'react';
import { Input, ConfigProvider } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Search } = Input;

const SearchComponent = ({ className }) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const onSearch = (value, _e, info) => {
    navigate(`/search?q=${encodeURIComponent(value)}`);
    setSearchValue('');
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
        onSearch={onSearch}
        maxLength={50}
        size={'large'}
        enterButton
      />
    </ConfigProvider>
  );
};

export default SearchComponent;
