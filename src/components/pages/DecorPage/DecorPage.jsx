import { galleryData } from '../../../data/galleryData';
import { gallerySwiperParams } from '../../../data/swiperParams';
import { BreadcrumbsComponent } from '../../BreadcrumbsComponent/BreadcrumbsComponent';
import { FloatButtonComponent } from '../../FloatButtonComponent/FloatButtonComponent';
import c from './DecorPage.module.scss';
import { Image } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReviewsSection } from './../../ReviewsSection/ReviewsSection';
import { eventServicesData } from './../../EventServices/EventServices';
import { CallBackModal } from '../../CallBackModal/CallBackModal';
import { personalData } from '../../../data/personalData';
import { SocialLinks } from '../../SocialLinks/SocialLinks';
import { Link, useLocation } from 'react-router-dom';

const gallerySlidesReversed = [...galleryData].reverse();

const stepsData = [
  {
    title: 'Под ключ',
    text: 'Возьмем на себя все этапы оформления праздника: от разработки концепции до полной реализации проекта.',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/016/725/696/small_2x/cute-aesthetic-motivation-sticker-everything-will-be-ok-png.png',
  },
  {
    title: 'Полный комплекс услуг',
    text: 'Выполним любые работы: от установки фотозоны до тематического декора площадки.',
    image: 'https://avatanplus.com/files/resources/original/571a60695bd8e1543f089ba0.png',
  },
  {
    title: 'Подстроимся под бюджет',
    text: 'Предложим оригинальные решения для мероприятий любого уровня: от небольшого семейного праздника до крупного корпоратива.',
    image: 'https://www.pngall.com/wp-content/uploads/7/Finance-Budget-PNG-Image.png',
  },
];

const variantsData = [
  {
    title: 'Гирлянды из шаров',
    image: 'https://meshar.ru/wp-content/uploads/2018/08/girljanda-1-m.-250-r.-3.jpg',
  },
  {
    title: 'Арки из шаров',
    image: 'https://mosshar.ru/upload/resize_cache/iblock/941/852_485_1/qrheue7lmwt940egqxj4qrhvskg90uww.jpg',
  },
  {
    title: 'Разнокалиберные гирлянды',
    image: 'https://sharfun.ru/upload/iblock/8ee/8ee5f86a2ab0a7ff7357c785a06d89fd.jpg',
  },
  {
    title: 'Фигуры из шаров',
    image: 'https://vozdushnaya-feeriya.ru/image/cache/catalog/photos2/pchelka-s-tsvetami-iz-sharov-1000x1000.jpg',
  },
];

export const DecorPage = () => {
  const location = useLocation();
  const additionalData = eventServicesData.filter(item => item.link !== location.pathname);

  const steps = stepsData.map((step, index) => (
    <div className={c.decorPage__step} key={index}>
      <div className={c.decorPage__stepImageWrapper}>
        <img className={c.decorPage__stepImage} width={100} height={100} src={step.image} alt={step.title} />
      </div>
      <p className={c.decorPage__stepTitle}>{step.title}</p>
      <p className={c.decorPage__stepText}>{step.text}</p>
    </div>
  ))

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

  return (
    <section className={c.decorPage}>
      <h2 className='visually-hidden'>Оформление</h2>
      <div className={`${c.decorPage__container} container`}>
      <BreadcrumbsComponent pageName={'Оформление'} />
        <div className={c.innerPageHeader}>
          <div className={c.innerPageHeader__textWrapper}>
            <h3 className={c.innerPageHeader__title}>Оформление праздников в Ленинградской области и Санкт-Петербурге.</h3>
            <CallBackModal buttonText={'Заказать сейчас'} className={c.innerPageHeader__button}/>
          </div>
          <div className={c.innerPageHeader__imageWrapper}>
            <img className={c.innerPageHeader__image} src='https://lh3.googleusercontent.com/proxy/Eip8IIp5zNaH6nOMT3ah4_4CIaaAFSPI3YKdq9l7-7BRkvQO2FsxCip_nt0ybQeoUJ6ZLzUysPlsjzDNkIqlZDeN9ioNrnqSuyP0sFYp7ZyH8piSp2lUnn9h9qxuWFr5Fg' alt='Фото' width={200} height={200} />
          </div>
        </div>
        <div className={c.decorPage__content}>
          <div className={c.decorPage__contentTitleWrapper}>
            <p className={c.decorPage__contentTitle}>У нас есть все необходимое для оформления праздника</p>
            <p className={c.decorPage__contentSubTitle}>От разработки общей стилистики мероприятия до реализации мельчайших деталей.</p>
          </div>
          <div className={c.decorPage__steps}>
            {steps}
          </div>
          <div className={c.decorPage__variants}>
            {variants}
          </div>
          <div className={c.decorPage__gallery}>
            <div className={c.decorPage__galleryTitleWrapper}></div>
            <p className={c.decorPage__galleryTitle}>За 10 лет оформили более 1000 мероприятий</p>
            <p className={c.decorPage__gallerySubTitle}>Посмотрите некоторые из них.</p>
              <div className={c.decorPage__galleryContainer}>
                <Swiper 
                  {...gallerySwiperParams} 
                  className='gallery__slider'
                >
                  {gallerySlides}
                </Swiper>
              </div>
          </div>
          <div className={c.decorPage__reviews}>
            <ReviewsSection />
          </div>
          <div className={c.photozonePage__feedback}>
            <div className={c.photozonePage__feedbackTextWrapper}>
              <p className={c.photozonePage__feedbackTitle}>Заказать оформление мероприятия</p>
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
            <div className={c.decorPage__feedbackImageWrapper}>
              <img className={c.decorPage__feedbackImage} src="https://png.pngtree.com/png-vector/20240208/ourmid/pngtree-groovy-colorful-confetti-png-image_11714268.png" alt="Фото" width={200} />
            </div>
          </div>
          <div className={c.decorPage__additional}>
            <p className={c.decorPage__additionalTitle}>
              Популярные услуги:
            </p>
            <div className={c.decorPage__additionalContent}>
              {additionalItems}
            </div>
          </div>
        </div>
      </div>
      <FloatButtonComponent />
    </section>
  );
};
