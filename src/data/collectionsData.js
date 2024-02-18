import IMG_BALLOONS from '../assets/hero/collections/balloons.webp';
import IMG_ANIMATION from '../assets/hero/collections/animation.webp';
import IMG_ATTRACTIONS from '../assets/hero/collections/attractions.webp';
import IMG_PHOTOZONE from '../assets/hero/collections/photozone.webp';

export const collectionsData = [
  {
    label: 'Воздушные шары',
    key: 'balloons',
    image: IMG_BALLOONS,
    link: '/catalog',
  },
  {
    label: 'Фотозоны',
    key: 'photozone',
    image: IMG_PHOTOZONE,
    link: '/catalog',
  },
  {
    label: 'Аниматоры и шоу',
    key: 'animation',
    image: IMG_ANIMATION,
    link: '/catalog',
  },
  {
    label: 'Аттракционы и оборудование',
    key: 'attractions',
    image: IMG_ATTRACTIONS,
    link: '/catalog',
  },
]
