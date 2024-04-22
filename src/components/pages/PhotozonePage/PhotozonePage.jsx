import { galleryData } from '../../../data/galleryData';
import { gallerySwiperParams } from '../../../data/swiperParams';
import { BreadcrumbsComponent } from '../../BreadcrumbsComponent/BreadcrumbsComponent';
import { FloatButtonComponent } from '../../FloatButtonComponent/FloatButtonComponent';
import c from './PhotozonePage.module.scss';
import { Image } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReviewsSection } from '../../ReviewsSection/ReviewsSection';
import { eventServicesData } from '../../EventServices/EventServices';
import { CallBackModal } from '../../CallBackModal/CallBackModal';
import { personalData } from './../../../data/personalData';
import { SocialLinks } from './../../SocialLinks/SocialLinks';
import { Link, useLocation } from 'react-router-dom';

const gallerySlidesReversed = [...galleryData].reverse();

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
    image: 'https://gelione.ru/images/FZ_banner_2x2.jpg',
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
    text: 'Выявляем концепцию и стилистику мероприятия. Подбираем оптимально подходящий вариант по критериям и бюджету.',
    image: 'https://cdn-icons-png.flaticon.com/512/5225/5225580.png',
  },
  {
    title: 'Визуализация',
    text: 'Согласовываем визуализацию выбранной фотозоны по одному из готовых вариантов или создаем индивидуальный макет.',
    image: 'https://cdn-icons-png.flaticon.com/512/4539/4539183.png',
  },
  {
    title: 'Подготовка',
    text: 'Определяемся с местом и временем монтажа. Учитываем все технические нюансы.',
    image: 'https://cdn-user84060.skyeng.ru/uploads/6357f60d24897382768965.png',
  },
  {
    title: 'Монтаж',
    text: 'Устанавливаем фотозону заблаговременно. Вы и ваши гости сможете сразу же пользоваться и наслаждаться готовой фотозоной.',
    image: 'https://cdn-icons-png.flaticon.com/512/5256/5256062.png',
  },
];

export const PhotozonePage = () => {
  const location = useLocation();
  const additionalData = eventServicesData.filter(item => item.link !== location.pathname);

  const variants = variantsData.map((item, index) => (
    <div className={c.variants__item} key={index}>
      <div className={c.variants__imageWrapper}>
        <img className={c.variants__image} src={item.image} alt={item.title} width={200} height={200} />
      </div>
      <h3 className={c.variants__itemTitle}>{item.title}</h3>
    </div>
  ))

  const gallerySlides = gallerySlidesReversed.slice(0, 10).map((image, index) => (
    <SwiperSlide className='gallery__slide' key={index}>
      <div key={index} className={c.gallery__item}>
        <Image className={c.gallery__image} src={image} alt={index} preview={false} />
      </div>
    </SwiperSlide>
  ));

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
    <div className={c.decorPage__step} key={index}>
      <div className={c.decorPage__stepImageWrapper}>
        <img className={c.decorPage__stepImage} width={100} height={100} src={step.image} alt={step.title} />
      </div>
      <p className={c.decorPage__stepTitle}>{step.title}</p>
      <p className={c.decorPage__stepText}>{step.text}</p>
    </div>
  ))

  return (
    <section className={c.decorPage}>
      <h2 className='visually-hidden'>Фотозоны</h2>
      <div className={`${c.photozonePage__container} container`}>
      <BreadcrumbsComponent pageName={'Фотозоны'} />
        <div className={c.innerPageHeader}>
          <div className={c.innerPageHeader__textWrapper}>
            <h3 className={c.innerPageHeader__title}>Эксклюзивные фотозоны для проведения праздников любой тематики.</h3>
            <CallBackModal buttonText={'Заказать сейчас'} className={c.innerPageHeader__button}/>
          </div>
          <div className={c.innerPageHeader__imageWrapper}>
            <img className={`${c.innerPageHeader__image}`} src='https://i.ytimg.com/vi/8lNlMROOvXI/maxresdefault.jpg' alt='Фото' width={200} height={200} />
          </div>
        </div>
        <div className={c.photozonePage__content}>
          <div className={c.photozonePage__contentTitleWrapper}>
            <p className={c.photozonePage__contentTitle}>Эксклюзивные фотозоны для ярких воспоминаний</p>
            <p className={c.photozonePage__contentSubTitle}>Выбирайте из готовых решений, или создадим фотозону по индивидуальному дизайну и предпочтениям.</p>
          </div>
          <div className={c.photozonePage__variants}>
            {variants}
          </div>
          <div className={c.photozonePage__stepsWrapper}>
            <p className={c.photozonePage__stepsTitle}>Что включает в себя аренда фотозоны:</p>
            <div className={c.photozonePage__steps}>
              {steps}
            </div>
          </div>
          <div className={c.photozonePage__gallery}>
            <div className={c.photozonePage__galleryTitleWrapper}></div>
            <p className={c.photozonePage__galleryTitle}>За 10 лет оформили более 1000 мероприятий и фотозон</p>
            <p className={c.photozonePage__gallerySubTitle}>Посмотрите некоторые из них.</p>
              <div className={c.photozonePage__galleryContainer}>
                <Swiper 
                  {...gallerySwiperParams} 
                  className='gallery__slider'
                >
                  {gallerySlides}
                </Swiper>
              </div>
          </div>
          <div className={c.photozonePage__reviews}>
            <ReviewsSection />
          </div>
          <div className={c.photozonePage__feedback}>
            <div className={c.photozonePage__feedbackTextWrapper}>
              <p className={c.photozonePage__feedbackTitle}>Забронировать фотозону в аренду</p>
              <div className={c.photozonePage__feedbackContacts}>
                <div className={c.photozonePage__feedbackCallMe}>
                  <p>Звоните нам по телефону:</p>
                  <p>{personalData.phoneMasked}</p>
                </div>
                <div className={c.photozonePage__feedbackWriteMe}>
                  <p>Пишите в мессенджеры:</p>
                  <div className={c.photozonePage__socials}><SocialLinks /></div>
                </div>
              </div>
              <CallBackModal buttonText={'Заказать звонок'} className={c.photozonePage__feedbackButton}/>
            </div>
            <div className={c.photozonePage__feedbackImageWrapper}>
              <img className={c.photozonePage__feedbackImage} src="https://lurieflowers2001.ru/wa-data/public/shop/products/59/74/7459/images/9943/9943.600x0.jpg" alt="Фото" width={200} />
            </div>
          </div>
          <div className={c.photozonePage__additional}>
            <p className={c.photozonePage__additionalTitle}>
              Популярные услуги:
            </p>
            <div className={c.photozonePage__additionalContent}>
              {additionalItems}
            </div>
          </div>
        </div>
      </div>
      <FloatButtonComponent />
    </section>
  );
};
