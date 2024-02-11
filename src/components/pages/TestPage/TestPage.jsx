import c from './TestPage.module.scss';
import { testData } from '../../../data/testData';

const testItems = testData.map((item, index) => (
  <div className={c.testCard}>
    <div className={c.image}>
      <img key={index} src={item.image} alt={item.description} />
    </div>
    <div className={c.textContent}>
      Артикул {item.article}
      <h2>{item.title}</h2>
      <p className={c.price}>{item.price} рублей</p>
    </div>
  </div>
))

export const TestPage = () => {
  return (
    <section>
      <div className='container'>
        <div className={c.testCards}>
          {testItems}
        </div>
      </div>
    </section>
  )
}
