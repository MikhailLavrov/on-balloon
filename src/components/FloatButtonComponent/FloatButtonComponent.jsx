import { ArrowUpOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import c from './FloatButtonComponent.module.scss';

export const FloatButtonComponent = () => {
  return (
    <FloatButton.BackTop icon={<ArrowUpOutlined />} className={c.floatButton} />
  )
}

