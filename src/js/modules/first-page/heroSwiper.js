import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination , Autoplay],  
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },
  autoplay:{
    delay:4500,
    stopOnLastSlide:false,
  },
  scrollbar:true
});
