import { catalogMenuData } from './catalogMenuData';
import IMG_BALLOONS from '../assets/collections/balloons.png';
import IMG_ANIMATION from '../assets/collections/animation.png';
import IMG_ATTRACTIONS from '../assets/collections/attractions.png';
import IMG_PHOTOZONE from '../assets/collections/photozone.png';

export const collectionsData = catalogMenuData
  .filter((item) => item.children && item.children.length > 0)
  .map((item) => {
    const topLevelItem = {
      key: item.key,
      icon: item.icon,
      label: item.label,
      image: getImageForItem(item.key), // Add image path for top level item
      children: [],
    };

    topLevelItem.children = item.children.map((child) => ({
      key: child.key,
      icon: child.icon,
      label: child.label,
      image: getImageForItem(child.key), // Add image path for child item
    }));

    return topLevelItem;
  });

function getImageForItem(itemKey) {
  switch (itemKey) {
    case 'balloons':
      return IMG_BALLOONS;
    case 'animation':
      return IMG_ANIMATION;
    case 'attractions':
      return IMG_ATTRACTIONS;
    case 'photozone':
      return IMG_PHOTOZONE;
    default:
      return ''; // Return default image or handle other cases
  }
}
