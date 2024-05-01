import { useLocation } from 'react-router-dom';
import { eventServicesData } from '../../EventServices/EventServices';
import c from './ChildrenShowPage.module.scss';
import { BreadcrumbsComponent } from '../../BreadcrumbsComponent/BreadcrumbsComponent';
import { HeaderAlt } from '../components/HeaderAlt/HeaderAlt';
import { ContentHeader } from '../components/ContentHeader/ContentHeader';
import { VariantsComponent } from '../components/VariantsComponent/VariantsComponent';
import { StepsSection } from '../components/StepsSection/StepsSection';
import { ReviewsSection } from '../../ReviewsSection/ReviewsSection';
import { GallerySectionAlt } from '../components/GallerySectionAlt/GallerySectionAlt';
import { AdditionalSection } from '../components/AdditionalSection/AdditionalSection';
import { ComplexSection } from '../components/ComplexSection/ComplexSection';
import { FeedbackSection } from '../../FeedbackSection/FeedbackSection';
import { FloatButtonComponent } from '../../FloatButtonComponent/FloatButtonComponent';

const FEEDBACK_IMAGE = 'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663176964_2-mykaleidoscope-ru-p-deti-v-vostorge-vkontakte-2.jpg';

const HEADER_IMAGE = 'https://delai-vibor.com/wp-content/uploads/2023/05/Animator.jpg';

const SECONDARY_HEADER_IMAGE = 'https://bash.today/storage/uploads/posts/detskiye/animators/782ab0665be31abcc980dcaef96b706e';

const childrenShowGalleryData = [
  'https://gallery.profi.ru/xfiles/pfiles/38ff2a2c12d1463a9259fa96551a03b3.jpg-profi_h420.jpg',
  'https://san-alushta.ru/wp-content/uploads/2020/01/dizajn-bez-nazvaniya-2020-01-24t131139.886-min.png',
  'https://www.tourdom.ru/hotline/upload/medialibrary/e27/e27cf393ff432ac38d62b6cb48923d4e.jpg',
  'https://restostar.com/netcat_files/multifile/467/22222.jpg',
  'https://miniklub.ru/images/bumaznaya-diskoteka-1.jpg',
  'https://anyutiniglazki.ru/images/product/000/000037/529-6d0428248691f43763ff0dcd051a7e02.jpg',
];

const variantsData = [
  {
    title: 'Аниматоры',
    image: 'https://animatorspb.ru/wp-content/uploads/2019/11/VMF02259-1.jpg',
  },
  {
    title: 'Мастер-классы',
    image: 'https://annalegenda.ru/wp-content/uploads/2020/05/unnamed-5.jpg',
  },
  {
    title: 'Шоу',
    image: 'https://zazerkalye-spb.ru/wp-content/uploads/2020/08/image0-14-1.jpg',
  },
  {
    title: 'Дискотека для детей',
    image: 'https://babysongs.ru/images/jenre/003.jpg',
  },
  {
    title: 'Аквагрим',
    image: 'https://tilibom.by/wp-content/gallery/2akvagrim/photo_2023-02-08_10-50-46.jpg',
  },
  {
    title: 'Сладкая вата',
    image: 'https://d1nizz91i54auc.cloudfront.net/_service/128081/display/img_version/6338046/t/1588167112/img_name/19041_128081_8aebda57fc.jpg',
  },
  {
    title: 'Попкорн',
    image: 'https://thumbs.dreamstime.com/z/%D1%80%D1%83%D0%BA%D0%B0-s-%D0%B5%D1%82%D0%B5%D0%B9-%D0%B5%D1%80%D0%B6%D0%B8%D1%82-%D0%BF%D0%BE%D0%BF%D0%BA%D0%BE%D1%80%D0%BD-87423236.jpg',
  },
  {
    title: 'Фото/видео съёмка',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmMgb9gHA-2rqJV2Z9cAP_tsNMSvc90mTBjrj4575PLFvHlgYNHrByiaH_LL7V8qCe0tc&usqp=CAU',
  },
];

