import { Badge } from "antd";
import { ProductCard } from "./ProductCard";
import c from './ProductCard.module.scss';

export const BadgedProductCard = ({ item }) => {
  return (
    item.oldPrice ? (
      <Badge.Ribbon className={c.styledBadge} text="Акция" color="red" key={item.article}>
        <ProductCard {...item} />
      </Badge.Ribbon>
    ) : item.hit ? (
      <Badge.Ribbon className={c.styledBadge} text="Хит" color="green" key={item.article}>
        <ProductCard {...item} />
      </Badge.Ribbon>
    ) : (
      <ProductCard key={item.article} {...item} />
    )
  )
}