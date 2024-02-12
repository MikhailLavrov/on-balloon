import { LayoutComponent } from '../Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { GalleryPage } from '../pages/GalleryPage/GalleryPage';
import { Hero } from '../Hero/Hero';
import { Advantages } from '../Advantages/Advantages';
import { GallerySection } from '../GallerySection/GallerySection';
import { Feedback } from '../Feedback/Feedback';
import { FloatButton } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';

const MainPage = () => {
  return (
    <>
      <Hero />
      <Advantages />
      <GallerySection />
      <Feedback />
      <FloatButton.BackTop icon={<ArrowUpOutlined />} />
    </>
  );
}

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LayoutComponent /> }>
        <Route index element={<MainPage />} />
        <Route path="gallery" element={<GalleryPage />} />
      </Route>
    </Routes>
  );
}
