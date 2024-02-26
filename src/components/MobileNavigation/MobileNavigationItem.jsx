import { Link, useLocation } from "react-router-dom";
import c from './MobileNavigation.module.scss';
import { Badge } from "antd";

export const MobileNavigationItem = ({item, onNavLinkClick, drawerLinkAction}) => {
  const { title, link, icon, count, drawerLink } = item;
  const location = useLocation();

  return (
    <div className={c.mobileNavigation__linkWrapper}>
      {drawerLink ? (
        <div
          className={`${c.mobileNavigation__link} ${location.pathname === link ? c.active : ''}`}
          onClick={drawerLinkAction}
        >
          {icon} {title}
        </div>
      ) : (
        <Link
          to={link}
          className={`${c.mobileNavigation__link} ${location.pathname === link ? c.active : ''}`}
          onClick={() => onNavLinkClick()}
        >
          {icon} {title}
          {count && <Badge size='small' count={count} />}
        </Link>
      )}
    </div>
  );
};
