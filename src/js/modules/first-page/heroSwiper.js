
Swiper.use([Navigation, Pagination, Autoplay]);

import Swiper, {
    Navigation,
    Pagination,
    Autoplay
} from 'swiper';


function heroSwiper(){
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
    scrollbar:true,
    speed:900,
  });
}

heroSwiper();

function bestHotelsSwiper() {}
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 1000,
    },

});

bestHotelsSwiper();
