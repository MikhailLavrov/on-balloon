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
    <div>
      <Hero />
      <DrawerComponent />
      <Services />
      <CoopOffer />
      <Assortment />
      <Advantages />
      <GallerySection />
      <Feedback />
    </div>
  );
}

export const App = () => {
  return (
    <Routes>
      <Route element={<LayoutComponent /> }>
        <Route path='*' element={<MainPage />} />
        <Route path="gallery" element={<GalleryPage />} />
      </Route>
    </Routes>
  );
}
