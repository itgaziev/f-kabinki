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

    new Swiper(".swiper-arrow", {
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
})
const swiperDots = new Swiper(".swiper-dots", {
    pagination: {
      el: ".swiper-pagination",
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

