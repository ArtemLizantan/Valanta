import Swiper, {
    Navigation,
    Pagination,
    Autoplay
} from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay]);

function bestHotelsSwiper() {}
const swiper = new Swiper(".mySwiper", {
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