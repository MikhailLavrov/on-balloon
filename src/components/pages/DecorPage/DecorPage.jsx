import { BreadcrumbsComponent } from '../../BreadcrumbsComponent/BreadcrumbsComponent';
import { FloatButtonComponent } from '../../FloatButtonComponent/FloatButtonComponent';
import c from './DecorPage.module.scss';
import { ReviewsSection } from './../../ReviewsSection/ReviewsSection';
import { eventServicesData } from './../../EventServices/EventServices';
import { useLocation } from 'react-router-dom';
import { FeedbackAlt } from '../components/FeedbackAlt/FeedbackAlt';
import { GallerySectionAlt } from '../components/GallerySectionAlt/GallerySectionAlt';
import { HeaderAlt } from '../components/HeaderAlt/HeaderAlt';
import { VariantsComponent } from '../components/VariantsComponent/VariantsComponent';
import { AdditionalSection } from '../components/AdditionalSection/AdditionalSection';

const FEEDBACK_IMAGE = 'https://png.pngtree.com/png-vector/20240208/ourmid/pngtree-groovy-colorful-confetti-png-image_11714268.png';

const HEADER_IMAGE = 'https://lh3.googleusercontent.com/proxy/Eip8IIp5zNaH6nOMT3ah4_4CIaaAFSPI3YKdq9l7-7BRkvQO2FsxCip_nt0ybQeoUJ6ZLzUysPlsjzDNkIqlZDeN9ioNrnqSuyP0sFYp7ZyH8piSp2lUnn9h9qxuWFr5Fg';

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

  return (
    <section className={c.decorPage}>
      <h2 className='visually-hidden'>{pageName}</h2>
      <div className={`${c.decorPage__container} container`}>
      <BreadcrumbsComponent pageName={pageName} />
        <HeaderAlt
          title={'Оформление праздников в Ленинградской области и Санкт-Петербурге'}
          imageSrc={HEADER_IMAGE}
          imageWrapperClassName={c.decorPage__imageWrapper}
        />
        <div className={c.decorPage__content}>
          <div className={c.decorPage__contentTitleWrapper}>
            <p className={c.decorPage__contentTitle}>У нас есть все необходимое для оформления праздника</p>
            <p className={c.decorPage__contentSubTitle}>От разработки общей стилистики мероприятия до реализации мельчайших деталей</p>
          </div>
          <VariantsComponent data={variantsData} />
          <div className={c.decorPage__steps}>
            {steps}
          </div>
          <GallerySectionAlt
            reversed
            title={'За 10 лет оформили более 1000 мероприятий'}
            subTitle={'Посмотрите некоторые из них'}
          />
          <div className={c.decorPage__reviews}>
            <ReviewsSection />
          </div>
          <FeedbackAlt
            imageSrc={FEEDBACK_IMAGE}
            imageClassName={c.decorPage__feedbackImage} 
          />
          <AdditionalSection location={location} />
        </div>
      </div>
      <FloatButtonComponent />
    </section>
  );
};
