import { personalData } from "../../data/personalData";
import { CallBackModal } from "../CallBackModal/CallBackModal";
import { SocialLinks } from "../SocialLinks/SocialLinks";
import c from './SecondaryFeedbackComponent.module.scss';

export const SecondaryFeedbackComponent = (props) => {
  const {imageSrc, imageClassName} = props;

  return (
    <div className={c.feedback}>
      <div className={c.feedback__textWrapper}>
        <p className={c.feedback__title}>Заказать оформление мероприятия</p>
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
        <img className={imageClassName} src={imageSrc} alt="Фото" width={200} />
      </div>
      }
    </div>
  )
}
