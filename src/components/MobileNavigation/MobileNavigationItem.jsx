import { Link, useLocation } from "react-router-dom";
import c from './MobileNavigation.module.scss';
import { Badge } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setDrawerState } from "../../redux/catalogDrawerSlice";
import { setBurgerIsOpened } from "../../redux/burgerMenuSlice";

export const MobileNavigationItem = ({item, onNavLinkClick}) => {
  const { title, link, icon, count } = item;
  
  const drawerVisibleState = useSelector(state => state.catalogDrawer.mainDrawerIsOpened)
  const isBurgerOpenedState = useSelector(state => state.burgerMenu.isOpened)
  const location = useLocation();
  const dispatch = useDispatch()
  
  const isActive = link === '/' ? location.pathname === link : location.pathname.startsWith(link);

  const onCatalogClickHandler = () => {
    !drawerVisibleState ? dispatch(setDrawerState({mainDrawerIsOpened: true})) : dispatch(setDrawerState({mainDrawerIsOpened: false}))
    isBurgerOpenedState && dispatch(setBurgerIsOpened({ isOpened: false }));
  }

  return (
    <div className={c.mobileNavigation__linkWrapper}>
      {link === '/catalog' ? 
        <div
          className={`${c.mobileNavigation__link} ${isActive ? c.active : ''}`}
          onClick={onCatalogClickHandler}
        >
          {icon} {title}
        </div>
      : <Link
          to={link}
          className={`${c.mobileNavigation__link} ${isActive ? c.active : ''}`}
          onClick={() => onNavLinkClick()}
        >
          {icon} {title}
          {count && <Badge size='small' count={count} />}
        </Link>
      }
    </div>
  );
};
