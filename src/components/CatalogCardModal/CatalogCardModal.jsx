import React from 'react';
import c from './CatalogCardModal.module.scss';
import { Link } from 'react-router-dom';
import { Badge, Button, ConfigProvider, message, Modal, Tabs } from 'antd';
import LOGO_IMG from '../../assets/logo.png';
import { HeartFilled, HeartOutlined, ReadOutlined, ShoppingCartOutlined, TruckOutlined } from '@ant-design/icons';
import { personalData } from '../../data/personalData';
import { SvgIcon } from '../SvgIcon/SvgIcon';
import { termsData } from '../../data/termsData';
import { ToShoppingCartAction } from '../ToShoppingCartAction/ToShoppingCartAction';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const {delivery, payment, guarantee} = termsData;

export const CatalogCardModal = ({item, isModalOpen, setIsModalOpen, toggleFavorites, isFavorite}) => {
  const { article, title, description, price, oldPrice, image, hit, count } = item;

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const tabsItems = [
    {
      key: 'delivery',
      label: 'Доставка',
      children: delivery,
      icon: <ReadOutlined />,
    },
    {
      key: 'payment',
      label: 'Оплата',
      children: payment,
      icon: <TruckOutlined />,
    },
    {
      key: 'guarantee',
      label: 'Гарантия',
      children: guarantee,
      icon: <ShoppingCartOutlined />,
    },
  ];

  const favoritesButtonText = isFavorite ? 'В избранном' : 'В избранное';
  const favoritesButtonIcon = isFavorite ? <HeartFilled style={{color: 'red'}} /> : <HeartOutlined />;

  return (
    <Modal 
      width={800} 
      footer={null} 
      title={
        <img src={LOGO_IMG} width={120} alt="Логотип" />} 
      open={isModalOpen} 
      onOk={handleOk} 
      onCancel={handleCancel}
      className={c.cardModal__top}
      wrapClassName={c.cardModal__topWrap}
    >
      <div className={c.cardModal}>
        <div className={c.cardModal__main}>
          <div className={c.cardModal__image}>
            <img src={image} width={400} alt={title} />
          </div>
          <div className={c.cardModal__mainInfo}>

        {/* Заголовок */}
            <p className={c.cardModal__title}>{title}</p>

        {/* Прайсбокс */}
            <div className={c.cardModal__priceBox}>
              <p className={c.cardModal__price}>{price} &#8381;</p>
              {oldPrice && <p className={c.cardModal__oldPrice}>{oldPrice} &#8381;</p>}
              <div className={c.cardModal__badges}>
                {oldPrice && <span style={{backgroundColor: '#f83939'}}>Акция</span>}
                {hit && <span style={{backgroundColor: 'rgb(77, 182, 40)'}}>Хит</span>}
              </div>
            </div>

        {/* Количество */}
              {count>=1 ? 
                <div className={c.cardModal__inStockWrapper}><Badge status="success" /><span className={c.cardModal__inStock}>Есть в наличии</span></div> 
              : <div className={c.cardModal__inStockWrapper}><Badge status="warning" /><span className={c.cardModal__inStock}>Доступно для заказа</span></div>
              }

        {/* Артикул */}
            <p className={c.cardModal__article}>
              Артикул:
              <CopyToClipboard 
                text={article} 
                onCopy={() => message.info('Артикул скопирован в буфер обмена')}
              >
                  <span style={{ cursor: 'pointer', marginLeft: '5px' }}>{article}</span>
              </CopyToClipboard>, {count}
            </p>

        {/* Описание */}
            <div className={c.cardModal__description}>
              {description}
            </div>

            <div className={c.cardModal__userActions}>
        {/* В избранное и В корзину */}
              <div className={c.cardModal__userActionsInner}>
                <Button onClick={toggleFavorites}>{favoritesButtonIcon} {favoritesButtonText}</Button>
                <ToShoppingCartAction item={item} text />
              </div>
              <div className={c.cardModal__userActionsOuter}>
                <p className={c.cardModal__userActionsOuterNotation}>Задать вопрос:</p>
                <div className={c.cardModal__userActionsOuterLinks}>
                  <Link target = "_blank" to={personalData.telegram}>
                    <SvgIcon icon='telegram' />
                  </Link>
                  <Link target = "_blank" to={personalData.whatsapp}>
                    <SvgIcon icon='whatsapp' />
                  </Link>
                  <Link target = "_blank" to={personalData.vkontakte}>
                    <SvgIcon icon='vk' />
                  </Link>
                  <a href={`tel:${personalData.phone}`}>
                    <SvgIcon icon='phone' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Табы */}
        <div className={c.cardModal__additional}>
          <ConfigProvider
            theme={{
              components: {
                Tabs: {
                  inkBarColor: '#bebebe',
                  itemSelectedColor: '#000000',
                  itemHoverColor: '#000000',
                  itemColor: '#909090',
                },
              },
            }}
          >
            <Tabs
              defaultActiveKey="1"
              centered
              items={tabsItems}
              className={`catalogCardModal__tabs`}
            />
          </ConfigProvider>
        </div>
      </div>
    </Modal>
)};

