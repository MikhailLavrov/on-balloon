import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import c from './BreadcrumbsComponent.module.scss';

export const BreadcrumbsComponent = ({pageName}) => {
  return (
    <Breadcrumb
      items={[
        {
          href: '/',
          title: <HomeOutlined />,
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
