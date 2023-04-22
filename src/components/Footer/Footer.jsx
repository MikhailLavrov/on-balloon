import c from './Footer.module.scss';
import { Layout } from 'antd';

const { Footer } = Layout;

export const FooterComponent = () => {
  return (
    <Footer className={c.footer}>
      Footer
    </Footer>
  )
}
