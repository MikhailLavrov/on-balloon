import { Link } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';

export const BackButton = ({backTo, className}) => (
  <Link className={className} to={`/${backTo}`}><LeftOutlined /></Link>
);
