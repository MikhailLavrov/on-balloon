import { Button } from 'antd';
import c from './CorporativeOffer.module.scss';
import { Link } from 'react-router-dom';
import { CloseOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { CallBackModal } from './../CallBackModal/CallBackModal';

const corporativeImages = [
  'https://sharikibom.ru/wp-content/uploads/2021/03/img_7716-1000x1000-1.jpg',
  'https://activbtl.ru/wp-content/uploads/post-1779-animator-2-min.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlh82LQYyT3U_GuNFuyCzlzRJv30zhibZ9hW5cnWvaRA&s',
  'https://r-apelsin.ru/wp-content/uploads/2021/11/prazdnik-na-otkrytie.jpg',
];

const corporativeFeatures = [
  'Сделаем эксклюзивное коммерческое предложение под конкретные задачи',
  'Разработаем подробный макет визуальной составляющей',
  'Подготовим договор на оформление воздушными шарами или полного сопровождения торжественной части мероприятия',
];

const corporativeTiles = [
  'Украшение входной группы и торгового зала',
  'Изготовление промо-материалов',
  'Команда аниматоров для взрослых и детей',
  'Event обслуживание крупных сетевых компаний на основании контракта по тендеру',
  'Звуковое сопровождение с ведущим и диджеем',
  'Создание фото-зоны для посетителей',
  'Проведение розыгрышей',
  'Ростовые куклы',
  'Фото и видео съемка',
  'Аэромены',
  'Сладкая вата, попкорн',
  'Брендированные шарики на палочке',
  'Шоу и артисты',
];

export const CorporativeOffer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isInStorage = sessionStorage.getItem('hideCorporativeOffer');
    if (!isInStorage) {
      setIsVisible(true);
    }
  }, [isVisible])

  const handleClose = () => {
    sessionStorage.setItem('hideCorporativeOffer', true)
    setIsVisible(false);
  }

  return (
    isVisible ?
      (<section className={c.corporative}>
        <h2 className="visually-hidden">Предложение для бизнеса</h2>
        <div className='container'>
          <div className={c.corporative__container}>
            <div className={c.corporative__header}>
              <h3 className={c.corporative__title}>Вы представитель бизнеса?</h3>
              <Button className={c.corporative__closeButton} onClick={handleClose}>
                <CloseOutlined />
              </Button>
            </div>
            <div className={c.corporative__content}>
              <div className={c.corporative__textWrapper}>
                <div className={c.corporative__text}>
                  <h4 className={c.corporative__textLabel}>Создадим яркий акцент для вашей компании!</h4>
                  <ul className={c.corporative__featuresList}>
                    {corporativeFeatures.map((feature, index) => (
                      <li key={index}>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={c.corporative__tiles}>
                  {corporativeTiles.map((tile, index) => (
                    <span key={index}>
                      {tile}
                    </span>
                  ))}
                </div>
              </div>
              <div className={c.corporative__imageWrapper}>
                {corporativeImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    width={200}
                    height={200}
                    className={c.corporative__image}
                    alt='Фото' 
                  />
                ))}
              </div>
              <div className={c.corporative__contactsWrapper}>
                <CallBackModal buttonText='Заказать обратный звонок' className={c.corporative__callbackButton} />
                <Link className={c.corporative__moreLink} to={'/info/cooperation'}>Подробнее {'>>'}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    ) : null
  
  )
}
