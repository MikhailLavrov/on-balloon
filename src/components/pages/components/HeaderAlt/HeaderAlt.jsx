import { CallBackModal } from '../../../CallBackModal/CallBackModal';
import c from './HeaderAlt.module.scss';

export const HeaderAlt = (props) => {
  const {
    title,
    subTitle,
    buttonText='Заказать сейчас',
    imageSrc,
    secondaryImageSrc,
    imageWrapperClassName,
  } = props;

  return (
    <div className={c.header}>
      <div className={c.header__textWrapper}>
        <p className={c.header__title}>{title}</p>
        {subTitle && <p className={c.header__subTitle}>{subTitle}</p>}
        <CallBackModal buttonText={buttonText} className={c.header__button}/>
      </div>
      <div className={`${c.header__imageWrapper} ${imageWrapperClassName}`}>
        <img src={imageSrc} alt='Фото' width={200} height={200} />
        {secondaryImageSrc && <img src={secondaryImageSrc} alt='Фото' width={200} height={200} />}
      </div>
    </div>
  )
}
