import * as flsFunction from './modules/functions.js'
flsFunction.isWebp();

$(document).ready(function() {
    $(document).on('click', '.burger', function() {
        $(this).parent().addClass('toggled');
    })
    $(document).on('click', '.close-mob-menu', function() {
        $(this).closest('.mobile-menu').removeClass('toggled');
    })
    $(document).on('click', '.menu__overlay_bg', function() {
        $(this).closest('.mobile-menu').removeClass('toggled');
    })

})
const swiperDots = new Swiper(".swiper-dots", {
    pagination: {
      el: ".swiper-pagination",
    },
});
const swiperArrow = new Swiper(".swiper-arrow", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const swiperCoverflow = new Swiper(".swiper-coverflow", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2,
    loop: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
});
// const myCarousel = new Carousel(document.querySelector(".about-carousel"), {
//     center: true,
//     slidesPerPage: 1,
//     fill: true,
//     Navigation: false
// });
