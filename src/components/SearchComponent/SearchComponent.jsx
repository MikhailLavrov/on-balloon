import React, { useEffect, useRef, useState } from 'react';
import { Input, ConfigProvider } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Search } = Input;

export const SearchComponent = ({ className, onSearch, onCloseDrawer, autoFocus }) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef();

  const sharedProps = {
    ref: inputRef,
  };

  useEffect(() => {
    if (autoFocus) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  const handleSearch = (value) => {
    if (value.trim() !== '') {
      navigate(`/search?q=${encodeURIComponent(value)}`);
      setSearchValue('');
    } else {
      console.log('Введите значение для поиска');
    }
    onSearch && onSearch(value);
    onCloseDrawer && onCloseDrawer();
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FA3D03'
        },
      }}
    >
      <Search
        ref={inputRef}
        className={className}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Введите название или артикул"
        maxLength={50}
        size={'large'}
        enterButton
        required
        onSearch={handleSearch}
        {...sharedProps}
      />
    </ConfigProvider>
  );
};
