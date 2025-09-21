
const mainswiper = new Swiper(".main-Swiper", {
    slidesPerView: 1,
    spaceBetween: 60,
    loop: true,
     autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
   
    breakpoints: {

        450: {
            slidesPerView: 1,
        },
        650: {
            slidesPerView: 2
        },
        1100: {
            slidesPerView: 3
        }
    }
});



const thumbswiper = new Swiper('.thumb-Swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
     autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        400: {
            slidesPerView: 2
        },
        1000: {
            slidesPerView: 3
        },
        1100: {
            slidesPerView: 4
        }
    }
});

const thumb1swiper = new Swiper('.thumb1-Swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
     autoplay: {
        delay: 2000,
        disableOnInteraction: false,
     },
   
     breakpoints: {
        0: {
            slidesPerView: 1
        },
        400: {
            slidesPerView: 2
        },
        1000: {
            slidesPerView: 3
        },
        1100: {
            slidesPerView: 4
        }
    }
});
const thumb2swiper = new Swiper('.thumb2-Swiper', {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
   
    },
});
