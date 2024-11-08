import { useLocation } from 'react-router-dom';
import { eventServicesData } from '../../EventServices/EventServices';
import c from './PhotozonePage.module.scss';
import { BreadcrumbsComponent } from '../../BreadcrumbsComponent/BreadcrumbsComponent';
import { HeaderAlt } from '../components/HeaderAlt/HeaderAlt';
import { ContentHeader } from '../components/ContentHeader/ContentHeader';
import { VariantsComponent } from '../components/VariantsComponent/VariantsComponent';
import { StepsSection } from '../components/StepsSection/StepsSection';
import { ReviewsSection } from '../../ReviewsSection/ReviewsSection';
import { FeedbackSection } from '../../FeedbackSection/FeedbackSection';
import { GallerySectionAlt } from '../components/GallerySectionAlt/GallerySectionAlt';
import { AdditionalSection } from '../components/AdditionalSection/AdditionalSection';
import { FloatButtonComponent } from '../../FloatButtonComponent/FloatButtonComponent';

const FEEDBACK_IMAGE = 'https://lurieflowers2001.ru/wa-data/public/shop/products/59/74/7459/images/9943/9943.600x0.jpg';

const HEADER_IMAGE = 'https://i.ytimg.com/vi/8lNlMROOvXI/maxresdefault.jpg';

const variantsData = [
  {
    title: 'Фотозона с пайетками',
    image: 'https://shop-cdn1-2.vigbo.tech/shops/4032/products/20176521/images/3-b10fe362d259cb5dfb875c8bf48c248b.jpg',
  },
  {
    title: 'Фотозона с шарами',
    image: 'https://sharfun.ru/upload/iblock/676/676634c02a37557e175d392209667c10.jpg',
  },
  {
    title: 'Фотозона с баннером',
    image: 'https://www.imp66.ru/uploads/product/2253/loupe.jpg',
  },
  {
    title: 'Круглая фотозона',
    image: 'https://frankfurt.apollo.olxcdn.com/v1/files/ex39unlewv8v3-KZ/image;s=1080x809',
  },
  {
    title: 'Фотозона с дождиком',
    image: 'https://www.art-active24.ru/images/upload/novogodnyaya-fotozona-dozhdik-art-2023-new-1_2.jpg',
  },
  {
    title: 'Фотозона с фигурами',
    image: 'https://annalegenda.ru/wp-content/uploads/2020/06/fotozona-mikki-maus-e1591184358348.jpg',
  },
  {
    title: 'Фотозона с цветами',
    image: 'https://arenda-fotozon.ru/image/cache/catalog/Fotozona/svadebnie-fotozoni/IMG_20220510_230539-1000x1000.jpg',
  },
  {
    title: 'Фотозона тематическая',
    image: 'https://shop-cdn1-2.vigbo.tech/shops/4032/products/22168107/images/2-b005374dfcb84adc85e2d0e7199e5ca6.jpg',
  },
];

const stepsData = [
  {
    title: 'Обсуждение',
    text: 'Выявляем концепцию и стилистику мероприятия. Подбираем оптимально подходящий вариант по критериям и бюджету',
    image: 'https://cdn-icons-png.flaticon.com/512/5225/5225580.png',
  },
  {
    title: 'Визуализация',
    text: 'Согласовываем визуализацию выбранной фотозоны по одному из готовых вариантов или создаем индивидуальный макет',
    image: 'https://cdn-icons-png.flaticon.com/512/4539/4539183.png',
  },
  {
    title: 'Подготовка',
    text: 'Определяемся с местом и временем монтажа. Учитываем все технические нюансы',
    image: 'https://cdn-user84060.skyeng.ru/uploads/6357f60d24897382768965.png',
  },
  {
    title: 'Монтаж',
    text: 'Устанавливаем фотозону заблаговременно. Вы и ваши гости сможете сразу же пользоваться и наслаждаться готовой фотозоной',
    image: 'https://cdn-icons-png.flaticon.com/512/5256/5256062.png',
  },
];

const PhotozonePage = () => {
  const location = useLocation();
  const pageName = eventServicesData.find(item => item.link === location.pathname).title;

  return (
    <section className={c.photozonePage}>
      <h2 className='visually-hidden'>{pageName}</h2>
      <div className={`${c.photozonePage__container} container`}>
      <BreadcrumbsComponent pageName={pageName} />
        <HeaderAlt
          title={'Эксклюзивные фотозоны для проведения праздников любой тематики'}
          imageSrc={HEADER_IMAGE}
          imageWrapperClassName={c.photozonePage__headerImageWrapper}
        />
        <div className={c.photozonePage__content}>
          <ContentHeader
            title={'Эксклюзивные фотозоны для ярких воспоминаний'}
            subTitle={'Выбирайте из готовых решений, или создадим фотозону по индивидуальному дизайну и предпочтениям'}
          />
          <VariantsComponent data={variantsData} />
          <StepsSection
            data={stepsData}
            title={'Что включает в себя аренда фотозоны:'}
          />
          <GallerySectionAlt
            reversed title={'За 10 лет оформили более 1000 мероприятий и фотозон'}
            subTitle={'Посмотрите некоторые из них'}
          />
          <ReviewsSection />
          <FeedbackSection
            imageSrc={FEEDBACK_IMAGE}
            imageClassName={c.photozonePage__feedbackImage}
          />
          <AdditionalSection location={location} />
        </div>
      </div>
      <FloatButtonComponent />
    </section>
  );
};

export default PhotozonePage;
