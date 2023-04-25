import Icons from '../../assets/sprite.svg';

export const SvgIcon = ({icon}) => {
  return (
    <svg width={50} height={50} data-svg-icon>
      <use href={`${Icons}#${icon}`} />
   </svg>
  )
}
