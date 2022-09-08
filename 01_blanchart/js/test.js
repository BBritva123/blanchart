// let item = document.querySelectorAll('.header-bottom__item');
// let blocks = document.querySelectorAll('.painter__block');
//
// item.forEach(el => {
//     let button = el.querySelector('.header-bottom__button-list');
//     let block = el.querySelector('.painter__block');
//     console.log(button)
//     console.log(block)
//
//     button.addEventListener('click', el => {
//
//
//     })
//
// })


// const buttons = document.querySelectorAll('.header-bottom__button-list')
// const blocks = document.querySelectorAll('.painter__block')
// const classActiveButton = 'button-active'
// const classActiveBlock = 'block-active'
//
// buttons.forEach(element => {
//     element.addEventListener('click', function () {
//         let blockThis = this.querySelector('.painter__block')
//         blocks.forEach(el => {
//             if(el != blockThis) {
//                 el.classList.remove(classActiveBlock)
//             }
//         });
//         buttons.forEach(el => {
//             if(el != this) {
//                 el.classList.remove(classActiveButton)
//             }
//         });
//
//         blockThis.classList.toggle(classActiveBlock)
//         ;
//         this.classList.toggle(classActiveButton)
//     })
// })


let buttons = document.querySelectorAll('.header-bottom__button-list')
let blocks = document.querySelectorAll('.painter__block')

buttons.forEach(button => {
    button.addEventListener('click', function () {
        console.log(this.parentElement.querySelector('.painter__block'))
        let thisBlock = this.parentElement.querySelector('.painter__block')
        thisBlock.classList.toggle('display-none')
    })
})


let buttonBurger = document.querySelector('.header-top__button-burger')
buttonBurger.addEventListener('click', () => {
    let nav = document.querySelector('.header-top__nav')
    let links = document.querySelectorAll('.nav__link')
    buttonBurger.classList.toggle('is-open')
    nav.classList.toggle('is-open')
    if (nav.classList.contains('is-open')) {
        document.querySelector('body').style.overflow = 'hidden'
    } else document.querySelector('body').style.overflow = 'visible'
    links.forEach(link => {
        link.addEventListener('click', () => {
            buttonBurger.classList.remove('is-open')
            nav.classList.remove('is-open')
            document.querySelector('body').style.overflow = 'visible'
        })
    })
})

let iconSearch = document.querySelector('.search__icon')
let iconClose = document.querySelector('.close__icon')
let blockSearch = document.querySelector('.block__search')
let headerSearch = document.querySelector('.header__search')
let form = document.querySelector('.form__search')
let buttonClose = document.querySelector('.close__button')

buttonClose.addEventListener('click', () => {
    buttonClose.classList.toggle('is-open')
    form.classList.toggle('is-open')
    iconSearch.classList.toggle('is-open')
    iconClose.classList.toggle('is-open')
    blockSearch.classList.toggle('is-open')
    headerSearch.classList.toggle('is-open')
})

