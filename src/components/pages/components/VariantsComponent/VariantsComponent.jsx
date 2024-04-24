import c from './VariantsComponent.module.scss';

export const VariantsComponent = ({ data }) => {

  const variants = data.map((item, index) => (
    <div className={c.variants__item} key={index}>
      <div className={c.variants__imageWrapper}>
        <img className={c.variants__image} src={item.image} alt={item.title} width={200} height={200} />
      </div>
      <h3 className={c.variants__itemTitle}>{item.title}</h3>
    </div>
  ))

  return (
    <div className={c.variants}>
      {variants}
    </div>
  )
}
