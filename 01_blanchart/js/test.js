function swiperMain() {
    let swiper = new Swiper('.main-swiper', {
        autoplay: true,
        speed: 5000,
        effect: 'fade',

    })
}
swiperMain();

function select(classSelect) {
    const element = document.querySelector(classSelect);
    const choices = new Choices(element, {
        searchEnabled: false,
        position: 'bottom',
        itemSelectText: '',
    });
}
select('.gallery__select')

function gallerySwiper() {
    let swiper = new Swiper('.gallery__swiper', {
        loop: true,
        speed: 2000,
        slidesPerGroup: 1,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            120: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 10,
            },

            520: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
            },

            767: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 35,
            },

            1400: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 30
            },

            1600: {
                slidesPerView: 3,
                spaceBetween: 50,
            }
        }
    });

}
gallerySwiper();


$( function() {
    $( ".catalog__accordion" ).accordion({
        collapsible: true,
        heightStyle: "content",
    });
} );
