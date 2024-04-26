import { ArrowUpOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import c from './FloatButtonComponent.module.scss';

const { BackTop } = FloatButton;

export const FloatButtonComponent = () => {
  return (
    <BackTop 
      icon={<ArrowUpOutlined />}
      className={c.floatButton} 
    />
  )
}
