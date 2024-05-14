import { Button, Image } from 'antd';
import c from './CostumeSelect.module.scss';
import { costumeData } from '../../../data/catalogData/costumeData';
import { ImagePreloader } from '../../../utils/ImagePreloader/ImagePreloader';
import { useCallback } from 'react';

export const CostumeSelect = (props) => {
  const { setCurrentCostume, currentCostume, setIsCostumeSelectOpen } = props;
  
  const splitedData = useCallback((data) => {
    return (
      data.split('\n').map((line, index) => (
        <p key={index} style={{margin: 0}}>{line}</p>
      ))
    )
  }, []);

  const onChooseSuiteHandler = (item) => {
    setCurrentCostume(item);
    setTimeout(() => {
      setIsCostumeSelectOpen(false);
    }, 500);
  }

  return (
    <div className={c.costumeSelect}>
      <ul className={c.costumeSelect__list}>
        {costumeData.map((item, index) => (
          <li className={c.costumeSelect__item} key={index}>
            <div className={c.costumeSelect__imageWrapper}>
              <Image
                src={item.image}
                alt={`Костюм ${item.title}`}
                width={'100%'}
                placeholder={<ImagePreloader />}
              />
            </div>
            <div className={c.costumeSelect__info}>
              <div className={c.costumeSelect__title}>{splitedData(item.title)}</div>
              <Button
                className={`${c.costumeSelect__button} ${currentCostume === item && c.activeButton}`}
                onClick={() => onChooseSuiteHandler(item)}
              >
                {currentCostume !== item ? 'Выбрать' : 'Выбрано'}
              </Button>
            </div>
          </li>
        ))}
      </ul>
      {/* <Button className={c.costumeSelect__applyButton}>Применить</Button> */}
    </div>
  )
}
