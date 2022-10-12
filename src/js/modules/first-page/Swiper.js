import Swiper, {
    Navigation,
    Pagination,
    Autoplay,
    Scrollbar
} from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay, Scrollbar]);

// ...........................................................................................

function heroSwiper() {
    const heroSwiper = new Swiper('.hero__swiper', {
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 4500,
            stopOnLastSlide: false,
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
        scrollbar: true,
        speed: 900,
    });
};

heroSwiper();

function bestHotelsSwiper() {
    const hotelSwiper = new Swiper(".best-hotels-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: ".best-hotels-button-next",
            prevEl: ".best-hotels-button-prev",
        },
        autoplay: {
            delay: 4500
        },
        scrollbar: {
            el: ".best-hotel-scroll",
        },
        scrollbar: true,
        speed: 900,
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
};

bestHotelsSwiper();



function actualSwiper() {
    const actualSwiper = new Swiper(".actual-swiper ", {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: ".actual-button-next",
            prevEl: ".actual-button-prev",
        },
        scrollbar: true,
        speed: 900,
        autoplay: {
            delay: 4500
        },

        scrollbar: {
            el: ".actual-scroll",
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
};

actualSwiper();


function newsSwiper(){
    const newsSwiper = new Swiper(".news__swiper", {
      modules: [Navigation , Autoplay],
      loop:true,
      navigation: {
        nextEl: ".news__button-next",
        prevEl: ".news__button-prev",
    },
    autoplay: {
        delay: 4500,
    },
    scrollbar: {
        el: ".news-scroll",
    },
      speed:900,
      slidesPerView:4,
      spaceBetween:30,
      slidesPerGroup:1,
      breakpoints: {
        310: {
            slidesPerView: 1,
        },
        525: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        }
        
      }
    });
  }
  
  newsSwiper();

  function blogSwiper(){
    const blogSwiper = new Swiper(".blog__swiper", {
      modules: [Navigation , Autoplay],
      loop:true,
      navigation: {
        nextEl: ".blog__button-next",
        prevEl: ".blog__button-prev",
    },
    autoplay: {
        delay: 4500,
    },
    scrollbar: {
        el: ".blog-scroll",
    },
    breakpoints: {
        310: {
            slidesPerView: 1,
        },
        525: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        }
      },
      speed:900,
      slidesPerView:4,
      spaceBetween:30,
      slidesPerGroup:1,

    });
  }
  
blogSwiper();


function proudSwiper(){
    const proudSwiper = new Swiper(".proud__swiper", {
      modules: [Navigation , Autoplay],
      navigation: {
        nextEl: ".proud-button-next",
        prevEl: ".proud-button-prev",
    },
    scrollbar: {
        el: ".proud-scrollbar",
    },
    breakpoints: {
        310: {
            slidesPerView: 1,
        },
        525: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        }
      },
      speed:900,
      slidesPerView: 1,
      spaceBetween:3,
      slidesPerGroup:1,
    });
  }
  proudSwiper();