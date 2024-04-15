import { Navigation, Pagination, Autoplay, Parallax, EffectFade } from 'swiper';

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

export const hitsSwiperParams = {
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 3,
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
