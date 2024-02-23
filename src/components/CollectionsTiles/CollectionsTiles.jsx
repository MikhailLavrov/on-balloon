import { useDispatch } from "react-redux";
import { collectionsData } from "../../data/collectionsData";
import { setCurrentCategory } from "../../redux/outerCatalogNavSlice";
import c from './CollectionsTiles.module.scss';
import { Link } from "react-router-dom";

export const CollectionsTiles = ({anotherHandler}) => {
  const dispatch = useDispatch();

  const onClickHandler = (tile, anotherHandler) => {
    dispatch(setCurrentCategory({currentTopCategory: tile.key}));
    if (anotherHandler) {
      anotherHandler();
    }
  }

  const collection = collectionsData.map((tile, index) => {
    return (
      <Link className={c.collectionsTile} key={index} to={tile.link} onClick={() => onClickHandler(tile)}>
        <p className={c.collectionsTile__title}>{tile.label}</p>
        <div className={c.collectionsTile__imageWrapper}>
          <img className={c.collectionsTile__image} src={tile.image} alt={tile.label} />
        </div>
      </Link>
    )
  })

  return collection;
} 
