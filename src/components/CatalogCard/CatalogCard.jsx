import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const CatalogCard = ({title, image, price, article, style}) => (
  <Card
    hoverable
    size='small'
    cover={<img alt="example" src={image} style={style} />}
  >
    <Meta title={`${price} руб.`} description={title} article={article} />
  </Card>
);

export default CatalogCard;
