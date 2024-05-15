import React, { useCallback, useEffect, useState } from 'react';
import c from './ProductCardModal.module.scss';
import { useSearchParams } from 'react-router-dom';
import { Badge, Button, ConfigProvider, Image, message, Modal, Spin, Tabs } from 'antd';
import LOGO_IMG from '../../assets/logotext.png';
import { CheckCircleFilled, CloseOutlined, HeartFilled, HeartOutlined, ReadOutlined, ShoppingCartOutlined, SkinOutlined, TruckOutlined } from '@ant-design/icons';
import { SvgIcon } from '../SvgIcon/SvgIcon';
import { cardAdditionalData } from '../../data/cardAdditionalData';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { TelegramShareButton, ViberShareButton, VKShareButton, WhatsappShareButton } from "react-share";
import FALLBACK from '../../assets/catalog/fallback.webp';
import { ImagePreloader } from '../../utils/ImagePreloader/ImagePreloader';
import { CostumeSelect } from './CostumeSelect/CostumeSelect';
import { useDispatch, useSelector } from 'react-redux';
import { clearSelectedCostume, loadStateFromStorage } from '../../redux/costumeSlice';

const {delivery, payment, guarantee} = cardAdditionalData;

export const ProductCardModal = (props) => {
  const { 
    item,
    isOpen,
    openModal,
    closeModal,
    toggleFavorites,
    isFavorite,
    togglePurchases,
    isInCart,
  } = props;

  const {
    article,
    title,
    description,
    additional,
    price,
    oldPrice,
    image,
    hit,
    count,
    // costume,
  } = item;
  
  const currentUrl = window.location.href;
  const selectedCostumes = useSelector((state) => state.costume.selectedCostumes);
  const [ searchParams, setSearchParams ] = useSearchParams();
  const [ isAnimationData, setIsAnimationData ] = useState(false);
  const [isCommercialData, setIsCommercialData] = useState(false);
  const [ isCostumeSelectOpen, setIsCostumeSelectOpen ] = useState(false);
  const [ currentCostume, setCurrentCostume ] = useState(selectedCostumes[article] || null);
  const dispatch = useDispatch();

  useEffect(() => {
    const localStorageCostumeState = localStorage.getItem('selectedCostumes');
    if (localStorageCostumeState) {
      dispatch(loadStateFromStorage(JSON.parse(localStorageCostumeState)));
    }
  }, [dispatch]);
  
  useEffect(() => {
    setIsCostumeSelectOpen(false);
  }, [isOpen])

  useEffect(() => {
    setIsAnimationData(article.startsWith('animation'));
    setIsCommercialData(article.startsWith('commercial'));
  }, [article])
  
  useEffect(() => {
    const product = searchParams.get('product');
    if (product && product === article) {
      openModal();
    }
  }, [article, searchParams, openModal])

  const splitedData = useCallback((data) => {
    return (
      data.split('\n').map((line, index) => (
        <p key={index} style={{margin: 0}}>{line}</p>
      ))
    )
  }, []);
  
  const handleCancel = () => {
    closeModal();
    setSearchParams(params => {
      params.delete('product');
      return params;
    });
  };

  const clearCurrentCostume = () => {
    setCurrentCostume(null);
    dispatch(clearSelectedCostume({ itemId: article }));
    const updatedCostumes = { ...selectedCostumes };
    delete updatedCostumes[article];
    localStorage.setItem('selectedCostumes', JSON.stringify(updatedCostumes));
  };

  const tabsItems = [
    additional && {
      key: 'additional',
      label: 'Описание',
      children: splitedData(additional),
      icon: <ReadOutlined />,
    },
    {
      key: 'delivery',
      label: 'Доставка',
      children: splitedData(delivery),
      icon: <ReadOutlined />,
    },
    {
      key: 'payment',
      label: 'Оплата',
      children: splitedData(payment),
      icon: <TruckOutlined />,
    },
    {
      key: 'guarantee',
      label: 'Гарантия',
      children: splitedData(guarantee),
      icon: <ShoppingCartOutlined />,
    },
  ];

  const favoritesButtonText = isFavorite ? 'В избранном' : 'В избранное';
  const favoritesButtonIcon = isFavorite ? <HeartFilled style={{color: 'red'}} /> : <HeartOutlined />;
  const shoppingCartButtonText = isInCart ? 'В корзине' : 'В корзину';
  const shoppingCartButtonIcon = isInCart ? <CheckCircleFilled style={{color: 'green'}} /> : <ShoppingCartOutlined />;

  return (
    <Modal 
      width={800} 
      footer={null} 
      title={
        <Image
          src={LOGO_IMG}
          width={120}
          height={23}
          alt="Логотип"
          preview={false}
          placeholder={<ImagePreloader />}
        />} 
      open={isOpen} 
      onOk={handleCancel} 
      onCancel={handleCancel}
      className={`${c.cardModal__top} productCardModal`}
      wrapClassName={c.cardModal__topWrap}
    >
      {!isCostumeSelectOpen ? 
      <div className={c.cardModal}>
        <div className={c.cardModal__main}>
          <div className={c.cardModal__imageWrapper}>
            <Image
              className={c.cardModal__image}
              src={image}
              width={'auto'}
              alt={title}
              preview={false}
              fallback={FALLBACK}
              placeholder={
                <div className={c.imagePreloader} >
                  <Spin size='small'/>
                </div>
              }
            />
          </div>
          <div className={c.cardModal__mainInfo}>

          {/* Заголовок */}
            <p className={c.cardModal__title}>{title}</p>

          {/* Прайсбокс */}
            <div className={c.cardModal__priceBox}>
              <p className={c.cardModal__price}>{price.toLocaleString('ru-RU')} &#8381;</p>
              {oldPrice && <p className={c.cardModal__oldPrice}>{oldPrice.toLocaleString('ru-RU')} &#8381;</p>}
              <div className={c.cardModal__badges}>
                {oldPrice && <span style={{backgroundColor: '#f83939'}}>Акция</span>}
                {hit && <span style={{backgroundColor: 'rgb(77, 182, 40)'}}>Хит</span>}
              </div>
            </div>

          {/* Количество */}
            {!isAnimationData && !isCommercialData && count &&
              <div className={c.cardModal__inStockWrapper}><Badge status="success" /><span className={c.cardModal__inStock}>Есть в наличии</span></div> 
            }

          {/* Артикул */}
            {!isAnimationData && !isCommercialData && article &&
              <p className={c.cardModal__article}>
                Артикул:
                <CopyToClipboard 
                  text={article} 
                  onCopy={() => message.info('Артикул скопирован в буфер обмена')}
                >
                  <span style={{ cursor: 'pointer', marginLeft: '5px' }}>{article}</span>
                </CopyToClipboard>
              </p>
            }

          {/* Описание */}
            <div className={c.cardModal__description}>
              {splitedData(description)}
            </div>

          {/* В избранное и В корзину */}
            <div className={c.cardModal__userActions}>
              <div className={c.cardModal__userActionsInner}>

                {/* Если категория Анимация */}
                {isAnimationData ?
                  (isInCart ?
                    selectedCostumes[article] ? // есть ВЫБРАННЫЙ КОСТЮМ ?
                     // показываем ВЫБРАННЫЙ КОСТЮМ...
                      <div className={c.cardModal__currentSuite}>
                        <p className={c.cardModal__currentSuiteTitle}>Выбранный костюм: {selectedCostumes[article]}</p>
                        <Button
                          className={c.cardModal__currentSuiteClearButton}
                          onClick={clearCurrentCostume}
                        >
                          <CloseOutlined />
                        </Button>
                      </div>
                      : <Button 
                          icon={<SkinOutlined />} // или показываем кнопку ВЫБРАТЬ КОСТЮМ
                          className={c.cardModal__chooseSuiteButton}
                          onClick={() => setIsCostumeSelectOpen(true)}
                        >
                          Выбрать костюм
                        </Button>
                    : <p className={c.cardModal__chooseAttention}>Добавьте товар в корзину, чтобы выбрать костюм</p>
                  )
                  /* Если категория НЕ Анимация то ничего не показываем */
                  : null
                }

                <Button 
                  onClick={toggleFavorites} 
                  size="large"
                  className={`${c.cardModal__actionButton} ${isFavorite && c.favoriteButton__active}`}
                  >
                  {favoritesButtonIcon} {favoritesButtonText}
                </Button>
                
                <Button 
                  onClick={togglePurchases} 
                  className={`${c.cardModal__actionButton} ${isInCart && c.inCartButton__active}`}
                  size="large"
                  // disabled={!currentCostume}
                >
                  {shoppingCartButtonIcon} {shoppingCartButtonText}
                </Button>
              </div>
              <div className={c.cardModal__shareWrapper}>
                <p className={c.cardModal__shareTitle}>Поделиться:</p>
                <div className={c.cardModal__shareLinks}>
                  <TelegramShareButton url={currentUrl} className={c.cardModal__shareLink}>
                    <SvgIcon icon='telegram' className={c.svgIcon} />
                  </TelegramShareButton>
                  <WhatsappShareButton url={currentUrl} className={c.cardModal__shareLink}>
                    <SvgIcon icon='whatsapp' className={c.svgIcon} />
                  </WhatsappShareButton>
                  <VKShareButton url={currentUrl} className={c.cardModal__shareLink}>
                    <SvgIcon icon='vk' className={c.svgIcon} />
                  </VKShareButton>
                  <ViberShareButton url={currentUrl} className={c.cardModal__shareLink}>
                    <SvgIcon icon='viber' className={c.svgIcon} />
                  </ViberShareButton>
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
              items={tabsItems}
              className={`catalogCardModal__tabs`}
            />
          </ConfigProvider>
        </div>
      </div>
      : isAnimationData &&
      <>
        <div className={c.costumeSection}>
          <Button
            onClick={() => setIsCostumeSelectOpen(false)}
          >
            Назад
          </Button>
        </div>
        <CostumeSelect
          setIsCostumeSelectOpen={setIsCostumeSelectOpen}
          isCostumeSelectOpen={isCostumeSelectOpen}
          setCurrentCostume={setCurrentCostume}
          currentCostume={currentCostume}
          article={article}
        />
      </>
      }
    </Modal>
)};
