import React from 'react';
import { Input, ConfigProvider } from 'antd';
import c from './SearchComponent.module.scss';

const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const SearchComponent = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#f83939'
      },
    }}
  >
    <Search
      className={c.searchComponent}
      placeholder="Искать товары"
      onSearch={onSearch}
      maxLength={50}
      size={'large'}
      enterButton
      hoverBg='#000'
    />
  </ConfigProvider>
  
);
export default SearchComponent;