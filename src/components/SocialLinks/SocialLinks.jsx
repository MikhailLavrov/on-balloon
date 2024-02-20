import { Link } from 'react-router-dom';
import { SvgIcon } from '../SvgIcon/SvgIcon';
import { personalData } from '../../data/personalData';
// import c from './SocialLinks.module.scss';

export const SocialLinks = () => {
  return (
    <>
      <Link target = "_blank" to={personalData.telegram}>
        <SvgIcon icon='telegram' />
      </Link>
      <Link target = "_blank" to={personalData.whatsapp}>
        <SvgIcon icon='whatsapp' />
      </Link>
      <Link target = "_blank" to={personalData.vkontakte}>
        <SvgIcon icon='vk' />
      </Link>
    </>
  )
}
