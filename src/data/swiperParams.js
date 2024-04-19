import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';

export const heroSwiperParams = {
  modules: [Navigation, Pagination, Autoplay, EffectFade],
  navigation: true,
  pagination: true,
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
  spaceBetween: 15,
  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    500: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 5,
    },
    1260: {
      slidesPerView: 6,
    }
  }
};

export const gallerySwiperParams = {
  modules: [Navigation],
  navigation: true,
  slidesPerView: 3,
  spaceBetween: 25,
  centeredSlides: true,
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
      spaceBetween: 35,
    }
  },
};

export const reviewsSwiperParams = {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  pagination: true,
  navigation: true,
};
