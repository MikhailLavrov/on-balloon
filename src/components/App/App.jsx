import { LayoutComponent } from '../Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { Gallery } from '../Gallery/Gallery';
import { Hero } from '../Hero/Hero';
import { Services } from '../Services/Services';
import { DrawerComponent } from '../Drawer/Drawer';
import { CoopOffer } from '../CoopOffer/CoopOffer';

const MainPage = () => {
  return (
    <>
      <Hero />
      <DrawerComponent />
      <Services />
      <CoopOffer />
    </>
  );
}

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutComponent /> }>
        <Route index path="/" element={<MainPage />} />
        <Route path="gallery" element={<Gallery />} />
      </Route>
    </Routes>
  );
}
