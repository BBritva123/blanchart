// (function scrollbarCustom() {
//     document.querySelectorAll('.painter__list').forEach(el => {
//         new SimpleBar(el, {
//             autoHide: false,
//             scrollbarMinSize: 28,
//             scrollbarMaxSize: 28,
//         });
//     })
// }());
// scrollbarCustom();




// function init() {
//     let center = [55.75806550071568,37.62071708346125];
//     let map = new ymaps.Map('map', {
//         center: center,
//         zoom: 14,
//     });
//
//     let placemark = new ymaps.Placemark([55.76048537546929,37.615395580775704], {}, {
//         iconLayout: 'default#image',
//         iconImageHref: '../img/contacts/point.png',
//         iconImageSize: [50, 50],
//         iconImageOffset: [0, 0],
//     });
//     map.geoObjects.add(placemark);
// };
// ymaps.ready(init);

ymaps.ready(init);

function init() {
    let myMap = new ymaps.Map("map", {
            center: [55.75806550071568, 37.62071708346125],
            zoom: 14,
            // type: 'yandex#hybrid',
        }),
        myPlacemark = new ymaps.Placemark([55.75806550071568, 37.62071708346125], {}, {
            iconLayout: "default#image",
            iconImageHref: "../img/contacts/point.svg",
            iconImageSize: [50, 50],
        });
    myMap.geoObjects.add(myPlacemark);
    myMap.state.type('yandex#satellite');
}
