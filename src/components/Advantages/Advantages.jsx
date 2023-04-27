import c from './Advantages.module.scss';
import { CoffeeOutlined, SafetyCertificateOutlined, StarOutlined, ShoppingCartOutlined } from '@ant-design/icons';

export const Advantages = () => {
  return (
    <section className={c.advantages}>
      <div className="container">
        <h2 className={c.advantages__title}>Преимущества работы с&nbsp;нами</h2>
        <ul className={c.advantages__list}>
          <li className={c.advantages__item}>
            <div className={c.advantages__image}>
              <SafetyCertificateOutlined />
            </div>
            <h3 className={c.advantages__itemName}>Надежность</h3>
            <p className={c.advantages__itemText}>С 2016 года работаем с государственными, муниципальными учреждениями, юридическими и физическими лицами</p>
          </li>
          <li className={c.advantages__item}>
            <div className={c.advantages__image}>
              <StarOutlined />
            </div>
            <h3 className={c.advantages__itemName}>Качество</h3>
            <p className={c.advantages__itemText}>Используем только качественные материалы, поэтому наши гирлянды сохраняют свой вид несколько месяцев, а шары с гелием летают очень долго</p>
          </li>
          <li className={c.advantages__item}>
            <div className={c.advantages__image}>
              <CoffeeOutlined />
            </div>
            <h3 className={c.advantages__itemName}>Удобство</h3>
            <p className={c.advantages__itemText}>Подбираем оформление под любой бюджет. Бесплатно делаем макет, согласовываем с вами дизайн, составляем договор</p>
          </li>
          <li className={c.advantages__item}>
            <div className={c.advantages__image}>
              <ShoppingCartOutlined />
            </div>
            <h3 className={c.advantages__itemName}>Оплата</h3>
            <p className={c.advantages__itemText}>Принимаем оплату: наличными, на карту, на расчетный счёт</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
