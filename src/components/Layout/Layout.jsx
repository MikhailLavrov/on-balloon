import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, Spin } from 'antd';
import c from './Layout.module.scss';
import { HeaderComponent } from '../Header/Header';
import { FooterComponent } from '../Footer/Footer';
import { MobileNavigation } from '../MobileNavigation/MobileNavigation';

const { Content } = Layout;

const LayoutComponent = () => {

  return (
    <Layout className={c.layout}>
      <HeaderComponent />
      <Content>
        <Suspense 
          fallback={
            <div 
              className='container' 
              style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
            >
              <Spin size="large" />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </Content>
      <FooterComponent />
      <MobileNavigation />
    </Layout>
  );
}

export default LayoutComponent;
