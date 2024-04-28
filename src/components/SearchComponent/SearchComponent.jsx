import React, { useState } from 'react';
import { Input, ConfigProvider } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Search } = Input;

export const SearchComponent = ({ className, onSearch, onCloseDrawer }) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value) => {
    if (value.trim() !== '') {
      navigate(`/search?q=${encodeURIComponent(value)}`);
      setSearchValue('');
    }
    onSearch && onSearch(value);
    onCloseDrawer && onCloseDrawer();
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FA3D03',
          borderRadius: '18px',
          fontFamily: 'Tilda Sans',
        },
      }}
    >
      <Search
        name='search'
        className={className}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Введите название или артикул"
        maxLength={50}
        size={'large'}
        allowClear
        enterButton
        required
        onSearch={handleSearch}
      />
      
    </ConfigProvider>
  );
};
