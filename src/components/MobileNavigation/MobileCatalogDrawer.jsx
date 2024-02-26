import { LeftOutlined } from "@ant-design/icons";
import { InnerDrawerItems } from "./InnerDrawerItems";
import { Drawer } from "antd";
import { CollectionsTiles } from "../CollectionsTiles/CollectionsTiles";
import { SearchComponent } from "../SearchComponent/SearchComponent";
import c from './MobileNavigation.module.scss';
import { useState } from "react";

export const MobileCatalogDrawer = ({ drawerVisible, childrenDrawerVisible, toggleDrawer, showChildrenDrawer, onChildrenDrawerClose }) => {
  const [currentTopCategory, setCurrentTopCategory] = useState(null);

  const outerDrawerHandler = () => {
    onChildrenDrawerClose();
    toggleDrawer();
  }

  // Функция для обработки выбора тайла
  const onCollectionClick = (key) => {
    setCurrentTopCategory(key);
    showChildrenDrawer();
  };

  return (
    <Drawer
      title="Каталог"
      placement="left"
      closable={true}
      onClose={() => toggleDrawer()}
      open={drawerVisible}
      bodyStyle={{ paddingBottom: 80 }}
    >

      <SearchComponent onCloseDrawer={() => toggleDrawer()} className={c.searchComp} />

      <div className={c.mobileNavigation__tiles}>
        <CollectionsTiles outerHandler={(key) => onCollectionClick(key)} />
      </div>

      <Drawer
        title="Категория"
        placement="left"
        closable={true}
        onClose={onChildrenDrawerClose}
        open={childrenDrawerVisible}
        bodyStyle={{ paddingBottom: 80 }}
        closeIcon={<LeftOutlined />}
      >
        <InnerDrawerItems currentTopCategory={currentTopCategory} outerHandler={outerDrawerHandler} />

      </Drawer>
    </Drawer>
  )
}
