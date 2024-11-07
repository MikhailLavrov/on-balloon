import { Link } from "react-router-dom"
import LOGO_IMG from '../../assets/logotext.webp';
import { Image } from "antd";
import { ImagePreloader } from './../../utils/ImagePreloader/ImagePreloader';

export const LogoFull = ({linkClassName, imageClassName}) => {
  return (
    <Link className={linkClassName} to={''}>
      <Image
        className={imageClassName}
        src={LOGO_IMG}
        alt="Логотип"
        width={'100%'}
        preview={false}
        placeholder={<ImagePreloader style={{background: 'transparent'}} />}
      />
    </Link>
  )
}
