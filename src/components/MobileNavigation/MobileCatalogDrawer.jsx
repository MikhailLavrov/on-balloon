import { LeftOutlined } from "@ant-design/icons";
import { InnerDrawerItems } from "./InnerDrawerItems";
import { Drawer } from "antd";
import { CollectionsTiles } from "../CollectionsTiles/CollectionsTiles";
import { SearchComponent } from "../SearchComponent/SearchComponent";
import c from './MobileNavigation.module.scss';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDrawerState } from "../../redux/catalogDrawerSlice";

export const InnerMobileCatalogDrawer = (props) => {
  const {childrenDrawerVisible, currentTopCategory, closeChildrenDrawer, closeAllDrawers} = props;
  
  const drawerVisibleState = useSelector(state => state.catalogDrawer.mainDrawerIsOpened)
  const dispatch = useDispatch();

  const openDrawer = () => {
    !drawerVisibleState && dispatch(setDrawerState({mainDrawerIsOpened: true}))
  }

  return (
    <Drawer
      title="Категория"
      placement="left"
      closable={true}
      onClose={closeChildrenDrawer}
      open={childrenDrawerVisible}
      className={`catalog__drawer`}
      closeIcon={<LeftOutlined onClick={openDrawer} />}
    >
      <InnerDrawerItems currentTopCategory={currentTopCategory} outerHandler={closeAllDrawers} />
    </Drawer>
  )
}

export const MobileCatalogDrawer = ({toggleDrawer}) => {

  const drawerVisibleState = useSelector(state => state.catalogDrawer.mainDrawerIsOpened)
  const childrenDrawerVisibleState = useSelector(state => state.catalogDrawer.childrenDrawerIsOpened)

  const [currentTopCategory, setCurrentTopCategory] = useState(null);
  const dispatch = useDispatch();
  
  // Функция для обработки выбора тайла
  const onCollectionClick = (key) => {
    setCurrentTopCategory(key);
    !childrenDrawerVisibleState && dispatch(setDrawerState({childrenDrawerIsOpened: true}))
  };
  const closeChildrenDrawer = () => {
    childrenDrawerVisibleState && dispatch(setDrawerState({childrenDrawerIsOpened: false}))
  };
  const closeAllDrawers = () => {
    closeChildrenDrawer();
    toggleDrawer();
  };

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

      <InnerMobileCatalogDrawer 
        childrenDrawerVisible={childrenDrawerVisibleState}
        closeChildrenDrawer={closeChildrenDrawer}
        currentTopCategory={currentTopCategory}
        closeAllDrawers={closeAllDrawers}
        toggleDrawer={toggleDrawer}
      />
    </Drawer>
  )
}
