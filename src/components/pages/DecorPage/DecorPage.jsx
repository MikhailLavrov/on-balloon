import { BreadcrumbsComponent } from '../../BreadcrumbsComponent/BreadcrumbsComponent';
import { FloatButtonComponent } from '../../FloatButtonComponent/FloatButtonComponent';
import c from './DecorPage.module.scss';
import { ReviewsSection } from './../../ReviewsSection/ReviewsSection';
import { eventServicesData } from './../../EventServices/EventServices';
import { CallBackModal } from '../../CallBackModal/CallBackModal';
import { Link, useLocation } from 'react-router-dom';
import { SecondaryFeedbackComponent } from '../../SecondaryFeedbackComponent/SecondaryFeedbackComponent';
import { SecondaryGallerySection } from '../../SecondaryGallerySection/SecondaryGallerySection';

const FEEDBACK_IMAGE = 'https://png.pngtree.com/png-vector/20240208/ourmid/pngtree-groovy-colorful-confetti-png-image_11714268.png';

const stepsData = [
  {
    title: 'Под ключ',
    text: 'Возьмем на себя все этапы оформления праздника: от разработки концепции до полной реализации проекта',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/016/725/696/small_2x/cute-aesthetic-motivation-sticker-everything-will-be-ok-png.png',
  },
  {
    title: 'Полный комплекс услуг',
    text: 'Выполним любые работы: от установки фотозоны до тематического декора площадки',
    image: 'https://avatanplus.com/files/resources/original/571a60695bd8e1543f089ba0.png',
  },
  {
    title: 'Подстроимся под бюджет',
    text: 'Предложим оригинальные решения для мероприятий любого уровня: от небольшого семейного праздника до крупного корпоратива',
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
  const pageName = eventServicesData.find(item => item.link === location.pathname).title;

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
      <h2 className='visually-hidden'>{pageName}</h2>
      <div className={`${c.decorPage__container} container`}>
      <BreadcrumbsComponent pageName={pageName} />
        <div className={c.decorPage__header}>
          <div className={c.decorPage__textWrapper}>
            <h3 className={c.decorPage__title}>Оформление праздников в Ленинградской области и Санкт-Петербурге</h3>
            <CallBackModal buttonText={'Заказать сейчас'} className={c.decorPage__button}/>
          </div>
          <div className={c.decorPage__imageWrapper}>
            <img className={c.decorPage__image} src='https://lh3.googleusercontent.com/proxy/Eip8IIp5zNaH6nOMT3ah4_4CIaaAFSPI3YKdq9l7-7BRkvQO2FsxCip_nt0ybQeoUJ6ZLzUysPlsjzDNkIqlZDeN9ioNrnqSuyP0sFYp7ZyH8piSp2lUnn9h9qxuWFr5Fg' alt='Фото' width={200} height={200} />
          </div>
        </div>
        <div className={c.decorPage__content}>
          <div className={c.decorPage__contentTitleWrapper}>
            <p className={c.decorPage__contentTitle}>У нас есть все необходимое для оформления праздника</p>
            <p className={c.decorPage__contentSubTitle}>От разработки общей стилистики мероприятия до реализации мельчайших деталей</p>
          </div>
          <div className={c.decorPage__steps}>
            {steps}
          </div>
          <div className={c.variants}>
            {variants}
          </div>
          <SecondaryGallerySection
            reversed
            title={'За 10 лет оформили более 1000 мероприятий'}
            subTitle={'Посмотрите некоторые из них'}
          />
          <div className={c.decorPage__reviews}>
            <ReviewsSection />
          </div>
          <SecondaryFeedbackComponent
            imageSrc={FEEDBACK_IMAGE}
            imageClassName={c.decorPage__feedbackImage} 
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
