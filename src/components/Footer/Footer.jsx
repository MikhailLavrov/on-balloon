import c from './Footer.module.scss';
import { Layout } from 'antd';
import { CopyrightOutlined } from '@ant-design/icons';

const { Footer } = Layout;

export const FooterComponent = () => {
  return (
    <Footer className={c.footer}>
      Латексный дизайн <CopyrightOutlined /> 2023
    </Footer>
  )
}
