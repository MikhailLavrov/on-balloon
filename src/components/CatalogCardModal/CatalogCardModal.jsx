import React from 'react';
import c from './CatalogCardModal.module.scss';
import { Link } from 'react-router-dom';
import { Badge, Button, Modal } from 'antd';
import LOGO_IMG from '../../assets/logo.png';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { personalData } from '../../data/personalData';
import { SvgIcon } from '../SvgIcon/SvgIcon';

export const CatalogCardModal = ({item, isModalOpen, setIsModalOpen}) => {
  const {category, article, title, description, price, oldPrice, image, hit, count} = item;
  
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal 
      width={800} 
      footer={null} 
      title={
        <img src={LOGO_IMG} width={150} alt="Логотип" />} 
      open={isModalOpen} 
      onOk={handleOk} 
      onCancel={handleCancel}
    >
      <div className={c.cardModal}>
        <div className={c.cardModal__main}>
          <div className={c.cardModal__image}>
            <img src={image} width={400} alt={title} />
          </div>
          <div className={c.cardModal__mainInfo}>
            <p className={c.cardModal__title}>{title}</p>
            <div className={c.cardModal__priceBox}>
              <p className={c.cardModal__price}>{price} &#8381;</p>
              {oldPrice && <p className={c.cardModal__oldPrice}>{oldPrice} &#8381;</p>}
              <div className={c.cardModal__badges}>
                {oldPrice && <span style={{backgroundColor: '#f83939'}}>Акция</span>}
                {hit && <span style={{backgroundColor: 'rgb(77, 182, 40)'}}>Хит</span>}
              </div>
            </div>
            <p className={c.cardModal__article}>Артикул: {article}</p>
            {count>=1 ? 
              <div className={c.cardModal__inStockWrapper}><Badge status="success" /><span className={c.cardModal__inStock}>Есть в наличии</span></div> 
            : <div className={c.cardModal__inStockWrapper}><Badge status="warning" /><span className={c.cardModal__inStock}>Скоро в продаже</span></div>}
            <div className={c.cardModal__userActions}>
              <div className={c.cardModal__userActionsInner}>
                <Button>В избранное <HeartOutlined /></Button>
                <Button>В корзину <ShoppingCartOutlined /></Button>
              </div>
              <div className={c.cardModal__userActionsOuter}>
                <p className={c.cardModal__userActionsOuterNotation}>Задать вопросы:</p>
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
      </div>
    </Modal>
)};
