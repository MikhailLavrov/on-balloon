import c from './StepsSection.module.scss';

export const StepsSection = (props) => {
  const {data, title, subTitle} = props;

  const steps = data.map((step, index) => (
    <div className={c.step} key={index}>
      <div className={c.step__imageWrapper}>
        <img className={c.step__image} width={100} height={100} src={step.image} alt={step.title} />
      </div>
      <div className={c.step__textWrapper}>
        <p className={c.step__title}>{step.title}</p>
        <p className={c.step__text}>{step.text}</p>
      </div>
    </div>
  ))

  return (
    <div className={c.steps}>
      {title && <p className={c.steps__title}>{title}</p>}
      {subTitle && <p className={c.steps__subTitle}>{subTitle}</p>}
      <div className={c.steps__wrapper}>
        {steps}
      </div>
    </div>
  )
}
