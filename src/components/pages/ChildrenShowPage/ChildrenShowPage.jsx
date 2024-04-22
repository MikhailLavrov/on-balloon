import { BreadcrumbsComponent } from '../../BreadcrumbsComponent/BreadcrumbsComponent';
import { FloatButtonComponent } from '../../FloatButtonComponent/FloatButtonComponent';
import c from './ChildrenShowPage.module.scss';
import { ReviewsSection } from '../../ReviewsSection/ReviewsSection';
import { eventServicesData } from '../../EventServices/EventServices';
import { CallBackModal } from '../../CallBackModal/CallBackModal';
import { Link, useLocation } from 'react-router-dom';
import { SecondaryFeedbackComponent } from './../../SecondaryFeedbackComponent/SecondaryFeedbackComponent';
import { SecondaryGallerySection } from '../../SecondaryGallerySection/SecondaryGallerySection';

const FEEDBACK_IMAGE = 'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663176964_2-mykaleidoscope-ru-p-deti-v-vostorge-vkontakte-2.jpg';

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

export const ChildrenShowPage = () => {
  const location = useLocation();
  const additionalData = eventServicesData.filter(item => item.link !== location.pathname);
  const pageName = eventServicesData.find(item => item.link === location.pathname).title;

  const variants = variantsData.map((item, index) => (
    <div className={c.variants__item} key={index}>
      <div className={c.variants__imageWrapper}>
        <img className={c.variants__image} src={item.image} alt={item.title} width={200} height={200} />
      </div>
      <h3 className={c.variants__itemTitle}>{item.title}</h3>
    </div>
  ))

  const additionalItems = additionalData.map((item, index) => (
    <div className={c.additional__item} key={index}>
      <Link to={item.link}>
        <div className={c.additional__itemImageWrapper}>
          <img src={item.image} alt={item.title} width={300} />
        </div>
      </Link>
      <p className={c.additional__itemTitle}>{item.title}</p>
    </div>
  ))

  const steps = stepsData.map((step, index) => (
    <div className={c.childrenShowPage__step} key={index}>
      <div className={c.childrenShowPage__stepImageWrapper}>
        <img className={c.childrenShowPage__stepImage} width={100} height={100} src={step.image} alt={step.title} />
      </div>
      <p className={c.childrenShowPage__stepTitle}>{step.title}</p>
      <p className={c.childrenShowPage__stepText}>{step.text}</p>
    </div>
  ))

  return (
    <section className={c.childrenShowPage}>
      <h2 className='visually-hidden'>{pageName}</h2>
      <div className={`${c.childrenShowPage__container} container`}>
      <BreadcrumbsComponent pageName={pageName} />
        <div className={c.childrenShowPage__header}>
          <div className={c.childrenShowPage__headerTextWrapper}>
            <h3 className={c.childrenShowPage__headerTitle}>Аниматоры, квесты и шоу-программы <br />для детей любого возраста</h3>
            <h3 className={c.childrenShowPage__headerSubTitle}>Профессиональные аниматоры с большим опытом проведения детских праздников с красивыми, качественными костюмами и оборудованием.</h3>
            <CallBackModal buttonText={'Заказать сейчас'} className={c.childrenShowPage__headerButton}/>
          </div>
          <div className={c.childrenShowPage__headerImageWrapper}>
            <img className={`${c.childrenShowPage__headerImage}`} src='https://delai-vibor.com/wp-content/uploads/2023/05/Animator.jpg' alt='Фото' width={200} height={200} />
            <img className={`${c.childrenShowPage__headerImage}`} src='https://bash.today/storage/uploads/posts/detskiye/animators/782ab0665be31abcc980dcaef96b706e' alt='Фото' width={200} height={200} />
          </div>
        </div>
        <div className={c.childrenShowPage__content}>
          <div className={c.childrenShowPage__contentTitleWrapper}>
            <p className={c.childrenShowPage__contentTitle}>Множество активностей для детей от 2 лет и подростков</p>
          </div>
          <div className={c.variants}>
            {variants}
          </div>
          <div className={c.childrenShowPage__description}>
            <p className={c.childrenShowPage__descriptionTitle}>Стандартная анимационная программа включает в себя:</p>
            <div className={c.childrenShowPage__descriptionList}>
              <p className={c.childrenShowPage__descriptionItem}>1 аниматор в костюме любимого персонажа</p>
              <p className={c.childrenShowPage__descriptionItem}>Индивидуальный сценарий</p>
              <p className={c.childrenShowPage__descriptionItem}>Музыкальное сопровождение</p>
              <p className={c.childrenShowPage__descriptionItem}>Игры и конкурсы с тематическим реквизитом</p>
              <p className={c.childrenShowPage__descriptionItem}>Вынос вашего торта аниматором</p>
              <p className={c.childrenShowPage__descriptionItem}>Фотосессия с артистами</p>
            </div>
            <p className={c.childrenShowPage__descriptionAddition}>На этапе планирования анимационной программы вы можете добавить дополнительные опции. <br />Например: дополнительный артист, шоу-программа на выбор, оформление площадки воздушными шарами или создание яркой фотозоны.</p>
          </div>
          <div className={c.childrenShowPage__stepsWrapper}>
            <p className={c.childrenShowPage__stepsTitle}>Занимаемся организацией детских праздников уже более 10 лет!</p>
            <p className={c.childrenShowPage__stepsSubTitle}>В нашей дружной команде работают самые лучшие аниматоры с огромным опытом работы с детьми.</p>
            <div className={c.childrenShowPage__steps}>
              {steps}
            </div>
          </div>
          <SecondaryGallerySection
            reversed
            title={'Яркие моменты праздников с нашими аниматорами'}
          />
          <div className={c.childrenShowPage__reviews}>
            <ReviewsSection />
          </div>
          <SecondaryFeedbackComponent
            imageSrc={FEEDBACK_IMAGE}
            imageClassName={c.childrenShowPage__feedbackImage} 
          />
          <div className={c.additional}>
            <p className={c.additional__title}>
              Популярные услуги:
            </p>
            <div className={c.additional__content}>
              {additionalItems}
            </div>
          </div>
        </div>
      </div>
      <FloatButtonComponent />
    </section>
  );
};