const stepsData = [
  {
    text: 'Подбираем игры и конкурсы в соответствии с возрастом и интересами детей.',
    image: 'https://www.pngarts.com/files/3/Superhero-PNG-Pic.png',
  },
  {
    text: 'Перед каждым праздником обсуждаем детали мероприятия и отвечаем на все интересующие вас вопросы.',
    image: 'https://8b08ab88-ee1b-4b04-9ae9-321e0da71ae2.selcdn.net/46b4efdb-21e6-44e6-a9e9-5e96e26ce1a6/%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%B6w200.png',
  },
  {
    text: 'Адаптируем состав программы под ваш бюджет.',
    image: 'https://www.freeiconspng.com/thumbs/minions-png/minions-png-file-8.png',
  },
];

const complexData = [
  {
    title: 'Стандарт',
    price: 12500,
    children: [
      '30 шаров под потолок или 3 фонтана из шаров',
      '1 аниматор в костюме любимого персонажа',
      'Музыкальное сопровождение анимационной программы',
      'Игры и конкурсы с тематическим реквизитом',
      'Вынос вашего торта аниматором',
      'Фотосессия с аниматором',
    ]
  },
  {
    title: 'Супер',
    price: 35500,
    children: [
      '50 шаров под потолок или 5 фонтанов из шаров',
      '2 аниматора в костюмах любимых персонажей',
      'Бумажная дискотека или другая шоу-программа',
      'Музыкальное сопровождение анимационной программы',
      'Игры и конкурсы с тематическим реквизитом',
      'Фигурки из длинных шариков',
      'Легкое шоу мыльных пузырей',
      'Вынос вашего торта аниматором',
      'Фотосессия с аниматором',
    ]
  },
  {
    title: 'VIP',
    price: 75500,
    children: [
      'Тематическая фотозона',
      '100 шаров под потолок или 10 фонтанов из шаров',
      'Бумажная дискотека или другая шоу-программа',
      '2 аниматора в костюмах любимых персонажей',
      'Индивидуальный сценарий',
      'Музыкальное сопровождение анимационной программы',
      'Фигурки из длинных шариков',
      'Легкое шоу мыльных пузырей',
      'Игры и конкурсы с тематическим реквизитом',
      'Вынос вашего торта аниматором',
      'Фотосессия с аниматором',
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

export const ChildrenShowPage = () => {
  const location = useLocation();
  const pageName = eventServicesData.find(item => item.link === location.pathname).title;

  return (
    <section className={c.childrenShowPage}>
      <h2 className='visually-hidden'>{pageName}</h2>
      <div className={`${c.childrenShowPage__container} container`}>
      <BreadcrumbsComponent pageName={pageName} />
        <HeaderAlt
          title={'Аниматоры, квесты и шоу-программы для детей любого возраста'}
          subTitle={'Профессиональные аниматоры с большим опытом проведения детских праздников с красивыми, качественными костюмами и оборудованием'}
          imageSrc={HEADER_IMAGE}
          secondaryImageSrc={SECONDARY_HEADER_IMAGE}
          imageWrapperClassName={c.childrenShowPage__headerImageWrapper}
        />
        <div className={c.childrenShowPage__content}>
          <ContentHeader title={'Множество активностей для детей от 2 лет и подростков'} />
          <VariantsComponent data={variantsData} />
          <ComplexSection data={complexData} />
          <StepsSection
            data={stepsData}
            title={'Занимаемся организацией детских праздников уже более 10 лет!'}
            subTitle={'В нашей дружной команде работают самые лучшие аниматоры с огромным опытом работы с детьми.'}
          />
          <GallerySectionAlt
            data={childrenShowGalleryData}
            title={'Яркие моменты праздников с нашими аниматорами'}
          />
          <ReviewsSection />
          <FeedbackSection
            imageSrc={FEEDBACK_IMAGE}
            imageClassName={c.childrenShowPage__feedbackImage}
          />
          <AdditionalSection location={location} />
        </div>
      </div>
      <FloatButtonComponent />
    </section>
  );
};
