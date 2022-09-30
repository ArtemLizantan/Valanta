
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
        delay: 1000,
    },

});

bestHotelsSwiper();