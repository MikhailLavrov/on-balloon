import c from './ContentHeader.module.scss';

export const ContentHeader = (props) => {
  const {title, subTitle} = props;

  return (
    <div className={c.contentHeader}>
      <p className={c.contentHeader__title}>{title}</p>
      {subTitle && <p className={c.contentHeader__subTitle}>{subTitle}</p>}
    </div>
  )
}
