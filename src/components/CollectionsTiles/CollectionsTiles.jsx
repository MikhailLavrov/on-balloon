import { useDispatch } from "react-redux";
import { collectionsData } from "../../data/collectionsData";
import { setCurrentCategory } from "../../redux/outerCatalogNavSlice";
import c from './CollectionsTiles.module.scss';
import { Link, useNavigate } from "react-router-dom";

export const CollectionsTiles = ({outerHandler}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickHandler = (tile) => {
    dispatch(setCurrentCategory({currentTopCategory: tile.key}));

    if (outerHandler) {
      outerHandler(tile.key);
    } else {
      navigate('/catalog')
    }
  }

  const collection = collectionsData.map((tile, index) => {
    return (
      <Link className={c.collectionsTile} key={index} onClick={(e) => {
        e.preventDefault();
        onClickHandler(tile);
      }}>
        <p className={c.collectionsTile__title}>{tile.label}</p>
        <div className={c.collectionsTile__imageWrapper}>
          <img className={c.collectionsTile__image} src={tile.image} alt={tile.label} />
        </div>
      </Link>
    )
  })

  return collection;
} 
