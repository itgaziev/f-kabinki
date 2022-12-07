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

const myCarousel = new Carousel(document.querySelector(".about-carousel"), {
    center: true,
    slidesPerPage: 1,
    fill: true,
    Navigation: false
});
