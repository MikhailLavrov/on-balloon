import Icons from '../../assets/sprite.svg';

export const SvgIcon = ({icon, style}) => {
  return (
    <svg width={50} height={50} data-svg-icon style={style}>
      <use href={`${Icons}#${icon}`} />
   </svg>
  )
}
