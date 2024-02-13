import c from './Footer.module.scss';
import { Layout } from 'antd';
import { CopyrightOutlined } from '@ant-design/icons';
import { personalData } from '../../data/personalData';

const { Footer } = Layout;

export const FooterComponent = () => {
  return (
    <Footer className={c.footer}>
      <span>Все цены и условия, указанные на данном сайте, не являются публичной офертой.</span>
      <span>{personalData.orgname} <CopyrightOutlined /> 2024</span>
    </Footer>
  )
}
