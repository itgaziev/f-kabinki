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

    new Swiper(".swiper-arrow.slider-thumbs", {
        grabCursor: false,
        centeredSlides: false,
        slidesPerView: 4,
        spaceBetween: 10,
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

    $(document).on('click', '.slider-thumbs .slide-item .swiper-bg[data-src]', function(e) {
        e.preventDefault();
        $('a.detail-img-box > img').attr('src', $(this).attr('data-src'));
        $('.slider-thumbs .slide-item').removeClass('active');
        $(this).parent().addClass('active');

    })

    $(document).on('click', '.filter-nav', function () {
        let parent = $(this).closest('.filter-nav-wrapper');
        $(parent).find('.filter-nav').removeClass('active')
        $(this).addClass('active')
        let index = $(this).attr('data-tab-index');
        $(parent).find('.filter-item').removeClass('active');
        $(parent).find('.filter-item[data-tab-index="'+index+'"]').addClass('active');
    })

    $(document).on('click', '.popap-card', function(){
        // TODO : ajax content load
        $('#popap-card').addClass('opened');
        $('body').addClass('disable-scroll');
    })

    $(document).on('click', '.popap-container .close-popap', function() {
        $(this).closest('.popap-container').removeClass('opened');
        $('body').removeClass('disable-scroll');
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

$(function() {
    $(document).on('submit', '.reg-form', function(e) {
        e.preventDefault();

        $(this).addClass('was-validated')
    })

    $(document).on('change', '#inputRepeatPassword', function() {
        let inputPassword = $('#inputPassword').val();
        if(inputPassword !== $(this).val()) {
            this.setCustomValidity('Passwords must match');
        } else {
            this.setCustomValidity('');
        }
    })
})