import c from './Footer.module.scss';
import { Layout } from 'antd';
import { CopyrightOutlined } from '@ant-design/icons';
import { personalData } from '../../data/personalData';

const { Footer } = Layout;

export const FooterComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Footer className={c.footer}>
      <div className={`${c.footer__container} container`}>
        <span><CopyrightOutlined /> {personalData.orgname} {currentYear}</span>
        <span>Все цены и условия, указанные на данном сайте, не являются публичной офертой.</span>
      </div>
    </Footer>
  );
};
