// Nav mobile
const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav');

navBtn.onclick = function () {
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('nav--mobile');
    document.body.classList.toggle('no-scroll');
}
// Custom select
document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
    const dropDownBtn = dropDownWrapper.querySelector('.sorting__button');
    const dropDownList = dropDownWrapper.querySelector('.sorting__list');
    const dropDownListItems = dropDownList.querySelectorAll('.sorting__list-item');
    const dropDownInput = dropDownWrapper.querySelector('.sorting__input-hidden');


    dropDownBtn.addEventListener('click', function () {
        dropDownList.classList.toggle('sorting__list--visible');
        this.classList.add('sorting__button--active');
    });

    dropDownListItems.forEach(function (listItem) {
        listItem.addEventListener('click', function (event) {
            event.stopPropagation();
            dropDownBtn.innerText = this.innerText;
            dropDownBtn.classList.remove('sorting__button--active');
            dropDownInput.value = this.dataset.value;
            dropDownList.classList.remove('sorting__list--visible');
        });
    });

    document.addEventListener('click', function (event) {
        if (event.target !== dropDownBtn) {
            dropDownList.classList.remove('sorting__list--visible');
            dropDownBtn.classList.remove('sorting__button--active');
        };
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Tab' || event.key === 'Escape') {
            dropDownList.classList.remove('sorting__list--visible');
            dropDownBtn.classList.remove('sorting__button--active');
        };
    });
});
// More-btn catalog block
document.querySelectorAll('.catalog__container').forEach(function (catalogWrapper) {
    const catalogCards = catalogWrapper.querySelector('.catalog__cards');
    const moreBtn = catalogWrapper.querySelector('.more-btn');

    moreBtn.addEventListener('click', function() {
        catalogCards.classList.toggle('catalog__cards--active');
        this.textContent = this.textContent === 'Покажите еще' ? 'Скрыть' : 'Покажите еще';

        if (this.textContent !== 'Скрыть') {
            this.scrollIntoView({ 
                block: "center", 
                behavior: "smooth"
            });
        };
    });
});
// Read-btn feature block
document.querySelectorAll('.feature__container').forEach(function (featureWrapper) {
    const readBtn = featureWrapper.querySelector('.read-btn');
    const featureInfo = featureWrapper.querySelector('.feature__info');

    readBtn.addEventListener('click', function() {
        featureInfo.classList.toggle('feature__info--active');
        this.textContent = this.textContent === 'Читать полностью' ? 'Скрыть' : 'Читать полностью';
    });
});
// Swiper product block
new Swiper ('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
});

const body = document.querySelector('body')
const content = document.querySelector('.swiper');
const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', function () {
    content.classList.add('none');
    body.classList.remove('no-scroll')
});

// const openBtn = document.querySelector('.image-btn');
// openBtn.addEventListener('click', function () {
//     content.classList.remove('none');
//     body.classList.add('no-scroll');
// });

// document.querySelectorAll('.image-btn').forEach(function(open) {

//     closeBtn.addEventListener('click', function () {
//         content.classList.add('none');
//         body.classList.remove('no-scroll')
//     });

//     .addEventListener('click', function () {
//         content.classList.remove('none');
//         body.classList.add('no-scroll');
//     });
// })
