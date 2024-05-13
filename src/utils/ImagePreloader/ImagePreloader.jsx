import { Spin } from "antd"
import c from './ImagePreloader.module.scss';

export const ImagePreloader = ({style}) => {
  return (
    <div className={c.imagePreloader} style={style && style} >
      <Spin size='small'/>
    </div>
  )
}
