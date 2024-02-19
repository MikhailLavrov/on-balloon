import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import c from './MobileNavigation.module.scss';
import { mobileNavigationData } from '../../data/mobileNavigationData';

export const MobileNavigation = () => {
  const location = useLocation();
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    const foundItem = mobileNavigationData.find(item => item.link === location.pathname);
    setCurrentItem(foundItem);
  }, [location]);

  const navigationItems = mobileNavigationData.map(item => {
    const isActive = currentItem && currentItem.link === item.link;

    return (
      <div className={c.mobileNavigation__linkWrapper} key={item.link}>
        <Link to={item.link} className={`${c.mobileNavigation__link}  ${isActive ? c.active : ''}`}>
          {item.icon} {item.title}
        </Link>
      </div>
    );
  });

  return (
    <div className={c.mobileNavigation}>
      <div className={c.mobileNavigation__container}>
        {navigationItems}
      </div>
    </div>
  );
};
