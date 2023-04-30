import { HeaderComponent } from '../Header/Header';
import { FooterComponent } from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import c from './Layout.module.scss';

const { Content } = Layout;

export const LayoutComponent = () => {
  return (
    <Layout className={c.layout}>
      <HeaderComponent />
      <Content>
        <Outlet />
      </Content>
      <FooterComponent />
    </Layout>
  );
}
