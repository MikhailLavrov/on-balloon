import { Image } from 'antd';
import { ImagePreloader } from '../../../../utils/ImagePreloader/ImagePreloader';
import { CallBackModal } from '../../../CallBackModal/CallBackModal';
import c from './HeaderAlt.module.scss';

export const HeaderAlt = (props) => {
  const {
    title,
    subTitle,
    buttonText='Заказать сейчас',
    imageSrc,
    imageWrapperClassName,
    imagePreloaderStyle,
  } = props;

  return (
    <div className={c.header}>
      <div className={c.header__textWrapper}>
        <p className={c.header__title}>{title}</p>
        {subTitle && <p className={c.header__subTitle}>{subTitle}</p>}
        <CallBackModal buttonText={buttonText} className={c.header__button}/>
      </div>
      <div className={`${c.header__imageWrapper} ${imageWrapperClassName}`}>
        <Image
          src={imageSrc}
          alt='Фото'
          width={'auto'}
          preview={false}
          placeholder={<ImagePreloader style={imagePreloaderStyle && imagePreloaderStyle} />}
        />
      </div>
    </div>
  )
}
