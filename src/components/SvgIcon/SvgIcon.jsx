import Icons from '../../assets/sprite.svg';

export const SvgIcon = ({icon, style, className}) => {
  return (
    <svg width={50} height={50} data-svg-icon style={style} className={className}>
      <use href={`${Icons}#${icon}`} />
   </svg>
  )
}
