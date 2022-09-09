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


// let buttons = document.querySelectorAll('.header-bottom__button-list')
// let blocks = document.querySelectorAll('.painter__block')
//
// buttons.forEach(button => {
//     button.addEventListener('click', function () {
//         console.log(this.parentElement.querySelector('.painter__block'))
//         let thisBlock = this.parentElement.querySelector('.painter__block')
//         thisBlock.classList.toggle('display-none')
//     })
// })



