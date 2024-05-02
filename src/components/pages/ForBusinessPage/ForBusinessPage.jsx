import { useLocation } from 'react-router-dom';
import { eventServicesData } from '../../EventServices/EventServices';
import c from './ForBusinessPage.module.scss';
import { BreadcrumbsComponent } from '../../BreadcrumbsComponent/BreadcrumbsComponent';
import { HeaderAlt } from '../components/HeaderAlt/HeaderAlt';
import { ContentHeader } from '../components/ContentHeader/ContentHeader';
import { VariantsComponent } from '../components/VariantsComponent/VariantsComponent';
import { FeedbackSection } from '../../FeedbackSection/FeedbackSection';
import { GallerySectionAlt } from '../components/GallerySectionAlt/GallerySectionAlt';
import { AdditionalSection } from '../components/AdditionalSection/AdditionalSection';
import { ComplexSection } from '../components/ComplexSection/ComplexSection';
import { FloatButtonComponent } from '../../FloatButtonComponent/FloatButtonComponent';

const HEADER_IMAGE = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn-Oy0kyU68Nllj_fIHmREYlX-mAzAdd8C-6zOzgEbwZwN_16fKys8A1LzwNzGBLyhgBY&usqp=CAU';
const SECONDARY_HEADER_IMAGE = 'https://marvel-ekb.ru/wp-content/uploads/2022/03/05_09_20_1.jpg';
const FEEDBACK_IMAGE = 'https://gkevent.pro/img_small.php?img=/uploads/PR-%D0%B0%D0%BA%D1%86%D0%B8%D0%B8/%D0%9E%D1%82%D0%BA%D1%80%D1%8B%D1%82%D0%B8%D0%B5%20%D0%B4%D0%B8%D0%BB%D0%B5%D1%80%D1%81%D0%BA%D0%B8%D1%85%20%D1%86%D0%B5%D0%BD%D1%82%D1%80%D0%BE%D0%B2/5N8A1679%20(1).jpg&mw=1000&mh=667';

const businessGalleryData = [
  'https://i.ytimg.com/vi/P-8eci8ejko/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDumMtKLXEtd8g3CGEDdljI-gOTEw',
  'https://naduvateli.ru/upload/resize_cache/webp/resize_cache/iblock/55b/395_400_2/z6nilxil6udw5q54xqavf53jcbedakau.webp',
  'https://launch-group.ru/assets/images/news/20.jpg',
  'https://static-cdn4-2.vigbo.tech/u43616/56406/blog/4390352/3270743/41677304/500-slavianaklimovich-21887c88b2f71135c13d6e587dedda16.jpg',
  'https://activbtl.ru/wp-content/uploads/post-1779-main-min.jpg',
  'https://static-cdn4-2.vigbo.tech/u43616/56406/blog/4390352/3270743/41677304/500-slavianaklimovich-663e5d85a48c9022e7884717944b7278.jpg',
  'https://www.ez-prazdnik.ru/upload/iblock/200/deti_1.jpg',
];

