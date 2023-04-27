import { LayoutComponent } from '../Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { GalleryPage } from '../GalleryPage/GalleryPage';
import { Hero } from '../Hero/Hero';
import { Services } from '../Services/Services';
import { DrawerComponent } from '../Drawer/Drawer';
import { CoopOffer } from '../CoopOffer/CoopOffer';
import { Assortment } from '../Assortment/Assortment';
import { Advantages } from '../Advantages/Advantages';
import { GallerySection } from '../GallerySection/GallerySection';
import { Feedback } from '../Feedback/Feedback';

const MainPage = () => {
  return (
    <>
      <Hero />
      <DrawerComponent />
      <Services />
      <CoopOffer />
      <Assortment />
      <Advantages />
      <GallerySection />
      <Feedback />
    </>
  );
}

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutComponent /> }>
        <Route index path="/" element={<MainPage />} />
        <Route path="gallery" element={<GalleryPage />} />
      </Route>
    </Routes>
  );
}
