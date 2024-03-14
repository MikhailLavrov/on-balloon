import { useDispatch, useSelector } from "react-redux";
import { catalogMenuData } from "../../data/catalogMenuData";
import { setCurrentCategory } from "../../redux/catalogNavSlice";
import { Link } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";
import c from './MobileCatalogDrawer.module.scss';
import { setDrawerState } from "../../redux/catalogDrawerSlice";

export const InnerDrawerItems = () => {
  const drawerVisibleState = useSelector(state => state.catalogDrawer.mainDrawerIsOpened)
  const childrenDrawerVisibleState = useSelector(state => state.catalogDrawer.childrenDrawerIsOpened)
  const currentTopCategoryState = useSelector(state => state.catalogNav.currentTopCategory);
  const category = catalogMenuData.find(item => item.key === currentTopCategoryState)
  const dispatch = useDispatch();

  const onClickHandler = (key) => {
    dispatch(setCurrentCategory({ currentCategory: key, currentTopCategory: currentTopCategoryState }))
    childrenDrawerVisibleState && dispatch(setDrawerState({childrenDrawerIsOpened: false}))
    drawerVisibleState && dispatch(setDrawerState({mainDrawerIsOpened: false}))
  }

  return (
    <div className={c.innerDrawer__content}>
      {category.children?.map((item, index) => {
        return (
          <Link to={'/catalog'} key={index} onClick={() => onClickHandler(item.key)}>
            {item.label} <RightOutlined style={{ fontSize: '12px', color: '#888888' }} />
          </Link>
        )
      })
      }
    </div>
  )
}
