import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

export const CatalogCard = ({title, image, price, article, style}) => (
  <Card
    hoverable
    size='small'
    cover={<img alt="example" src={image} style={{aspectRatio: '1/1'}} />}
    style={style}
  >
    <Meta title={`${price} руб.`} description={title} article={article} />
  </Card>
);
