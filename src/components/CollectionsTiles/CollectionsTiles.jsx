import { useDispatch } from "react-redux";
import { collectionsData } from "../../data/collectionsData";
import { setCurrentCategory } from "../../redux/outerCatalogNavSlice";
import c from './CollectionsTiles.module.scss';
import { Link } from "react-router-dom";

export const CollectionsTiles = () => {
  const dispatch = useDispatch();

  const onClickHandler = (tile) => {
    dispatch(setCurrentCategory({currentTopCategory: tile.key}));
  }

  const collection = collectionsData.map((tile, index) => {
    return (
      <div className={c.collectionsTile} key={index}>
        <Link to={tile.link} className={c.collectionsTile__link} onClick={() => onClickHandler(tile)}>
          <p className={c.collectionsTile__title}>{tile.label}</p>
          <div className={c.collectionsTile__imageWrapper}>
            <img className={c.collectionsTile__image} src={tile.image} alt={tile.label} />
          </div>
        </Link>
      </div>
    )
  })

  return collection;
} 
