/*!
 * Main.js
 */

new Swiper('.slider-photo__container', {
    navigation: {
        nextEl: '.slider-photo__arrow.arrow_next',
        prevEl: '.slider-photo__arrow.arrow_prev'
    },
    slidesPerView: 3,
    autoplay: {
        delay: 5000,
    },
    loop: true,
    initialSlide: 0,
    spaceBetween: 10,
    pagination: {
        el: '.slider-photo__pag',
        type: 'fraction'
    },
    breakpoints: {
        600: {
            slidesPerView: 1
        },
        800: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 2
        }
    }
});

new Swiper('.reviews-photo__container', {
    navigation: {
        nextEl: '.reviews-photo__arrow.arrow_next',
        prevEl: '.reviews-photo__arrow.arrow_prev'
    },
    slidesPerView: 1,
    autoplay: {
        delay: 5000,
    },
    spaceBetween: 10,
    loop: true,
    initialSlide: 0,
    pagination: {
        el: '.reviews-photo__pag',
        type: 'fraction'
    },
});

new Swiper('.slider-top__container', {
    navigation: {
        nextEl: '.slider-top__arrow.arrow_next',
        prevEl: '.slider-top__arrow.arrow_prev'
    },
    slidesPerView: 1,
    //autoplay: {
    //    delay: 5000,
    //},
    spaceBetween: 10,
    loop: true,
    initialSlide: 0,
    pagination: {
        el: '.slider-top__pag',
        type: 'fraction'
    },
});

jQuery('._open-menu').click(function() {
    jQuery(this).next('.top-menu__list').toggleClass('open');
    jQuery('body').toggleClass('_fixed-page');
  });
  
jQuery('._close-menu').click(function() {
    jQuery(this).parent('.top-menu__list').toggleClass('open');
    jQuery('.top-menu__drop').hide();
    jQuery('body').toggleClass('_fixed-page');
});