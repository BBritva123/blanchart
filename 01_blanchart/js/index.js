// SWIPERS

function swiperMain() {
    let swiper = new Swiper('.main-swiper', {
        autoplay: true,
        speed: 5000,
        effect: 'fade',

    })
};
function gallerySwiper() {
    let swiper = new Swiper('.gallery__swiper', {
        // loop: true,
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
                slidesPerGroup: 3,
                spaceBetween: 50,
            }
        }
    });

};
function eventsSwiper() {
    let swiper = new Swiper('.events__swiper', {
        loop: false,
        speed: 2000,
        slidesPerGroup: 1,
        slidesPerView: 3,
        spaceBetween: 50,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,

        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            //     // when window width is >= 320px
            120: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 10,
            },
            //
            520: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
            },

            767: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 34,
            },
            //
            1000: {
                slidesPerView: 3,
                slidesPerGroup: 2,
                spaceBetween: 27,
            },
            //
            1400: {
                slidesPerGroup: 1,
                slidesPerView: 3,
                spaceBetween: 50,
            },
            //
            //     1600: {
            //         slidesPerView: 3,
            //         spaceBetween: 50,
            //     }
        }
    });

};
function projectsSwiper() {
    let swiperProjects = new Swiper('.projects__swiper', {
        speed: 2000,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1500: {
                slidesPerGroup: 1,
                slidesPerView: 3,
                spaceBetween: 50,
            },
            //
            1410: {
                slidesPerGroup: 1,
                slidesPerView: 3,
                spaceBetween: 30,
            },

            650: {
                slidesPerGroup: 1,
                slidesPerView: 2,
                spaceBetween: 35,
            },

            570: {
                slidesPerGroup: 1,
                slidesPerView: 2,
                spaceBetween: 15,
            },

            250: {
                slidesPerGroup: 1,
                slidesPerView: 1,
                spaceBetween: 10,
            },
        }
    })
};

projectsSwiper();
eventsSwiper();
swiperMain();
gallerySwiper();


// ACCORDION & TABS

$(function () {
    $(".catalog__accordion").accordion({
        collapsible: true,
        heightStyle: "content",
    });
});
$(function () {
    $("#catalog__tabs").tabs({
        active: 11,
    });
});


// TOOLTIP
function tooltipShow() {
    tippy(document.querySelectorAll('.projects__tooltip'), {
        trigger: 'click',
        placement: 'top',
        theme: 'main',
        arrow: true,
    });
};
tooltipShow();


// SELECT

function select(classSelect) {
    const element = document.querySelector(classSelect);
    const choices = new Choices(element, {
        searchEnabled: false,
        position: 'bottom',
        itemSelectText: '',
    });
}
select('.gallery__select')


// SCROLLBAR

document.querySelectorAll('.painter__list').forEach(el => {
    new SimpleBar(el, {
        autoHide: false,
        scrollbarMinSize: 28,
        scrollbarMaxSize: 28,
    });
})

function init() {
    let center = [55.75806550071568, 37.62071708346125];
    let map = new ymaps.Map('map', {
        center: center,
        zoom: 14,
        controls: ['zoomControl', 'geolocationControl']
    }, {
        // Чтобы задать опции через конструктор карты, к названиям опций следует добавить префикс в виде ключа того элемента, для которого задается опция.
            geolocationControlPosition: {
            top: 340,
            right: 20,
        },
        zoomControlPosition: {
            top: 270,
            right: 20,
        },
        zoomControlSize: 'small',
    });
    let placemark = new ymaps.Placemark([55.76048537546929, 37.615395580775704], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/contacts/point.png',
        iconImageSize: [20, 20],
        iconImageOffset: [0, 0],
    });
    map.geoObjects.add(placemark);
    map.controls.remove('rulerControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('routeEditor');
    map.controls.remove('fullscreenControl');
    map.controls.remove('routeButtonControl');
    map.controls.remove('routePanelControl');
}
ymaps.ready(init);
