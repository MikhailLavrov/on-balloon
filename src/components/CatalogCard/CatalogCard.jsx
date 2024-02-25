import React, { useState } from 'react';
import c from './CatalogCard.module.scss';
import { CatalogCardModal } from '../CatalogCardModal/CatalogCardModal';
import { ToFavouritesAction } from '../ToFavouritesAction/ToFavouritesAction';

export const CatalogCard = ({...item}) => {
  const {category, article, title, description, price, oldPrice, image, hit, count} = item;

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className={c.catalogCard} onClick={showModal}>
        <ToFavouritesAction item={{...item}} />
        <div className={c.catalogCard__imageWrapper}>
          <img src={image} width={200} alt={title} />
        </div>
        <div className={c.catalogCard__content}>
          <div className={c.catalogCard__priceBox}>
            <p className={c.catalogCard__price}>{price} руб.</p>
            {oldPrice && <p className={c.catalogCard__oldPrice}>{oldPrice} руб.</p>}
          </div>
          <div className={c.catalogCard__text}>
            <p className={c.catalogCard__title}>{title}</p>
          </div>
        </div>
      </div>
      <CatalogCardModal item={item} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
)};
