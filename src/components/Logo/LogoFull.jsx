import { Link } from "react-router-dom"
import LOGO_IMG from '../../assets/logotext.png';
import { Image } from "antd";
import { ImagePreloader } from './../../utils/ImagePreloader/ImagePreloader';

export const LogoFull = ({linkClassName, imageClassName}) => {
  return (
    <Link className={linkClassName} to={''}>
      <Image
        className={imageClassName}
        src={LOGO_IMG}
        width={'100%'}
        alt="Логотип"
        preview={false}
        placeholder={<ImagePreloader />}
      />
    </Link>
  )
}
