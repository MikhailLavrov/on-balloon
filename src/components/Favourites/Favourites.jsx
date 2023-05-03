import c from './Favourites.module.scss';
import { Badge, Dropdown } from 'antd';
import { HeartOutlined, ReadOutlined, CloseOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { deleteFavourite } from '../../redux/favouritesSlice';
import { ShowAllFavourites } from './ShowAllFavourites/ShowAllFavourites';

export const Favourites = ({ headerRef }) => {
  const dispatch = useDispatch();
  const favourites = useSelector(state => state.favourites);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const dropdownHide = () => {
    setDropdownOpen(false);
  };

  const handleDropdownOpenChange = (newOpen) => {
    setDropdownOpen(newOpen);
  };

  const handleRemoveFromFavourites = useCallback((key) => {
    dispatch(deleteFavourite({ key }));
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = (event) => {
      if (dropdownOpen && headerRef.current && !headerRef.current.contains(event.target)) {
        dropdownHide();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dropdownOpen, headerRef]);

  const favouritesList = useMemo(() => favourites.map(item => ({
    key: item.key,
    label: (
      <div className={c.favourites__item}>
        <span className={c.favourites__name}>{item.label}</span>
        <button
          className={c.favourites__delButton}
          type='button'
          onClick={() => handleRemoveFromFavourites(item.key)}
        >
          <CloseOutlined />
        </button>
      </div>
    ),
    icon: <img width={30} height={30} src={item.iconurl} alt={item.label} />
  })), [favourites, handleRemoveFromFavourites]);

  const slicedFavouritesList = useMemo(() => favouritesList.slice(0, 5), [favouritesList]);

  const emptyFavouritesList = useMemo(() => ([{
    key: 1,
    label: 'Список пуст',
    icon: <ReadOutlined />
  }]), []);

  const menu = favourites.length === 0 
    ? { items: emptyFavouritesList } 
    : { items: [...slicedFavouritesList, { key: 'delButton', label: <ShowAllFavourites favourites={favourites} setDropdownOpen={setDropdownOpen} handleRemoveFromFavourites={handleRemoveFromFavourites} /> }] };

  return (
    <Dropdown
      key="dropdown"
      menu={menu}
      placement="bottomRight"
      trigger={['click']}
      open={dropdownOpen}
      onOpenChange={handleDropdownOpenChange}
      arrow
    >
      <div className={c.favourites} title='Избранное'>
        <Badge count={favourites.length}>
          <HeartOutlined />
        </Badge>
        <p>Избранное</p>
      </div>
    </Dropdown>
  );
};
