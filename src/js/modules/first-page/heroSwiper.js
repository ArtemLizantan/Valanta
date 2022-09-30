
import Swiper, {
    Navigation,
    Pagination
} from 'swiper';

Swiper.use([Navigation, Pagination]);

function bestHotelsSwiper() {}
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000,
    },

});

bestHotelsSwiper();