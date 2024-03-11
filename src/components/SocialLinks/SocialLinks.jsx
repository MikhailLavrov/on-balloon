import { Link } from 'react-router-dom';
import { SvgIcon } from '../SvgIcon/SvgIcon';
import { personalData } from '../../data/personalData';
import c from './SocialLinks.module.scss';

export const SocialLinks = () => {
  return (
    <>
      <Link className={c.socialLink} target = "_blank" to={personalData.telegram}>
        <SvgIcon icon='telegram2' style={{backgroundColor: '#2AABEE'}} /><span>Telegram</span>
      </Link>
      <Link className={c.socialLink} target = "_blank" to={personalData.whatsapp}>
        <SvgIcon icon='whatsapp2' style={{backgroundColor: '#2BB741'}} /><span>Whatsapp</span>
      </Link>
      <Link className={c.socialLink} target = "_blank" to={personalData.vkontakte}>
        <SvgIcon icon='vk2' style={{backgroundColor: '#0077FF'}} /><span>ВКонтакте</span>
      </Link>
    </>
  )
}
