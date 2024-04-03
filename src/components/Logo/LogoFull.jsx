import { Link } from "react-router-dom"
import LOGO_IMG from '../../assets/logotext.png';

export const LogoFull = ({className}) => {
  return (
    <Link className={className} to={''}>
      <img src={LOGO_IMG} width={80} alt="Логотип" />
    </Link>
  )
}
