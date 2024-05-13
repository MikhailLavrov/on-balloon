import c from './FeedbackSection.module.scss';
import { personalData } from '../../data/personalData';
import { SocialLinks } from '../SocialLinks/SocialLinks';
import { CallBackModal } from '../CallBackModal/CallBackModal';
import { ImagePreloader } from '../../utils/ImagePreloader/ImagePreloader';
import { Image } from 'antd';

export const FeedbackSection = (props) => {
  const {
    imageSrc,
    imageClassName,
    title = 'Заказать оформление мероприятия'
  } = props;

  return (
    <div className={c.feedback}>
      <div className={`container ${c.feedback__container}`}>
      <div className={c.feedback__textWrapper}>
        <p className={c.feedback__title}>{title}</p>
        <div className={c.feedback__contacts}>
          <div className={c.feedback__callMe}>
            <p>Звоните нам по телефону:</p>
            <p>{personalData.phoneMasked}</p>
          </div>
          <div className={c.feedback__writeMe}>
            <p>Пишите в мессенджеры:</p>
            <div className={c.feedback__socials}><SocialLinks /></div>
          </div>
        </div>
        <CallBackModal buttonText={'Заказать звонок'} className={c.feedback__button}/>
      </div>
      {imageSrc &&
      <div className={c.feedback__imageWrapper}>
        <Image
          className={imageClassName}
          src={imageSrc}
          alt="Фото"
          width={'auto'}
          preview={false}
          placeholder={<ImagePreloader />}
        />
      </div>
      }
        
      </div>
    </div>
  )
}
