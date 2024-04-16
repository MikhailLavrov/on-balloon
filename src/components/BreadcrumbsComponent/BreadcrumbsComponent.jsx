import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import c from './BreadcrumbsComponent.module.scss';
import { Link } from "react-router-dom";

export const BreadcrumbsComponent = ({pageName}) => {
  return (
    <Breadcrumb
      items={[
        {
          title: <Link to={'/'}><HomeOutlined /></Link>,
        },
        {
          title: pageName,
        },
      ]}
      style={{fontFamily: 'Tilda Sans, Arial, sans-serif', marginBottom: '15px'}}
      className={c.breadcrumbs}
    />
  )
};
