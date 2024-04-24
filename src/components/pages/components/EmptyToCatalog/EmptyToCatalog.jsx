import { Link } from 'react-router-dom';
import c from './EmptyToCatalog.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawerState } from '../../../../redux/catalogDrawerSlice';
import { setBurgerIsOpened } from '../../../../redux/burgerMenuSlice';
import EMPTY_IMAGE from '../../../../assets/empty.webp';

export const EmptyToCatalog = () => {
  const dispatch = useDispatch();
  const drawerVisibleState = useSelector(state => state.catalogDrawer.mainDrawerIsOpened)
  const isBurgerOpenedState = useSelector(state => state.burgerMenu.isOpened)
  
  const toggleDrawer = () => {
    !drawerVisibleState && dispatch(setDrawerState({ mainDrawerIsOpened: true }));
    isBurgerOpenedState && dispatch(setBurgerIsOpened({ isOpened: false }));
  };

  return (
    <div className={c.emptyToCatalog}>
      <div className={c.emptyToCatalog__imageWrapper}>
        <img width={200} src={EMPTY_IMAGE} alt="Пустая страница" />
      </div>
      <div className={c.emptyToCatalog__content}>
        <Link className={c.emptyToCatalog__link} to={'/catalog'}>Добавить товары</Link>
        <button className={c.emptyToCatalog__linkMobile} onClick={toggleDrawer}>Добавить товары</button>
      </div>
    </div>
  )
}
