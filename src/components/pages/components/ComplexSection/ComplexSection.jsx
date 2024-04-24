import { CallBackModal } from '../../../CallBackModal/CallBackModal';
import c from './ComplexSection.module.scss';

export const ComplexSection = ({data}) => {

  const complexItems = data.map((item, index) => (
    <div className={c.complex__item} key={index}>
      <p className={c.complex__itemTitle}>{item.title}</p>
      <p className={c.complex__itemPrice}>{item.price.toLocaleString('ru-RU')}</p>
      <ul className={c.complex__itemList}>
        {item.children.map((childItem, index) => (
          <li className={c.complex__itemListChild} key={index}>
            {childItem}
          </li>
        ))}
      </ul>
      <CallBackModal buttonText={'Заказать'} className={c.complex__button}/>
    </div>
  ))

  return (
    <div className={c.complex}>
      <p className={c.complex__title}>
        При заказе комплекса услуг, <br />праздник получается ярче и выгоднее!
      </p>
      <div className={c.complex__container}>
        {complexItems}
      </div>
    </div>
  )
}
