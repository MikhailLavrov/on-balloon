import { LayoutComponent } from '../Layout/Layout';
import { Route, Routes, Navigate } from 'react-router-dom';
import { GalleryPage } from '../pages/GalleryPage/GalleryPage';
import { FavouritesPage } from '../pages/FavouritesPage/FavouritesPage';
import { ShoppingCartPage } from '../pages/ShoppingCartPage/ShoppingCartPage';
import { Hero } from '../Hero/Hero';
import { Advantages } from '../Advantages/Advantages';
import { GallerySection } from '../GallerySection/GallerySection';
import { Feedback } from '../Feedback/Feedback';
import { SearchResultsPage } from '../pages/SearchResultsPage/SearchResultsPage';
import { InfoPage } from '../pages/InfoPage/InfoPage';
import { ContactsPage } from '../pages/ContactsPage/ContactsPage';
import { HitsSection } from '../HitsSection/HitsSection';
import { ReviewsSection } from '../ReviewsSection/ReviewsSection';
import { ReviewsPage } from '../pages/ReviewsPage/ReviewsPage';
import { CatalogPageLayout } from '../pages/CatalogPage/CatalogPageLayout';
// import { CorporativeOffer } from '../CorporativeOffer/CorporativeOffer';
import { EventServices } from '../EventServices/EventServices';
import { DecorPage } from '../pages/DecorPage/DecorPage';

const MainPage = () => {
  return (
    <>
      <Hero />
      <HitsSection />
      <EventServices />
      {/* <CorporativeOffer /> */}
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
        <Route path="catalog" element={<Navigate to="/catalog/trend" replace />} />
        <Route path="catalog/:topcategory/:category?" element={<CatalogPageLayout />} />
        <Route path="info" element={<Navigate to="/info/news" replace />} />
        <Route path="info/:chapter" element={<InfoPage />} />
        <Route path="favourites" element={<FavouritesPage />} />
        <Route path="cart" element={<ShoppingCartPage />} />
        <Route path="search" element={<SearchResultsPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="decor" element={<DecorPage />} />
      </Route>
    </Routes>
  );
}
