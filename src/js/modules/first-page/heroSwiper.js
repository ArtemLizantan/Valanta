
Swiper.use([Navigation, Pagination, Autoplay]);

import Swiper, {
    Navigation,
    Pagination,
    Autoplay
} from 'swiper';


function heroSwiper(){
  const heroSwiper = new Swiper('.swiper', {
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
    speed:900,
  });
}

heroSwiper();

function bestHotelsSwiper() {}
const hotelSwiper = new Swiper(".best-hotels-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        310: {
            slidesPerView: 1,
        },
        
        700: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1240: {
            slidesPerView: 3,
        },
        1650: {
            slidesPerView: 3,
        },
    },
});

bestHotelsSwiper();


