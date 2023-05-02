import c from './Favourites.module.scss';
import { Badge, Dropdown } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export const Favourites = ({headerRef}) => {
  const favourites = useSelector(state => state.favourites)
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownHide = () => {
    setDropdownOpen(false);
  };

  const handleDropdownOpenChange = (newOpen) => {
    setDropdownOpen(newOpen);
  };

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

  const children = favourites.map(item => ({
    key: item.key,
    label: item.label,
    icon: <img width={30} height={30} src={item.iconurl} alt="" />
  }))

  return (
    <Dropdown 
      menu={{items: children}}
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
  )
}
