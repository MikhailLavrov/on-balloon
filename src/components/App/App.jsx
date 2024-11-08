import c from './App.module.scss';
import { lazy } from 'react';
import LayoutComponent from '../Layout/Layout';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Hero } from '../Hero/Hero';
import { HitsSection } from '../HitsSection/HitsSection';
import { EventServices } from '../EventServices/EventServices';
import { Advantages } from '../Advantages/Advantages';
import { GallerySection } from '../GallerySection/GallerySection';
import { ReviewsSection } from '../ReviewsSection/ReviewsSection';
import { FeedbackSection } from '../FeedbackSection/FeedbackSection';
import { CatalogPageLayout } from '../pages/CatalogPage/CatalogPageLayout';
import { FloatButtonComponent } from '../FloatButtonComponent/FloatButtonComponent';

// Pages
const FavouritesPage = lazy(() => import('../pages/FavouritesPage/FavouritesPage'));
const ShoppingCartPage = lazy(() => import('../pages/ShoppingCartPage/ShoppingCartPage'));
const SearchResultsPage = lazy(() => import('../pages/SearchResultsPage/SearchResultsPage'));
const InfoPage = lazy(() => import('../pages/InfoPage/InfoPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const GalleryPage = lazy(() => import('../pages/GalleryPage/GalleryPage'));
const DecorPage = lazy(() => import('../pages/DecorPage/DecorPage'));
const PhotozonePage = lazy(() => import('../pages/PhotozonePage/PhotozonePage'));
const ChildrenShowPage = lazy(() => import('../pages/ChildrenShowPage/ChildrenShowPage'));
const ForBusinessPage = lazy(() => import('../pages/ForBusinessPage/ForBusinessPage'));
const ReviewsPage = lazy(() => import('../pages/ReviewsPage/ReviewsPage'));

const MainPage = () => {
  return (
    <>
      <Hero />
      <HitsSection />
      <EventServices />
      <Advantages />
      <GallerySection />
      <ReviewsSection />
      <FeedbackSection
        imageSrc = 'https://masterpiecer-images.s3.yandex.net/9a76eae65e8c11ee97c63a7ca4cc1bdc:upscaled'
        imageClassName = {c.feedback__image}
        title = 'Возникли вопросы?'
      />
      <FloatButtonComponent />
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
        <Route path="photozone" element={<PhotozonePage />} />
        <Route path="childrenshow" element={<ChildrenShowPage />} />
        <Route path="forbusiness" element={<ForBusinessPage />} />
      </Route>
    </Routes>
  );
}
