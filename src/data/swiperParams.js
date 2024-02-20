import { Navigation, Pagination, Autoplay, Parallax, EffectFade, Thumbs } from 'swiper';

export const heroSwiperParams = {
  modules: [Navigation, Pagination, Autoplay, Parallax, EffectFade],
  navigation: true,
  pagination: true,
  parallax: true,
  loop: true,
  preventInteractionOnTransition: true,
  speed: 1000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 5000,
  },
}

export const gallerySwiperParams = {
  modules: [Thumbs, Navigation, Pagination, Autoplay],
  spaceBetween: 15,
  speed: 5000,
  // allowTouchMove: false,
  loop: true,
  autoplay: {
    delay: 10,
    disableOnInteraction: true,
    // stopOnLast: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1260: {
      slidesPerView: 5,
    }
  }
};
