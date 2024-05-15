import { Button, Image } from 'antd';
import c from './CostumeSelect.module.scss';
import { costumeData } from '../../../data/catalogData/costumeData';
import { ImagePreloader } from '../../../utils/ImagePreloader/ImagePreloader';
import { useCallback } from 'react';
import { setSelectedCostume } from '../../../redux/costumeSlice';
import { useDispatch, useSelector } from 'react-redux';

export const CostumeSelect = (props) => {
  const { setCurrentCostume, currentCostume, setIsCostumeSelectOpen, article } = props;
  const selectedCostumes = useSelector((state) => state.costume.selectedCostumes);
  const dispatch = useDispatch();
  
  const splitedData = useCallback((data) => {
    return (
      data.split('\n').map((line, index) => (
        <p key={index} style={{margin: 0}}>{line}</p>
      ))
    )
  }, []);

  const onChooseSuiteHandler = (item) => {
    const costume = item.title;
    dispatch(setSelectedCostume({ itemId: article, costume }));
    const updatedCostumes = { ...selectedCostumes, [article]: costume };
    localStorage.setItem('selectedCostumes', JSON.stringify(updatedCostumes));
    setCurrentCostume(costume);
    setTimeout(() => {
      setIsCostumeSelectOpen(false);
    }, 500);
  }

  return (
    <div className={c.costumeSelect}>
      <p className={c.costumeSelect__total}>Всего доступно: {costumeData.length} костюмов</p>
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
