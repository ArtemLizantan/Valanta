import swiper, { Navigation, Pagination } from 'swiper';

function swiper() {
    const swiper = new Swiper('.hero__swiper', {
        modules: [Navigation, Pagination],
      });
}
swiper();