import { Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import c from './MobileTopMenu.module.scss';
import { infoMenuData } from '../../data/infoData/infoMenuData';

const { Option } = Select;

export const MobileTopMenu = ({ handleMenuClose }) => {
  const navigate = useNavigate();

  const onClick = (e) => {
    handleMenuClose();
    navigate(`/info/${e}`)
  };

  const RenderInfoSelects = () => {
    return (
      <div className={c.mobileTopMenu}>
        {infoMenuData.map((parentItem) => (
          <Select
            key={parentItem.key}
            defaultValue={parentItem.label}
            onChange={(e) => onClick(e)}
            size='large'
            placement='top'
            className={c.mobileTopMenu__select}
          >
            {parentItem.children.map((childItem) => (
              <Option 
                key={childItem.key}
                value={childItem.key}
                className={c.mobileTopMenu__option}
              >
                {childItem.label}
              </Option>
            ))}
          </Select>
        ))}
      </div>
    );
  }

  return (
    <RenderInfoSelects />
  )
}
