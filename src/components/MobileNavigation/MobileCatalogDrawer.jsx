import { LeftOutlined } from "@ant-design/icons";
import { InnerDrawerItems } from "./InnerDrawerItems";
import { Drawer } from "antd";
import { CollectionsTiles } from "../CollectionsTiles/CollectionsTiles";
import { SearchComponent } from "../SearchComponent/SearchComponent";
import c from './MobileNavigation.module.scss';
import { useState } from "react";

export const InnerMobileCatalogDrawer = (props) => {
  const {childrenDrawerVisible, currentTopCategory, closeChildrenDrawer, toggleDrawer} = props;

  const outerDrawerHandler = () => {
    closeChildrenDrawer();
    toggleDrawer();
  }

  return (
    <Drawer
        title="Категория"
        placement="left"
        closable={true}
        onClose={closeChildrenDrawer}
        open={childrenDrawerVisible}
        className={`catalog__drawer`}
        closeIcon={<LeftOutlined onClick={() => console.log('close')} />}
      >
        <InnerDrawerItems currentTopCategory={currentTopCategory} outerHandler={outerDrawerHandler} />

    </Drawer>
  )
}

export const MobileCatalogDrawer = (props) => {
  const { drawerVisible, childrenDrawerVisible, openChildrenDrawer, closeChildrenDrawer, toggleDrawer } = props;

  const [currentTopCategory, setCurrentTopCategory] = useState(null);

  // Функция для обработки выбора тайла
  const onCollectionClick = (key) => {
    setCurrentTopCategory(key);
    openChildrenDrawer();
  };

  return (
    <Drawer
      title="Каталог"
      placement="left"
      closable={true}
      onClose={() => toggleDrawer()}
      open={drawerVisible}
      className={`catalog__drawer`}
    >

      <SearchComponent onCloseDrawer={() => toggleDrawer()} className={c.searchComp} />

      <div className={c.mobileNavigation__tiles}>
        <CollectionsTiles outerHandler={(key) => onCollectionClick(key)} />
      </div>

      <InnerMobileCatalogDrawer 
        childrenDrawerVisible={childrenDrawerVisible}
        closeChildrenDrawer={closeChildrenDrawer}

        currentTopCategory={currentTopCategory}

        toggleDrawer={toggleDrawer}
      />
    </Drawer>
  )
}
