import { HeaderComponent } from '../Header/Header';
import { FooterComponent } from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import c from './Layout.module.scss';
import { DesktopMenu } from '../DesktopMenu/DesktopMenu';

const { Content } = Layout;

export const LayoutComponent = () => {

  return (
    <Layout className={c.layout}>
      <HeaderComponent />
      {/* <DesktopMenu /> */}
      <Content>
        <Outlet />
      </Content>
      <FooterComponent />
    </Layout>
  );
}
