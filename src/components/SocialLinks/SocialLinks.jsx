import { Link } from 'react-router-dom';
import { SvgIcon } from '../SvgIcon/SvgIcon';
import { personalData } from '../../data/personalData';
import c from './SocialLinks.module.scss';

export const SocialLinks = () => {
  return (
    <>
      <Link className={`${c.socialLink} ${c.socialLink__telegram}`} target = "_blank" to={personalData.telegram}>
        <SvgIcon icon='telegram2' /><span>Telegram</span>
      </Link>
      <Link className={`${c.socialLink} ${c.socialLink__whatsapp}`} target = "_blank" to={personalData.whatsapp}>
        <SvgIcon icon='whatsapp2' /><span>Whatsapp</span>
      </Link>
      <Link className={`${c.socialLink} ${c.socialLink__vk}`} target = "_blank" to={personalData.vkontakte}>
        <SvgIcon icon='vk2' /><span>ВКонтакте</span>
      </Link>
    </>
  )
}
