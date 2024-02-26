import { useDispatch } from "react-redux";
import { catalogMenuData } from "../../data/catalogMenuData";
import { setCurrentCategory } from "../../redux/outerCatalogNavSlice";
import { Link } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";
import c from './MobileNavigation.module.scss';

export const InnerDrawerItems = ({ currentTopCategory, outerHandler }) => {
  const category = catalogMenuData.find(item => item.key === currentTopCategory)
  const dispatch = useDispatch();

  const onClickHandler = (key) => {
    dispatch(setCurrentCategory({ currentCategory: key, currentTopCategory: currentTopCategory }))
    outerHandler && outerHandler();
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
