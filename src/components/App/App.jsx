import { LayoutComponent } from '../Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { GalleryPage } from '../pages/GalleryPage/GalleryPage';
import { CatalogPage } from '../pages/CatalogPage/CatalogPage';
import { FavouritesPage } from '../pages/FavouritesPage/FavouritesPage';
import { ShoppingCartPage } from '../pages/ShoppingCartPage/ShoppingCartPage';
import { Hero } from '../Hero/Hero';
import { Advantages } from '../Advantages/Advantages';
import { GallerySection } from '../GallerySection/GallerySection';
import { Feedback } from '../Feedback/Feedback';
import { SearchResultsPage } from '../pages/SearchResultsPage/SearchResultsPage';
import { InfoPage } from '../pages/InfoPage/InfoPage';
import { MobileContactsPage } from '../pages/MobileContactsPage/MobileContactsPage';
import { HitsSection } from '../HitsSection/HitsSection';
import { ReviewsSection } from '../ReviewsSection/ReviewsSection';
import { ReviewsPage } from '../pages/ReviewsPage/ReviewsPage';

const MainPage = () => {
  return (
    <>
      <Hero />
      <HitsSection />
      <Advantages />
      <GallerySection />
      <ReviewsSection />
      <Feedback />
    </>
  );
}

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LayoutComponent /> }>
        <Route index element={<MainPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="favourites" element={<FavouritesPage />} />
        <Route path="cart" element={<ShoppingCartPage />} />
        <Route path="search" element={<SearchResultsPage />} />
        <Route path="info" element={<InfoPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="contacts" element={<MobileContactsPage />} />
      </Route>
    </Routes>
  );
}
