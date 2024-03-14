import { Drawer } from "antd";
import { CollectionsTiles } from "../CollectionsTiles/CollectionsTiles";
import { SearchComponent } from "../SearchComponent/SearchComponent";
import c from './MobileCatalogDrawer.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { setDrawerState } from "../../redux/catalogDrawerSlice";
import { setCurrentCategory } from "../../redux/catalogNavSlice";
import { InnerMobileCatalogDrawer } from "./InnerMobileCatalogDrawer";

export const MobileCatalogDrawer = ({toggleDrawer}) => {
  const drawerVisibleState = useSelector(state => state.catalogDrawer.mainDrawerIsOpened)
  const childrenDrawerVisibleState = useSelector(state => state.catalogDrawer.childrenDrawerIsOpened)
  const dispatch = useDispatch()
  
  // Функция для обработки выбора тайла
  const onCollectionClick = (key) => {
    dispatch(setCurrentCategory({currentTopCategory: key}))
    !childrenDrawerVisibleState && dispatch(setDrawerState({childrenDrawerIsOpened: true}))
  }
  const closeAllDrawers = () => {
    childrenDrawerVisibleState && dispatch(setDrawerState({childrenDrawerIsOpened: false}))
    toggleDrawer()
  }

  return (
    <Drawer
      title="Каталог"
      placement="left"
      closable={true}
      onClose={closeAllDrawers}
      open={drawerVisibleState}
      className={`catalog__drawer`}
    >
      <SearchComponent onCloseDrawer={closeAllDrawers} className={c.searchComp} />

      <div className={c.mobileNavigation__tiles}>
        <CollectionsTiles outerHandler={(key) => onCollectionClick(key)} />
      </div>

      <InnerMobileCatalogDrawer />
    </Drawer>
  )
}
