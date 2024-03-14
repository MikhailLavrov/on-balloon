import { LeftOutlined } from "@ant-design/icons";
import { InnerDrawerItems } from "./InnerDrawerItems";
import { useDispatch, useSelector } from "react-redux";
import { setDrawerState } from "../../redux/catalogDrawerSlice";
import { Drawer } from "antd";

export const InnerMobileCatalogDrawer = () => {
  const drawerVisibleState = useSelector(state => state.catalogDrawer.mainDrawerIsOpened)
  const childrenDrawerVisibleState = useSelector(state => state.catalogDrawer.childrenDrawerIsOpened)
  const dispatch = useDispatch()

  const closeChildrenDrawer = () => {
    childrenDrawerVisibleState && dispatch(setDrawerState({childrenDrawerIsOpened: false}))
    !drawerVisibleState && dispatch(setDrawerState({mainDrawerIsOpened: true}))
  }

  return (
    <Drawer
      title="Категория"
      placement="left"
      closable={true}
      onClose={closeChildrenDrawer}
      open={childrenDrawerVisibleState}
      className={`catalog__drawer`}
      closeIcon={<LeftOutlined />}
    >
      <InnerDrawerItems />
    </Drawer>
  )
}
