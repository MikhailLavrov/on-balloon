import { catalogMenuData } from './catalogMenuData';
import IMG_BALLOONS from '../assets/collections/balloons.webp';
import IMG_ANIMATION from '../assets/collections/animation.webp';
import IMG_ATTRACTIONS from '../assets/collections/attractions.webp';
import IMG_PHOTOZONE from '../assets/collections/photozone.webp';
// import IMG_HIT from '../assets/collections/hit.webp';

export const collectionsData = catalogMenuData
  .filter((item) => item.children && item.children.length > 0)
  .map((item) => {
    const topLevelItem = {
      key: item.key,
      icon: item.icon,
      label: item.label,
      image: getImageForItem(item.key),
      children: [],
    };
    if (item.children) {
      topLevelItem.children = item.children.map((child) => ({
        key: child.key,
        icon: child.icon,
        label: child.label,
        image: getImageForItem(child.key),
      }));
    }

    return topLevelItem;
  });

function getImageForItem(itemKey) {
  switch (itemKey) {
    // case 'hit':
    //   return IMG_HIT;
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
