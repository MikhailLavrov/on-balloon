import { Drawer } from "antd";
import { SearchComponent } from "../SearchComponent/SearchComponent";
import c from './MobileCatalogDrawer.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { setDrawerState } from "../../redux/catalogDrawerSlice";
import { setBurgerIsOpened } from "../../redux/burgerMenuSlice";
import { useNavigate } from "react-router-dom";
import TREND_TILE_IMAGE from "../../assets/logonew.webp";
import BALLOONS_TILE_IMAGE from "../../assets/collections/balloons.webp";
import ANIMATION_TILE_IMAGE from "../../assets/collections/animation.webp";
import PHOTOZONE_TILE_IMAGE from "../../assets/collections/photozone.webp";
import COMMERCIAL_TILE_IMAGE from "../../assets/collections/attractions.webp";
import { catalogMenuData } from './../../data/catalogData/catalogMenuData';

export const MobileCatalogDrawer = () => {
  const drawerVisibleState = useSelector(state => state.catalogDrawer.mainDrawerIsOpened)
  const isBurgerOpenedState = useSelector(state => state.burgerMenu.isOpened)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const toggleDrawer = () => {
    !drawerVisibleState ? dispatch(setDrawerState({mainDrawerIsOpened: true})) : dispatch(setDrawerState({mainDrawerIsOpened: false}))
    isBurgerOpenedState && dispatch(setBurgerIsOpened({ isOpened: false }));
  }
  
  const onTopMenuClickHandler = (item) => {
    navigate(`/catalog/${item.key}`)
    toggleDrawer();
  }

  const tileImage = (key) => {
    switch (key) {
      case 'trend':
        return TREND_TILE_IMAGE;
      case 'balloons':
        return BALLOONS_TILE_IMAGE;
      case 'animation':
        return ANIMATION_TILE_IMAGE;
      case 'photozone':
        return PHOTOZONE_TILE_IMAGE;
      case 'commercial':
        return COMMERCIAL_TILE_IMAGE;
      default:
        return null;
    }
  }

  const menuItems = catalogMenuData.map(item => (
    <li
      key={item.key}
      onClick={() => onTopMenuClickHandler(item)}
      className={c.catalogMenu__tile}
    >
      <span>{item.label}</span>
      <img src={tileImage(item.key)} alt={item.key} />
    </li>
  ))

  return (
    <Drawer
      title="Каталог"
      placement="left"
      closable={true}
      onClose={toggleDrawer}
      open={drawerVisibleState}
      className={`catalog__drawer`}
    >
      <SearchComponent onCloseDrawer={toggleDrawer} className={c.searchComp} />
      <ul className={c.catalogMenu__tiles}>
        {menuItems}
      </ul>
    </Drawer>
  )
}
