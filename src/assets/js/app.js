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
    new Swiper(".swiper-arrow-section", {
        grabCursor: true,
        centeredSlides: false,
        slidesPerView: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            0: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 10
            },
             769: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10
            },
            1140: {
              slidesPerView: 4,
              spaceBetween: 5
            },
        }
    });

    $(document).on('click', '.btn-quiz', function() {
        let form = $(this).closest('form');
        let goNext = false;
        let activeIndex = 0;
        $(form).find('.step-form').each(function(index, element) {
          if($(element).hasClass('active')) {
            activeIndex = index;
          }
        })


        if($(this).attr('data-type') == 'next') {
          if(typeof($(form).find('.step-form')[activeIndex + 1]) === "undefined") return;
          let prevElem = $(form).find('.step-form')[activeIndex];
          $(prevElem).removeClass('active')
          let nextElem = $(form).find('.step-form')[activeIndex + 1];
          $(nextElem).addClass('active')
        } else if($(this).attr('data-type') == 'prev') {
          if(typeof($(form).find('.step-form')[activeIndex - 1]) === "undefined") return;
          let prevElem = $(form).find('.step-form')[activeIndex];
          $(prevElem).removeClass('active')
          let nextElem = $(form).find('.step-form')[activeIndex - 1];
          $(nextElem).addClass('active')
        }
    })
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

