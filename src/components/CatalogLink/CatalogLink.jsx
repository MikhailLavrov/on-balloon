import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AlignLeftOutlined, CloseOutlined } from '@ant-design/icons';
import c from './CatalogLink.module.scss';
import { motion } from 'framer-motion';

// Линк для хедера
export const CatalogLink = () => {
  const location = useLocation();

  return (
    <motion.div
      initial={{scale: 0.8}}
      animate={{scale: 1}}
      transition={{delay: 0.2, duration: 0.5}}
      className={c.catalog}
    >
      <Link 
        to={location.pathname==='/catalog' ? '/' : '/catalog'}
        className={c.catalog__link}
        style={location.pathname==='/catalog' ? {backgroundColor: '#fff', color: '#000', boxShadow: '0 0 0 1px #d9d9d9 inset'} : {}}
      >
        {location.pathname==='/catalog' ? <CloseOutlined /> : <AlignLeftOutlined />} 
        {location.pathname==='/catalog' ? 'Закрыть каталог' : 'Каталог товаров'}
      </Link>
    </motion.div>
  );
};