const variantsData = [
  {
    title: 'Оформление входа шарами',
    image: 'https://avatars.mds.yandex.net/get-ydo/880658/2a0000016c0690e11dc179ec9c96e9e46286/diploma',
  },
  {
    title: 'Оформление помещения',
    image: 'https://gderadost.ru/image/catalog/stati/Magazin,torgovijcentr/Oformleniemagazinasharami%E2%80%93dlyadushiireklami/text_img_otkr_magaz.jpg',
  },
  {
    title: 'Шары на палочке',
    image: 'https://lh4.googleusercontent.com/proxy/KN6X2Z8INZ6OW-uTRkbLcwF8-bM0YZf3PkBebFxGXZQwzj05aTUQmedyh5V0uw9T6irJbbGaG3KFMfxtaqbeEhMXI6TGTK_Y4Jbd',
  },
  {
    title: 'Аниматоры / Ходулисты',
    image: 'https://starsdance.ru/i/9d/9de1_600x400.jpeg',
  },
  {
    title: 'Ведущий / DJ',
    image: 'https://avatars.mds.yandex.net/get-ydo/2793943/2a00000173b3345dfba4536e85830ba0ee31/diploma',
  },
  {
    title: 'Музыкальное сопровождение',
    image: 'https://kudagid.ru/images/stories/joomlart/news/art/dj_playing_in_disco_house-800x480.jpg',
  },
  {
    title: 'Сладкая вата / Попкорн',
    image: 'https://images.techinsider.ru/upload/img_cache/aa9/aa9d22094136f6194c6ec37661a0d324_ce_1245x830x222x99_cropped_666x444.jpg',
  },
  {
    title: 'Фото/видео съёмка',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmMgb9gHA-2rqJV2Z9cAP_tsNMSvc90mTBjrj4575PLFvHlgYNHrByiaH_LL7V8qCe0tc&usqp=CAU',
  },
  {
    title: 'Фигурки из шариков',
    image: 'https://gderadost.ru/image/catalog/stati/Detskieprazdniki/Figuriizsharovdlyamodelirovaniya-drevneeiskusstvo/7be335477876db854960134c6e137164_XL.jpg',
  },
  {
    title: 'Аквагрим',
    image: 'https://vyborok.com/wp-content/uploads/2023/12/glavnaya.jpeg',
  },
  {
    title: 'Аэромены',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdu1rIRpexT_KiNhDpwA8KMR6na1Q-eb2nbrd4ncatUw&s',
  },
  {
    title: 'Ростовые куклы',
    image: 'https://00.img.avito.st/image/1/1.tBpt3ba4GPMrbs79CffleVB_GvXTfOrhD3Ia8d10EPnb.5WNsd7dAxlYK5D-uwtvN7i3_DcELg6rP-Z_CJxvokgw',
  },
];

const complexData = [
  {
    title: 'Стандарт',
    price: 35000,
    children: [
      'Продолжительность: 3 часа',
      'Арка из шаров 6м',
      'Ведущий или аниматор',
      'Музыка',
    ]
  },
  {
    title: 'Супер',
    price: 57000,
    children: [
      'Продолжительность: 3 часа',
      'Арка из шаров 6м',
      'Раздача попкорна или сахарной ваты',
      'Ведущий или аниматор',
      '1 ходулист или ростовая кукла',
      'Музыка',
    ]
  },
  {
    title: 'VIP',
    price: 72000,
    children: [
      'Продолжительность: 3 часа',
      'Арка из шаров 6м',
      'Раздача попкорна или сахарной ваты',
      'Изготовление и раздача шариков на палочке 200 шт',
      'Ведущий или аниматор',
      '1 ходулист или ростовая кукла',
      'Музыка',
    ]
  },
  {
    title: 'Спец',
    price: 'X',
    children: [
      'Составим индивидуальный план мероприятия',
    ]
  },
];

const ForBusinessPage = () => {
  const location = useLocation();
  const pageName = eventServicesData.find(item => item.link === location.pathname).title;

  return (
    <section className={c.forBusinessPage}>
      <h2 className='visually-hidden'>{pageName}</h2>
      <div className={`${c.forBusinessPage__container} container`}>
        <BreadcrumbsComponent pageName={pageName} />
        <HeaderAlt
          title={'Торжественное открытие магазина - не только яркие эмоции для клиентов, но и дальнейшая выгода для вашего бизнеса'}
          subTitle={'Мы поможем превратить открытие вашего магазина, ТЦ, салона красоты или любого другого объекта в настоящий праздник!'}
          imageSrc={HEADER_IMAGE}
          secondaryImageSrc={SECONDARY_HEADER_IMAGE}
          imageWrapperClassName={c.forBusinessPage__headerImageWrapper}
        />
        <ContentHeader title={'Услуги для вашего бизнеса'} />
        <VariantsComponent data={variantsData} />
        <ComplexSection data={complexData} />
        <GallerySectionAlt
          data={businessGalleryData}
          title={'Посмотрите, как проходят открытия магазинов'}
        />
        <FeedbackSection
          imageSrc={FEEDBACK_IMAGE}
          imageClassName={c.forBusinessPage__feedbackImage}
          title={'Заявите о своем бизнесе — закажите торжественное открытие!'}
        />
        <AdditionalSection location={location} />
      </div>
      <FloatButtonComponent />
    </section>
  )
}

export default ForBusinessPage;
