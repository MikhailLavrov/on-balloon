import React from 'react';
import c from './CatalogCard.module.scss';
import { Link } from 'react-router-dom';

export const CatalogCard = ({title, image, price, oldPrice}) => (
  <Link className={c.catalogCard}>
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
  </Link>
);
