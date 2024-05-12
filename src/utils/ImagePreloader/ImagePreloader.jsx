import { Spin } from "antd"
import c from './ImagePreloader.module.scss';

export const ImagePreloader = () => {
  return (
    <div className={c.imagePreloader} >
      <Spin size='small'/>
    </div>
  )
}
