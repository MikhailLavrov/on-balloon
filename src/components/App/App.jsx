import c from './App.module.scss';
import { Layout } from 'antd';
import { HeaderComponent } from '../Header/Header';
import { FooterComponent } from '../Footer/Footer';
import { Hero } from '../Hero/Hero';

const { Content } = Layout;

export const App = () => {
  return (
    <Layout className={c.layout}>
      <HeaderComponent />
      <Content className={c.content}>

        <Hero />

      </Content>
      <FooterComponent />
    </Layout>
  );
}
